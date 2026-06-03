import { useState, useEffect, useRef, useCallback } from 'react';
import { generateNPC, rerollField, buildPrompt, npcToMarkdown, abilityMod, PRESETS, T, type NPC, type Locks } from '../data/npc-data';
import { useTweaks, TweaksPanel, TweakSection, TweakSlider, TweakRadio } from './TweaksPanel';

const ALL_TAGS = ["gótico","cortesano","infernal","feérico","marcial","erudito","criminal","divino","arcano","plebeyo"];
const CUSTOM = "__custom__";

const ROLE_COLORS: Record<string, string> = {
  "Aliado":              "oklch(0.74 0.13 152)",
  "Enemigo":             "oklch(0.66 0.17 25)",
  "Neutral":             "oklch(0.74 0.02 290)",
  "Moralmente ambiguo":  "oklch(0.7 0.15 305)"
};

const ACCENTS: Record<string, { a: string; dim: string; glow: string }> = {
  "Amatista":          { a: "oklch(0.64 0.165 300)", dim: "oklch(0.46 0.12 300)", glow: "0.64 0.165 300" },
  "Carmesí Sangre":    { a: "oklch(0.58 0.18 25)",  dim: "oklch(0.42 0.14 25)",  glow: "0.58 0.18 25" },
  "Turquesa Brujesco": { a: "oklch(0.66 0.13 195)", dim: "oklch(0.48 0.1 195)",  glow: "0.66 0.13 195" },
  "Oro Brasa":         { a: "oklch(0.72 0.14 75)",  dim: "oklch(0.54 0.11 75)",  glow: "0.72 0.14 75" }
};

const TWEAK_DEFAULTS = { accent: "Amatista", headFont: "Cinzel", texture: 0.5 };

/* ---- Íconos ---- */
const IconDie = () => <span className="die">⚄</span>;
const IconReroll = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 3v5h-5" />
  </svg>
);
const IconLock = ({ on }: { on: boolean }) => on ? (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
) : (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 7.5-1.7" />
  </svg>
);
const IconCopy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
);
const IconSpark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

/* ---- Campo reroleable ---- */
function Field({ fkey, label, onReroll, children, className }: {
  fkey: string; label: string; onReroll: (k: string) => void;
  children: React.ReactNode; className?: string;
}) {
  return (
    <div className={"field" + (className ? " " + className : "")}>
      <div className="flabel">{label}</div>
      {children}
      <div className="fctl">
        <button className="iconbtn" title="Relanzar este campo" onClick={() => onReroll(fkey)}><IconReroll /></button>
      </div>
    </div>
  );
}

/* ---- Bloque de atributos ---- */
function AbilityScores({ npc, locks, onReroll, onLock }: {
  npc: NPC; locks: Locks; onReroll: (k: string) => void; onLock: (k: string) => void;
}) {
  return (
    <div className="field" style={{ padding: "0 58px 0 0" }}>
      <div className="flabel">Atributos</div>
      <div className="abilities">
        {(Object.entries(npc.abilities) as [string, number][]).map(([k, v]) => (
          <div className="ability" key={k}>
            <div className="ab-name">{k}</div>
            <div className="ab-score">{v}</div>
            <div className="ab-mod">{abilityMod(v)}</div>
          </div>
        ))}
      </div>
      <div className="fctl">
        <button
          className={"iconbtn" + (locks.abilities ? " on" : "")}
          title={locks.abilities ? "Atributos bloqueados" : "Bloquear atributos"}
          onClick={() => onLock("abilities")}
        >
          <IconLock on={!!locks.abilities} />
        </button>
        <button className="iconbtn" title="Relanzar 4d6 (descartar el menor)" onClick={() => onReroll("abilities")}>
          <IconReroll />
        </button>
      </div>
    </div>
  );
}

function NameBlock({ npc, locks, onReroll, onLock }: {
  npc: NPC; locks: Locks; onReroll: (k: string) => void; onLock: (k: string) => void;
}) {
  return (
    <div className="npc-head">
      <div className="field" style={{ padding: "0 64px 0 0", flex: 1 }}>
        <div className="npc-name">{npc.name}</div>
        <div className="npc-sub">{npc.pronouns} · {npc.age}</div>
        <div className="fctl" style={{ top: 2 }}>
          <button className={"iconbtn" + (locks.name ? " on" : "")}
            title={locks.name ? "Nombre bloqueado" : "Bloquear nombre"} onClick={() => onLock("name")}>
            <IconLock on={!!locks.name} />
          </button>
          <button className="iconbtn" title="Relanzar nombre" onClick={() => onReroll("name")}><IconReroll /></button>
        </div>
      </div>
      <span className="badge" style={{ color: ROLE_COLORS[npc.narrativeRole] || "var(--muted)" }}>
        {npc.narrativeRole}
      </span>
    </div>
  );
}

function NpcCard({ npc, locks, onReroll, onLock }: {
  npc: NPC; locks: Locks; onReroll: (k: string) => void; onLock: (k: string) => void;
}) {
  const preset = PRESETS[npc.preset] || PRESETS["5e Genérico"];
  return (
    <div className="panel">
      <span className="corner tl" /><span className="corner tr" />
      <span className="corner bl" /><span className="corner br" />
      <div className="panel-inner">
        <NameBlock npc={npc} locks={locks} onReroll={onReroll} onLock={onLock} />

        <div className="meta">
          <div className="tag"><span className="k">{preset.lineageLabel}</span>{npc.race}</div>
          <div className="tag"><span className="k">{preset.classLabel}</span>{npc.klass}</div>
          <div className="tag"><span className="k">Alineamiento</span>{npc.alignment}</div>
          <div className="tag"><span className="k">Poder</span>{npc.power}</div>
        </div>

        <div className="divider" />

        <Field fkey="appearance" label="Semblante" onReroll={onReroll}>
          <div className="fval">{npc.appearance}.</div>
        </Field>

        <div className="divider" />

        <Field fkey="traits" label="Personalidad" onReroll={onReroll}>
          <div className="traits-list">
            {npc.traits.map((t, i) => <div className="fval" key={i}>{t}</div>)}
          </div>
        </Field>

        <div className="divider" />

        <Field fkey="motivation" label="Motivación" onReroll={onReroll}>
          <div className="fval">{npc.motivation}</div>
        </Field>

        <div className="divider" />

        <AbilityScores npc={npc} locks={locks} onReroll={onReroll} onLock={onLock} />

        <div className="hook field" style={{ paddingRight: 58 }}>
          <div className="flabel">Secreto y Gancho</div>
          <div className="fval">{npc.secret}</div>
          <div className="fctl" style={{ top: 16, right: 16 }}>
            <button className="iconbtn" title="Relanzar secreto" onClick={() => onReroll("secret")}>
              <IconReroll />
            </button>
          </div>
        </div>

        {npc.tags.length > 0 && (
          <div className="chips" style={{ marginTop: 20 }}>
            {npc.tags.map(tag => (
              <span className="chip on" key={tag} style={{ cursor: "default" }}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- App principal ---- */
export default function NpcConjuror() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [preset, setPreset] = useState("5e Genérico");
  const [ctl, setCtl] = useState({ race: "any", klass: "any", alignment: "any", ageRange: "any", narrativeRole: "any", power: "any" });
  const [customRace, setCustomRace] = useState("");
  const [customClass, setCustomClass] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [npc, setNpc] = useState<NPC | null>(null);
  const [locks, setLocks] = useState<Locks>({});
  const [rolling, setRolling] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Validación para evitar cuelgues si el navegador del usuario tenía en caché un preset que ya no existe
  useEffect(() => {
    if (!PRESETS[preset]) {
      setPreset("5e Genérico");
    }
  }, [preset]);

  const presetCfg = PRESETS[preset] || PRESETS["5e Genérico"];

  const buildOpts = useCallback((p: string, c: typeof ctl, cr: string, cc: string, tg: string[]) => ({
    preset: p,
    race: c.race === CUSTOM ? (cr.trim() || "Viajero") : c.race,
    klass: c.klass === CUSTOM ? (cc.trim() || "Errante") : c.klass,
    alignment: c.alignment, ageRange: c.ageRange, narrativeRole: c.narrativeRole, power: c.power,
    tags: tg
  }), []);

  const summon = useCallback(() => {
    setRolling(true);
    setNpc(prev => {
      const next = generateNPC(buildOpts(preset, ctl, customRace, customClass, tags), prev ?? {}, locks);
      setPromptText(buildPrompt(next));
      return next;
    });
    setTimeout(() => setRolling(false), 550);
  }, [preset, ctl, customRace, customClass, tags, locks, buildOpts]);

  useEffect(() => {
    const first = generateNPC({ preset: "5e Genérico", tags: [] });
    setNpc(first);
    setPromptText(buildPrompt(first));
  }, []);

  useEffect(() => {
    const root = document.documentElement.style;
    const acc = ACCENTS[t.accent as string] || ACCENTS["Amatista"];
    root.setProperty("--accent", acc.a);
    root.setProperty("--accent-dim", acc.dim);
    root.setProperty("--accent-glow", acc.glow);
    root.setProperty("--head-font", `"${t.headFont}"`);
    root.setProperty("--texture-op", String(t.texture));
  }, [t.accent, t.headFont, t.texture]);

  const reroll = useCallback((key: string) => {
    setNpc(prev => {
      if (!prev) return prev;
      const n = rerollField(prev, key);
      setPromptText(buildPrompt(n));
      return n;
    });
  }, []);

  const toggleLock = useCallback((key: string) => {
    setLocks(p => ({ ...p, [key as keyof NPC]: !p[key as keyof NPC] }));
  }, []);

  const changePreset = (p: string) => {
    setPreset(p);
    setCtl(c => ({ ...c, race: "any", klass: "any" }));
    setCustomRace(""); setCustomClass("");
    setTags(PRESETS[p].defaultTags.slice());
  };

  const toggleTag = (tag: string) => {
    setTags(prev => prev.includes(tag) ? prev.filter(x => x !== tag) : [...prev, tag]);
  };

  const flash = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };

  const copyPrompt = () => {
    navigator.clipboard?.writeText(promptText)
      .then(() => flash("Prompt copiado — pégalo en cualquier IA"), () => flash("No se pudo copiar"));
  };

  const copyMd = () => {
    if (!npc) return;
    navigator.clipboard?.writeText(npcToMarkdown(npc))
      .then(() => flash("NPC copiado como Markdown"), () => flash("No se pudo copiar"));
  };

  const sel = (key: keyof typeof ctl, label: string, opts: string[], withCustom = false) => (
    <div className="ctl">
      <label>{label}</label>
      <select value={ctl[key]} onChange={(e) => setCtl(c => ({ ...c, [key]: e.target.value }))}>
        <option value="any">Cualquiera</option>
        {opts.map(o => <option key={o} value={o}>{o}</option>)}
        {withCustom && <option value={CUSTOM}>Personalizado…</option>}
      </select>
    </div>
  );

  return (
    <div className="wrap">
      <header>
        <div className="crest">✦ Carpe Noctem ✦</div>
        <h1>Conjurador de NPC</h1>
        <div className="tagline">Convoca un alma para tu mesa — y entrega la semilla a tu IA para que la traiga completa</div>
        <div className="rule">
          <span className="line" /><span className="lozenge" /><span className="line r" />
        </div>
      </header>

      <div className="layout">
        {/* Panel de controles */}
        <div className="panel controls">
          <span className="corner tl" /><span className="corner tr" />
          <span className="corner bl" /><span className="corner br" />
          <div className="panel-inner">
            <div className="section-title">Códex</div>
            <div className="preset-row">
              <select className="preset-select" value={preset} onChange={(e) => changePreset(e.target.value)}>
                {Object.keys(PRESETS).map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <div className="preset-blurb">{presetCfg.blurb}</div>
            </div>

            <div className="section-title">Conjuración</div>
            {sel("race", presetCfg.lineageLabel, presetCfg.races, true)}
            {ctl.race === CUSTOM && (
              <div className="ctl" style={{ marginTop: -6 }}>
                <input className="txtin"
                  placeholder={"Escribe un/una " + presetCfg.lineageLabel.toLowerCase() + "…"}
                  value={customRace} onChange={(e) => setCustomRace(e.target.value)} />
              </div>
            )}
            {sel("klass", presetCfg.classLabel, presetCfg.classes, true)}
            {ctl.klass === CUSTOM && (
              <div className="ctl" style={{ marginTop: -6 }}>
                <input className="txtin"
                  placeholder={"Escribe un/una " + presetCfg.classLabel.toLowerCase() + "…"}
                  value={customClass} onChange={(e) => setCustomClass(e.target.value)} />
              </div>
            )}
            {sel("alignment", "Alineamiento", T.alignments)}
            <div className="row2">
              {sel("ageRange", "Edad", T.ageRanges)}
              {sel("power", "Nivel de poder", T.powerLevels)}
            </div>
            {sel("narrativeRole", "Rol narrativo", T.narrativeRoles)}

            <div className="section-title" style={{ marginTop: 22 }}>Temas</div>
            <div className="chips">
              {ALL_TAGS.map(tag => (
                <span key={tag} className={"chip" + (tags.includes(tag) ? " on" : "")} onClick={() => toggleTag(tag)}>
                  {tag}
                </span>
              ))}
            </div>

            <button className={"generate" + (rolling ? " rolling" : "")} onClick={summon}>
              <IconDie /> Generar NPC
            </button>
          </div>
        </div>

        {/* Panel de salida */}
        <div>
          {npc && <NpcCard npc={npc} locks={locks} onReroll={reroll} onLock={toggleLock} />}

          <div className="panel ai-panel">
            <span className="corner tl" /><span className="corner tr" />
            <span className="corner bl" /><span className="corner br" />
            <div className="panel-inner">
              <div className="ai-head">
                <div className="section-title" style={{ marginBottom: 0 }}>Prompt para expandir con IA</div>
              </div>
              <div className="ai-note" style={{ marginBottom: 12 }}>
                Copia esto en Claude, ChatGPT o Gemini para convertir la semilla en una ficha de personaje completa — bloque de estadísticas, voz, relaciones y ganchos de trama.
              </div>
              <textarea className="prompt" value={promptText}
                onChange={(e) => setPromptText(e.target.value)} spellCheck={false} />
              <div className="btnrow">
                <button className="ghost" onClick={copyPrompt}><IconSpark /> Copiar prompt</button>
                <button className="ghost" onClick={copyMd}><IconCopy /> Copiar NPC como Markdown</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"toast" + (toast ? " show" : "")}>{toast}</div>

      <TweaksPanel title="Ajustes">
        <TweakSection label="Paleta arcana" />
        <TweakRadio label="Acento" value={t.accent as string} options={Object.keys(ACCENTS)}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Tipografía" />
        <TweakRadio label="Tipografía del título" value={t.headFont as string}
          options={["Cinzel", "Cormorant Garamond"]} onChange={(v) => setTweak("headFont", v)} />
        <TweakSection label="Atmósfera" />
        <TweakSlider label="Textura" value={t.texture as number} min={0} max={1} step={0.05}
          onChange={(v) => setTweak("texture", v)} />
      </TweaksPanel>
    </div>
  );
}
