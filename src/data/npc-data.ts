/* Carpe Noctem — datos, tablas y generación de PNJ */

export const T = {
  namesByRace: {
    Humano: {
      first: ["Alistair","Althea","Andrew","Audrey","Barrett","Beatrix","Caleb","Cassandra","Cedric","Clara","Daniel","Dorothy","Edgar","Edith","Edmund","Eleanor","Evelyn","Francis","Genevieve","Gideon","Grace","Gregory","Gwendolyn","Harold","Helen","Henry","Irene","Jasper","Jane","Jonathan","Judith","Julian","Leonora","Lucas","Lydia","Marcus","Marian","Martin","Matilda","Nicholas","Nora","Orson","Patricia","Percival","Phyllis","Quentin","Rebecca","Reginald","Rosemary","Samuel","Sibyl","Silas","Sylvia","Timothy","Tabitha","Tristan","Valerie","Victor","Vivian","Walter","Winifred","Zachary","Abigail","Benedict","Christian","Damian","Emma","Felix","Isabel","Peter"],
      last: ["Ashford","Blackwood","Coldwell","Drummond","Fenwick","Greaves","Holloway","Kessler","Marsh","Northwind","Penhallow","Ravenscar","Strand","Thorne","Vance","Wexley","Alden","Bancroft","Cartwright","Davenport","Easton","Fairchild","Garrison","Hartford","Ingram","Kingsley","Langdon","Marlowe","Newell","Oakley","Pendleton","Radcliffe","Sutton","Tavernier","Underwood","Wentworth","Yardley","Beckett","Clayton","Ellington","Fletcher","Giles","Hawthorne","Kendall","Lockwood","Mercer","Nash","Osborne","Prescott","Redmond","Sterling","Talbot","Vaughan","Warwick","Ames","Bradford","Colton","Dalton","Finch","Granger","Hastings","Kirkland","Monroe","Pemberton","Ramsay","Snyder","Townsend","Whitman","York","Zimmerman"]
    },
    Elfo: {
      first: ["Aelar","Caelynn","Erevan","Faelar","Galinndan","Ielenia","Laucian","Mialee","Naivara","Quarion","Riardon","Shanairra","Thamior","Vadania","Wisteri","Yathrin","Adran","Aramil","Aust","Beiro","Carric","Enialis","Erdan","Hadarith","Heian","Himo","Immeral","Ivellios","Lamil","Mindartis","Paelias","Peren","Rolen","Soveliss","Theren","Varis","Anastrianna","Antinua","Bethrynna","Birel","Drusilia","Felosial","Jelenneth","Keyleth","Leshanna","Lia","Meriele","Quelenna","Sariel","Theirastra","Valanthe","Xanaphia","Althaea","Arara","Calian","Dayereth","Elama","Fhaertala","Haladar","Kethryllia","Lariel","Melarue","Nuala","Orila","Ravalan","Silaqui","Tarselle","Ualair","Vanya","Zaleri"],
      last: ["Amakiir","Galanodel","Holimion","Liadon","Meliamne","Naïlo","Siannodel","Xiloscient","Whispermoon","Silverbow","Brightwood","Dawnchaser","Elvensun","Goldleaf","Mistrunner","Oakheart","Riverflow","Shadowwalker","Starflower","Windrider","Autumnbreeze","Dewdrop","Emeraldglade","Falconwing","Greenleaf","Moonshadow","Nightbreeze","Spellbinder","Starlight","Wildwood","Deeproot","Featherfoot","Gladeshadow","Ironbark","Leaffall","Mossgrowth","Rainbow","Sunstrider","Treelove","Whisperwind","Braveheart","Dreamweaver","Eldersong","Forestshadow","Glitterstone","Moonbeam","Oakenheel","Silentwood","Starwatcher","Winterbreeze","Woodglade","Moonglow","Stargaze","Silverthread","Ivyshield","Mossbinder","Sunshadow","Windwhisper","Deepforest","Gladeheart","Mooncrest","Starwhisper","Elvenlore","Dawnwhisper","Greenmantle","Silverglade","Goldenshield","Sunfrost","Starfall","Nightglow"]
    },
    Semielfo: {
      first: ["Aramil","Berris","Dayereth","Enna","Halueth","Keyleth","Lia","Mela","Renn","Soveliss","Theren","Valanthe","Xanaphia","Aelrin","Bryn","Caelen","Dorian","Elspeth","Faelen","Garrick","Helena","Ivo","Joscelin","Katarina","Lorcan","Mireille","Nikolai","Ottilie","Roderick","Selene","Thaddeus","Ursula","Viktor","Wynne","Adrian","Aveline","Cassian","Damara","Elias","Fiona","Gavin","Isolda","Julian","Kaelen","Lyra","Morgan","Nerys","Owen","Rowan","Seraphina","Tristan","Vesper","Alanna","Brandon","Catherine","Devin","Elysia","Gareth","Isabel","Kian","Maeve","Nolan","Rhea","Sean","Tessa","Vance","Kendra","Rory","Shanna","Tiernan"],
      last: ["Ashvale","Brightwood","Duskmere","Galemoor","Hartwell","Silverleaf","Wynter","Halfblood","Crossroad","Twobloods","Bridgeway","Fairwind","Greycloud","Highwood","Lowhill","Meadowbrook","Riverbend","Stonebridge","Woodland","Zephyr","Blackwood","Coldwell","Fenwick","Holloway","Northwind","Penhallow","Ravenscar","Thorne","Wexley","Bancroft","Fairchild","Kingsley","Langdon","Marlowe","Pendleton","Sutton","Underwood","Wentworth","Hawthorne","Lockwood","Sterling","Warwick","Bradford","Monroe","Townsend","Whitman","Aethelgard","Bravewood","Chase","Dawnwright","Edgewater","Forestier","Gale","Hillcrest","Ironwood","Keepsake","Lighthaven","Moorland","Oakhaven","Pathfinder","Ridgefield","Seafarer","Timberland","Valleywood","Wayfarer","Westwind","Wilder","Windward","Youngblood","Zenith"]
    },
    Enano: {
      first: ["Adrik","Brottor","Dain","Eberk","Fargrim","Gardain","Harbek","Kildrak","Morgran","Orsik","Rurik","Taklinn","Thoradin","Ulfgar","Vondal","Balendin","Dourstone","Einkil","Flint","Gimli","Hlin","Kori","Loki","Murni","Nuri","Orik","Runa","Tura","Urist","Vali","Amber","Artin","Audhild","Bardryn","Dagnal","Diesa","Eldeth","Falkrunn","Finellen","Gunnloda","Gurdis","Helja","Hlin","Kathra","Kristryd","Lodi","Mardred","Riswynn","Sannl","Torbera","Torgga","Vistra","Balk","Durn","Elrik","Grum","Hogar","Krag","Malok","Norn","Olg","Rorg","Torg","Ulrik","Vul","Thrain","Thorin","Dwalin","Balin","Fili"],
      last: ["Balderk","Brawnanvil","Dankil","Emberforge","Frostbeard","Holderhek","Loderr","Strakeln","Torunn","Ironfist","Quarrydelver","Stonefist","Deepdelver","Goldfinder","Steelshield","Hammerstrike","Axebreaker","Ironshield","Rockbreaker","Gemcutter","Coppervein","Silvervein","Blackstone","Mountainheart","Fireforge","Hardstone","Grimhammer","Strongbraid","Heavyarm","Broadbeam","Deepminer","Graniteshield","Orebinder","Runestone","Underhill","Coalheaver","Gravelstone","Mithrilshield","Thunderforge","Tombbreaker","Anvilfire","Barrelcask","Coldsteel","Earthstone","Flintshield","Goldshield","Ironflesh","Metalshaper","Rockshield","Stonebraid","Cavewalker","Deepstone","Gorgonshield","Hillbreaker","Ironshield","Lavashaper","Mineshaft","Pillarstone","Rumblesound","Shieldbiter","Spiketail","Steelhorn","Stonecutter","Strongbraid","Tunnelwalker","Understone","Veinfinder","Warforge","Wildforge","Ironbrew"]
    },
    Mediano: {
      first: ["Alton","Cade","Eldon","Garret","Lyle","Milo","Osborn","Roscoe","Wellby","Andry","Cora","Euphemia","Jillian","Lavinia","Portia","Seraphina","Verna","Bree","Callie","Errich","Flynn","Kithri","Merric","Ned","Ollie","Pip","Reed","Robin","Sam","Toby","Tilly","Will","Barto","Corby","Derry","Finn","Giles","Hob","Kemp","Mick","Pippin","Rusty","Skip","Tad","Wally","Daisy","Elly","Fay","Gilly","Hana","Ivy","Joy","Kitty","Lulu","Mimi","Nell","Penny","Ruby","Sally","Trudy","Wendy","Zoe","Boffin","Drogo","Frodo","Hamfast","Meriadoc","Peregrin","Bilbo","Samwise"],
      last: ["Brushgather","Goodbarrel","Greenbottle","Dawnhill","Tealeaf","Thorngage","Tosscobble","Underbough","Stillfoot","Appleblossom","Bramblewood","Cherrycheeks","Copperkettle","Elderberry","Fairfield","Goldentoe","Hearthstone","Hilltopper","Lander","Littlefoot","Mapleleaf","Newmeadow","Oatmeadow","Pebblebrook","Quickstep","Roundhouse","Shortstraw","Sweetwater","Tumbleweed","Warmhearth","Wildberry","Windyhill","Boffin","Bolger","Bracegirdle","Brandeybuck","Burrows","Chubb","Grubb","Hornblower","Proudfoot","Sackville","Sandyman","Underhill","Buttercup","Cloverfield","Daydream","Fairweather","Greenleaf","Hillside","Jollyfellow","Lightfoot","Merryfield","Oakhaven","Pennyworth","Quickfingers","Riverflow","Softtread","Summerbreeze","Thistledown","Tinyfoot","Wellspring","Wheatfield","Wildflower","Woollyboot","Brightkettle","Fastfoot","Goodheart","Littlecup","Swiftstep"]
    },
    Gnomo: {
      first: ["Alston","Boddynock","Dimble","Fonkin","Gimble","Jebeddo","Namfoodle","Roondar","Seebo","Zook","Bimpnottin","Caramip","Ella","Lorilla","Nissa","Oda","Roywyn","Breena","Carlin","Dona","Ellywick","Filippa","Geni","Lilli","Loopmottin","Minder","Nana","Orla","Pina","Tana","Zanna","Ander","Blix","Coot","Dax","Fizz","Glint","Jinx","Kip","Loop","Muck","Nik","Oz","Pip","Quirk","Rascal","Sprog","Tink","Wobble","Zig","Brocc","Doublet","Farkle","Gaston","Hubert","Ignatius","Kellen","Milkey","Oswald","Puckle","Quentin","Roderick","Sprocket","Tinker","Waldo","Wrench","Yoyo","Zeb","Barnaby","Caspar"],
      last: ["Beren","Daergel","Folkor","Garrick","Nackle","Murnig","Ningel","Scheppen","Timber","Sparkwheel","Pipeswhistle","Badgerchaser","Beerbottle","Clockwinder","Doublelock","Fiddleplay","Gizmowright","Ironspanner","Jackscrews","Keyturner","Lightspark","Metalspinner","Needlepointer","Oilgrease","Pennyweight","Quicksilver","Ratchetwheel","Screwdriver","Tinkerspark","Wirebender","Boondiggle","Cobblepot","Dingledash","Fizzlespark","Goldfinder","Hodgepodge","Inkbinder","Jigglejoint","Kettleblack","Loopmuffler","Mudmuddler","Noodlebaker","Oddfellow","Pumpernickel","Quirkspinner","Rumplestiltskin","Sprocketgear","Tanglethread","Undergear","Wobblejoint","Zigzag","Bracegirdle","Buttonmaker","Candlewick","Dustsweeper","Featherquill","Glassblower","Inkwell","Jigsaw","Lanternlighter","Mapmaker","Netweaver","Paperfolder","Quillpen","Ropebinder","Stringtwister","Toymaker","Waxdipper","Wheelwright","Yarntwister"]
    },
    Semiorco: {
      first: ["Dench","Feng","Gell","Henk","Holg","Imsh","Keth","Krusk","Mhurren","Ront","Shump","Thokk","Baggi","Emen","Engong","Myev","Ovak","Shautha","Vola","Argh","Brak","Drak","Gar","Grom","Hark","Karg","Mok","Narg","Olg","Rark","Sark","Torg","Urg","Vark","Yorg","Zarg","Brakka","Draka","Gara","Groma","Harka","Karga","Moka","Narga","Olga","Rarka","Sarka","Torga","Urga","Varka","Yorga","Zarga","Brut","Crag","Fang","Gore","Iron","Krag","Maim","Rage","Scar","Thorn","Tusk","Vile","Wolf","Wrath","Yell","Zul","Krosh","Ghorz"],
      last: ["the Unbroken","Skullcleaver","Bloodfang","Ironbelly","Grimjaw","the Wanderer","of the Cleft Hills","Bonebreaker","Shieldbreaker","Stonecrusher","Ironhide","Steelclaw","Doomseeker","Deathbringer","Warbringer","Fleshrender","Heartripper","Gorespiller","Tuskbreaker","Scarbearer","Oathbreaker","Shadowbane","Blooddrinker","Soulbreaker","Skullbreaker","Spearshatterer","Spinecracker","Skinpeeler","Nosebiter","Earripper","Eyeplucker","Throatcutter","Chestcrusher","Ribbreaker","Jawbreaker","Legsnapper","Armbreaker","Handcrusher","Footstomper","Backbreaker","Headbasher","Gutripper","Flesheater","Bloodletter","Warhound","Ironbound","Grimface","Skarface","Thunderfist","Stonefist","Steelbound","Broadshoulders","Strongback","Ironwrist","Steelshin","Hardhead","Bullneck","Boarhide","Bearflesh","Wolfclaw","Falconeye","Eaglebeak","Snakebite","Spiderweb","Scorpiontail","Centipedebite","Waspsting","Hornetbuzz","Beetleshell","Crabshell"]
    },
    Tiefling: {
      first: ["Akmenos","Damakos","Iados","Kairon","Leucis","Mordai","Pelaios","Skamos","Therai","Akta","Bryseis","Damaia","Kallista","Lerissa","Makaria","Nemeia","Orianna","Rieta","Anakis","Criella","Ea","Excellence","Glory","Hope","Ideal","Music","Nowhere","Poetry","Quest","Random","Reverence","Sorrow","Temerity","Torment","Weary","Amon","Balban","Caim","Devin","Eligos","Flauros","Gusion","Halphas","Ipos","Leraje","Malphas","Naberius","Orias","Purson","Ronove","Sabnock","Valefor","Zagan","Art","Carrion","Chant","Despair","Dread","Fear","Grief","Ignorance","Laughter","Pain","Panic","Rage","Shame","Terror","Vain","Woe","Wrath"],
      last: ["the Forgotten","Ashfall","Evershadow","Sootborn","Cinderheart","the Tempted","of the Ninth Veil","Hellfire","Darkflame","Sulfurbreath","Horncrown","Tailwhip","Cloakshadow","Whisperdevil","Fiendblood","Demonsmile","Redskin","Blackhorn","Splitfoot","Goatleg","Serpentsong","Viperkiss","Poisonfang","Shadowdancer","Nightwalker","Graveseeker","Soulbinder","Chainbreaker","Contractweaver","Dealmaker","Fallenstar","Lostsoul","Hellbound","Abysswalker","Voidgazer","Starbreaker","Worldender","Lifebreaker","Deathweaver","Doomweaver","Bloodweaver","Soulweaver","Nightweaver","Shadowweaver","Darkweaver","Lightweaver","Dreamweaver","Spellweaver","Fateweaver","Timeweaver","Hellweaver","Voidweaver","Starweaver","Worldweaver","Lifeweaver","Deathbinder","Doombinder","Bloodbinder","Soulbinder","Nightbinder","Shadowbinder","Darkbinder","Lightbinder","Dreambinder","Spellbinder","Fatebinder","Timebinder","Hellbinder","Voidbinder","Starbinder"]
    },
    Dracónido: {
      first: ["Arjhan","Balasar","Donaar","Ghesh","Heskan","Kriv","Medrash","Nadarr","Pandjed","Rhogar","Shamash","Tarhun","Akra","Biri","Daar","Harann","Kava","Korinn","Mishann","Sora","Bharash","Dredgar","Goran","Hokan","Jandar","Krogar","Malkar","Norgan","Oran","Rhogar","Sarkan","Toran","Urgar","Varkan","Yorgan","Zorkan","Bharasha","Dredgara","Gorana","Hokana","Jandara","Krogara","Malkara","Norgana","Orana","Rhogara","Sarkana","Torana","Urgara","Varkana","Yorgana","Zorkana","Fire","Ice","Acid","Lightning","Poison","Flame","Frost","Corrosion","Spark","Venom","Red","White","Black","Blue","Green","Gold","Silver","Brass","Bronze","Copper"],
      last: ["Clethtinthiallor","Daardendrian","Fenkenkabradon","Kerrhylon","Myastan","Norixius","Verthisathurgiesh","Emberscale","Stormwing","Firebreath","Frostbreath","Acidbreath","Lightningbreath","Poisonbreath","Goldscale","Silverscale","Redscale","Bluescale","Greenscale","Blackscale","Whitescale","Bronzescale","Brassscale","Copperscale","Ironscale","Steelscale","Dragonclaw","Dragontooth","Dragonwing","Dragonhorn","Dragontail","Dragonheart","Dragonflesh","Dragonblood","Dragonbone","Dragonhide","Dragonbreath","Dragonroar","Dragonflight","Dragonrage","Fireborn","Frostborn","Acidborn","Lightningborn","Poisonborn","Goldborn","Silverborn","Redborn","Blueborn","Greenborn","Blackborn","Whiteborn","Bronzeborn","Brassborn","Copperborn","Ironborn","Steelborn","Clayborn","Stoneborn","Rockborn","Earthborn","Windborn","Stormborn","Skyborn","Cloudborn","Rainborn","Thunderborn","Starborn","Moonborn","Sunborn"]
    }
  } as Record<string, { first: string[]; last: string[] }>,

  scifiNames: {
    first: ["Kessa","Dovic","Maelis","Renn","Yara","Sasha","Iko","Bex","Tovan","Nadia","Cael","Orin","Vesh","Lira","Juno","Dax","Mira","Kade","Sela","Onyx","Priya","Tam"],
    last: ["Vale","Okonkwo","Reyes","Cho","Marek","Dane","Solanke","Voss","Ngata","Petrov","Hale","Aziz","Quill","Sato","Bram","Holt","Idris","Mercer"]
  },

  alignments: [
    "Legal Bueno","Neutral Bueno","Caótico Bueno",
    "Legal Neutral","Neutral Verdadero","Caótico Neutral",
    "Legal Malvado","Neutral Malvado","Caótico Malvado"
  ],

  ageRanges: ["joven","adulto","mediana edad","anciano","milenario"],
  ageMap: {
    "joven": "en el primer fulgor de la juventud, ansioso y sin cicatrices",
    "adulto": "en la plenitud de la vida",
    "mediana edad": "asentado en la mediana edad, curtido y deliberado",
    "anciano": "bien entrado en la vejez, lento de paso pero agudo de vista",
    "milenario": "de una antigüedad difícil de calcular"
  } as Record<string, string>,

  narrativeRoles: ["Aliado","Enemigo","Neutral","Moralmente ambiguo"],
  powerLevels: ["Mundano","Competente","Élite","Legendario"],
  pronouns: ["ella","él"],

  build: [
    "enjuta y larguirucha","ancha y barriluda","menuda, casi etérea",
    "fibrosa e inquieta","blanda y bien alimentada","alta y encorvada",
    "compacta y poderosa","esbelta y grácil","rechoncha y llena de cicatrices"
  ],
  hair: [
    "una mata rebelde de cabello blanco plateado","rizos negros muy cortos",
    "una larga trenza con aros de cobre","cabeza calva bien rasurada",
    "cabello castaño rojizo salvaje con canas en las sienes",
    "cabello negro aceitado recogido con severidad",
    "un enredo de cabello rubio pajizo",
    "ningún cabello salvo una barba bifurcada",
    "cabello gris ceniza cortado al ras de la mandíbula"
  ],
  eyes: [
    "ojos grises que nunca terminan de posarse",
    "un ojo ciego lechoso y uno verde agudo",
    "ojos ámbar profundamente hundidos",
    "ojos del oro opaco de las monedas viejas",
    "ojos violetas de párpados pesados",
    "ojos negros brillantes y vigilantes",
    "ojos dispares: uno azul, uno café",
    "ojos rodeados de ojeras profundas"
  ],
  feature: [
    "una cicatriz irregular que parte una ceja",
    "los dedos manchados de negro por la tinta",
    "una marca de fuego semioculta bajo el cuello",
    "un abrigo absurdamente elegante pero raído",
    "un collar hecho de dientes",
    "las manos que tiemblan levemente",
    "una voz que claramente fue rota y mal curada",
    "un tatuaje desvanecido de un símbolo hace tiempo prohibido",
    "los anillos en cada dedo, ninguno igual",
    "una prótesis de hueso tallado donde debería haber una mano"
  ],

  traits: [
    "Habla en proverbios que nadie ha escuchado antes — y puede que los esté inventando.",
    "Cuenta monedas, pasos y dientes de extraños por costumbre nerviosa.",
    "Se ríe en los momentos equivocados y luego se disculpa profusamente.",
    "Trata toda conversación como una negociación, incluso las triviales.",
    "Nunca se sienta de espaldas a una puerta.",
    "Colecciona objetos pequeños e inútiles y les pone nombre a cada uno.",
    "No soporta el silencio y lo llena con canciones viejas.",
    "Recuerda cada rostro pero ningún nombre, e improvisa libremente.",
    "Insiste en alimentar a cualquiera que se quede más de un minuto.",
    "Pone a prueba la lealtad de los demás con encargos pequeños e inútiles."
  ],

  motivations: [
    "Saldar una deuda que crece más rápido de lo que puede pagar.",
    "Encontrar a alguien que desapareció sin decir una palabra.",
    "Proteger un secreto que lo destruiría si saliera a la luz.",
    "Recuperar un nombre que le fue arrebatado.",
    "Simplemente sobrevivir una temporada más en un lugar difícil.",
    "Terminar lo que un mentor fallecido comenzó.",
    "Demostrar que los que dudaban estaban equivocados, cueste lo que cueste.",
    "Alejarse de aquí antes de que el pasado lo alcance."
  ],

  hooks: [
    "Está envenenando en silencio a un rival, gota a gota, y ha empezado a disfrutarlo.",
    "Sabe a dónde fue realmente una caravana desaparecida, y le pagaron para olvidarlo.",
    "No es quien dice ser — el verdadero está enterrado bajo el suelo.",
    "Ha visto la cosa en el pozo, y la cosa lo ha visto a él.",
    "Está siendo chantajeado por un crimen que nunca cometió.",
    "Carga un mapa hacia algo que nunca debería desenterrarse.",
    "Le debe una deuda a una criatura que no acepta monedas como pago.",
    "Es el último testigo vivo de un asesinato que todo el pueblo acordó olvidar.",
    "Escucha una voz que da buenos consejos, por ahora."
  ]
};

export const tagFlavor: Record<string, Partial<Record<string, string[]>>> = {
  gótico: {
    feature: ["un velo de luto que nunca termina de quitarse","uñas ennegrecidas como si hubieran sido sumergidas en tinta","un medallón que guarda el retrato de alguien hace mucho tiempo muerto"],
    motivation: ["Hacer guardia sobre una tumba que nunca debe quedar abandonada.","Sobrevivir a todos los que recuerdan la antigua vergüenza.","Encontrar una muerte que finalmente tenga sentido."],
    secret: ["Duerme en un ataúd y ha comenzado a preferirlo.","Ya está muerto, en todos los sentidos que contarían los dioses.","Escucha el crujir de la casa en la noche y le responde por nombre."]
  },
  cortesano: {
    feature: ["anillos que valen más que la habitación donde se encuentran","una sonrisa ensayada que nunca llega a los ojos","guantes que jamás, bajo ninguna circunstancia, se quitan"],
    motivation: ["Ascender un peldaño más antes de que termine la temporada.","Sepultar a un rival bajo el peso de sus propios favores.","Casarse con un nombre que valga más que la sangre."],
    secret: ["Posee cartas falsificadas que podrían derribar tres casas nobles.","Está silenciosamente en bancarrota, a un acreedor del colapso.","Envenenó a la última persona que ostentaba su título."]
  },
  infernal: {
    feature: ["un leve olor a azufre que se aferra a todo","ojos que retienen el brillo del fuego un instante de más","una cicatriz de contrato enroscada alrededor de una muñeca"],
    motivation: ["Recuperar un alma entregada en firma en un año peor.","Cobrar una deuda que le corresponde a otra persona.","Demostrar que el trato valió el precio."],
    secret: ["Ha firmado un pacto cuya cláusula final vence esta temporada.","Sirve a un patrón cuyo verdadero nombre quema pronunciarlo.","Está cosechando pequeños favores para intercambiar con algo que habita abajo."]
  },
  feérico: {
    feature: ["una voz con una segunda voz justo detrás","flores que se marchitan donde permanece demasiado tiempo","una sombra que no coincide del todo con el cuerpo"],
    motivation: ["Devolver un favor con una exactitud literal y devastadora.","Cobrar un nombre que fue dado libremente.","Honrar un trato sellado hace cien años."],
    secret: ["No puede decir una mentira directa, y lo resiente amargamente.","Está obligado a regresar cada siete años — y el séptimo es ahora.","Robó un niño mortal hace mucho tiempo y dejó algo más en su lugar."]
  },
  marcial: {
    feature: ["el porte de un soldado que ha comenzado a oxidarse levemente","viejas fracturas en las manos que duelen antes de la lluvia","un tatuaje de campaña de una guerra que los mapas olvidaron"],
    motivation: ["Encontrar a quien dio la orden y preguntarle por qué.","Morir siendo útil antes que morir viejo.","Entrenar a un heredero digno de la espada."],
    secret: ["Desertó la noche anterior a la batalla que lo convirtió en héroe.","Aún lleva los colores de una compañía proscrita.","Mató bajo bandera de tregua, y cuenta la historia de otra manera."]
  },
  erudito: {
    feature: ["puños manchados de tinta y un entrecejo fruncido por la luz de las velas","un maletín de notas guardado con más celo que el dinero","anteojos reparados una vez de más"],
    motivation: ["Terminar el trabajo antes de que el mecenas retire los fondos.","Demostrar una teoría que los eruditos llaman herejía.","Recuperar un texto que se suponía debía quemarse."],
    secret: ["Plagió el descubrimiento que le dio su nombre.","Sabe que la traducción está equivocada, y la deja así.","Guarda un libro prohibido que la orden cree destruido."]
  },
  criminal: {
    feature: ["tatuajes de banda semiocultos bajo el cuello","ojos rápidos que tasaron cada bolsillo del cuarto","un dedo que falta, pagado como multa"],
    motivation: ["Dar un último golpe y salir limpio de una vez.","Pagarle al jefe de la banda antes del plazo.","Recuperar lo que se perdió en la traición."],
    secret: ["Es informante de la guardia, y está aterrado de ser descubierto.","Robó del bolso equivocado y está ocultando la cantidad.","Enterró el botín donde ni siquiera la banda puede encontrarlo."]
  },
  divino: {
    feature: ["un símbolo sagrado desgastado del tanto manejarlo","una quietud que inquieta más de lo que consuela","ojos que parecen escuchar algo lejano"],
    motivation: ["Cumplir una visión que no le fue dada a nadie más.","Expiar un milagro que salió terriblemente mal.","Guiar a los fieles a través de la oscuridad que se avecina."],
    secret: ["Ha perdido la fe por completo y la actúa de todas formas.","Escuchó responder al dios una vez, y desearía que no hubiera pasado.","Esconde una reliquia que sangra en los días sagrados."]
  },
  arcano: {
    feature: ["yemas de los dedos que chispean levemente cuando se distrae","un leve polvo de tiza de círculos de invocación antiguos","un familiar que nunca está del todo a la vista"],
    motivation: ["Completar el conjuro que ya ha costado tanto.","Desatar algo que debería haber dejado atado.","Encontrar un maestro que sobrevivió al mismo error."],
    secret: ["Ató algo a su servicio que espera pacientemente.","Lanzó el hechizo que vació una aldea y nunca lo confesó.","Está siendo reemplazado lentamente por aquello que invocó."]
  },
  plebeyo: {
    feature: ["manos gastadas honestamente por años del mismo trabajo","un abrigo remendado que se mantiene escrupulosamente limpio","un trato que espera poco y lo nota todo"],
    motivation: ["Mantener a la familia alimentada durante un invierno difícil más.","Ver a un hijo hacerlo mejor de lo que el padre jamás pudo.","Que lo dejen, simple y definitivamente, en paz."],
    secret: ["Vio quién realmente lo hizo, y no se lo ha dicho a nadie.","Está escondiendo a un fugitivo en el sótano por pura y terca decencia.","Encontró algo en el campo que gente importante quiere recuperar."]
  }
};

const scifiPools = {
  build: ["delgada y criada en baja gravedad","ancha y densa, típica de mundo pesado","cableada con estimulantes e irritable","aumentada y maciza, de hombros cuadrados","demacrada y pálida por el aire reciclado"],
  hair: ["cráneo afeitado con el emblema de la tripulación tatuado","cabello decolorado por radiación dura","corte reglamentario que encanece","un enredo de trenzas de viajero espacial sin lavar","ningún cabello bajo una gastada gorra de vuelo"],
  eyes: ["un implante ocular cromado que zumba al enfocar","ojos amarillentos por tratamientos de rejuvenecimiento baratos","un ojo natural y uno que brilla ámbar constante","pupilas dilatadas por demasiados saltos","ojos cansados con una pantalla de datos parpadeando en ellos"],
  feature: ["un código de barras corporativo desvanecido en la nuca","un brazo protésico construido con piezas de chatarra","un equipo respirador colgado permanentemente en la garganta","nudillos cicatrizados por peleas en gravedad cero","un implante de chip de deuda que parpadea en rojo lento"],
  motivation: ["Saldar un contrato de servidumbre antes de que lo sobreviva.","Salir de esta estación antes de que llegue la auditoría.","Encontrar la nave que los dejó atrás.","Entregar la carga y nunca preguntar qué hay dentro.","Comprar pasaje hacia el núcleo, una tarifa a la vez."],
  secret: ["Lleva contrabando cosido en el forro de la chaqueta.","Vendió las coordenadas de la tripulación a una corporación, y lo lamenta cada día.","Es un sintético que pasa por orgánico — papeles, pulso y todo.","Sobrevivió al naufragio cuando nadie más lo hizo, y el cómo es la verdadera pregunta.","Tiene una deuda de sangre con un sindicato a dos sistemas de distancia."],
  trait: ["Confía más en las máquinas que en las personas, y lo dice abiertamente.","Cuenta las salidas de cualquier habitación por pura costumbre.","Habla tres dialectos comerciales y los estropea todos.","Nunca se quita el equipo respirador, ni cuando el aire es limpio.","Saluda a oficiales de una cadena de mando que dejó de existir hace años."]
};

export interface Preset {
  blurb: string;
  lineageLabel: string;
  classLabel: string;
  races: string[];
  classes: string[];
  nameStyle: "fantasy" | "scifi";
  tone: string;
  defaultTags: string[];
  flavor?: { motivation?: string[]; secret?: string[] };
  overridePools?: Partial<typeof scifiPools>;
}

export const PRESETS: Record<string, Preset> = {
  "5e Genérico": {
    blurb: "Aventura de fantasía clásica.",
    lineageLabel: "Raza",
    classLabel: "Clase",
    races: ["Humano","Elfo","Enano","Tiefling","Semiorco","Mediano","Dracónido","Gnomo"],
    classes: ["Bárbaro", "Bardo", "Clérigo", "Druida", "Guerrero", "Monje", "Paladín", "Explorador", "Pícaro", "Hechicero", "Brujo", "Mago"],
    nameStyle: "fantasy",
    tone: "fantasía épica clásica de Dungeons & Dragons.",
    defaultTags: []
  }
};

export interface Abilities {
  FUE: number; DES: number; CON: number;
  INT: number; SAB: number; CAR: number;
}

export interface NPC {
  preset: string;
  tags: string[];
  name: string;
  pronouns: string;
  race: string;
  klass: string;
  alignment: string;
  ageRange: string;
  age: string;
  narrativeRole: string;
  power: string;
  appearance: string;
  traits: string[];
  motivation: string;
  secret: string;
  abilities: Abilities;
}

export type Locks = Partial<Record<keyof NPC, boolean>>;

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

function roll4d6dl(): number {
  const d = [1,2,3,4].map(() => Math.floor(Math.random() * 6) + 1).sort((a, b) => a - b);
  return d[1] + d[2] + d[3];
}

function getPrimaryStatForClass(klass: string): keyof Abilities {
  const k = klass.toLowerCase();
  if (k.includes("guerrero") || k.includes("bárbaro") || k.includes("barbaro") || k.includes("paladín") || k.includes("paladin") || k.includes("caballero") || k.includes("fighter") || k.includes("barbarian") || k.includes("warrior")) return "FUE";
  if (k.includes("mago") || k.includes("erudito") || k.includes("científico") || k.includes("cientifico") || k.includes("hacker") || k.includes("wizard") || k.includes("scholar") || k.includes("artificer") || k.includes("artificiero")) return "INT";
  if (k.includes("pícaro") || k.includes("picaro") || k.includes("criminal") || k.includes("asesino") || k.includes("ladrón") || k.includes("ladron") || k.includes("monje") || k.includes("monk") || k.includes("piloto") || k.includes("rogue") || k.includes("assassin") || k.includes("ranger") || k.includes("explorador") || k.includes("hunter") || k.includes("cazador")) return "DES";
  if (k.includes("clérigo") || k.includes("clerigo") || k.includes("sacerdote") || k.includes("druida") || k.includes("sabio") || k.includes("cleric") || k.includes("druid") || k.includes("priest")) return "SAB";
  if (k.includes("bardo") || k.includes("bard") || k.includes("hechicero") || k.includes("sorcerer") || k.includes("brujo") || k.includes("warlock") || k.includes("noble") || k.includes("mercader") || k.includes("diplomático") || k.includes("diplomatico") || k.includes("comerciante") || k.includes("merchant")) return "CAR";
  
  const standard: Record<string, keyof Abilities> = {
    "Bárbaro": "FUE",
    "Bardo": "CAR",
    "Clérigo": "SAB",
    "Druida": "SAB",
    "Guerrero": "FUE",
    "Monje": "DES",
    "Paladín": "FUE",
    "Explorador": "DES",
    "Pícaro": "DES",
    "Hechicero": "CAR",
    "Brujo": "CAR",
    "Mago": "INT"
  };
  return standard[klass] || "INT";
}

function generateAbilities(klass?: string, power?: string): Abilities {
  const rolls = [roll4d6dl(), roll4d6dl(), roll4d6dl(), roll4d6dl(), roll4d6dl(), roll4d6dl()].sort((a, b) => b - a);
  const stats: (keyof Abilities)[] = ["FUE", "DES", "CON", "INT", "SAB", "CAR"];
  const result: Partial<Abilities> = {};
  
  const primary = klass ? getPrimaryStatForClass(klass) : "INT";
  result[primary] = rolls[0];
  
  const remainingStats = stats.filter(s => s !== primary);
  const remainingRolls = rolls.slice(1);
  const shuffledStats = remainingStats.sort(() => Math.random() - 0.5);
  shuffledStats.forEach((stat, idx) => {
    result[stat] = remainingRolls[idx];
  });

  // Ajustes de límites mínimos y aleatoriedad según el nivel de poder
  if (power === "Legendario") {
    // Stat principal entre 18 y 20
    result[primary] = 18 + Math.floor(Math.random() * 3);
    stats.forEach(s => {
      if (s !== primary) {
        // Otras stats entre 16 y 19
        result[s] = 16 + Math.floor(Math.random() * 4);
      }
    });
  } else if (power === "Élite") {
    // Stat principal entre 15 y 18
    result[primary] = 15 + Math.floor(Math.random() * 4);
    stats.forEach(s => {
      if (s !== primary) {
        // Otras stats entre 12 y 15
        result[s] = 12 + Math.floor(Math.random() * 4);
      }
    });
  } else if (power === "Competente") {
    // Stat principal entre 12 y 15
    result[primary] = 12 + Math.floor(Math.random() * 4);
    stats.forEach(s => {
      if (s !== primary) {
        // Otras stats entre 10 y 13
        result[s] = 10 + Math.floor(Math.random() * 4);
      }
    });
  }
  
  return result as Abilities;
}

export function abilityMod(score: number): string {
  const m = Math.floor((score - 10) / 2);
  return (m >= 0 ? "+" : "") + m;
}

function poolsFor(preset: Preset) {
  const o = preset.overridePools || {};
  return {
    build: o.build || T.build,
    hair: o.hair || T.hair,
    eyes: o.eyes || T.eyes,
    feature: o.feature || T.feature,
    motivation: o.motivation || T.motivations,
    secret: o.secret || T.hooks,
    trait: o.trait || T.traits
  };
}

function pickFlavored(basePool: string[], tags: string[], key: string, preset: Preset): string {
  const themed: string[] = [];
  tags.forEach(tg => {
    const f = tagFlavor[tg];
    if (f && f[key]) themed.push(...f[key]!);
  });
  if (preset.flavor && (preset.flavor as Record<string, string[]>)[key]) {
    themed.push(...(preset.flavor as Record<string, string[]>)[key]);
  }
  if (themed.length && Math.random() < 0.72) return pick(themed);
  return pick(basePool);
}

function twoDistinct(fn: () => string): [string, string] {
  const a = fn(); let b = fn(), guard = 0;
  while (b === a && guard++ < 8) b = fn();
  return [a, b];
}

function makeName(nameStyle: string, race: string): string {
  if (nameStyle === "scifi") return pick(T.scifiNames.first) + " " + pick(T.scifiNames.last);
  const set = T.namesByRace[race] || T.namesByRace["Humano"];
  return pick(set.first) + " " + pick(set.last);
}

const raceVisuals: Record<string, { build?: string[]; hair?: string[]; eyes?: string[] }> = {
  "Semiorco": {
    build: ["compacta y poderosa", "ancha y barriluda", "fibrosa e inquieta", "rechoncha y llena de cicatrices"],
    hair: ["rizos negros muy cortos", "cabeza calva con cicatrices de combate", "una trenza de guerrero gruesa y oscura", "cabello áspero de color gris oscuro", "ningún cabello bajo un casco abollado"],
    eyes: ["ojos negros brillantes y vigilantes", "ojos pequeños y rojizos de mirada torva", "ojos amarillentos y penetrantes", "ojos oscuros bajo un ceño espeso"]
  },
  "Dracónido": {
    build: ["compacta y poderosa", "alta y encorvada", "ancha y barriluda"],
    hair: ["una cresta de cuernos cortos", "espinas óseas peinadas hacia atrás", "una hilera de placas gruesas en la cabeza", "una gola de escamas gruesas", "dos cuernos largos y curvados"],
    eyes: ["ojos ámbar profundamente hundidos", "ojos del oro opaco de las monedas viejas", "ojos de reptil que brillan con fuego interno", "ojos dorados de párpados gruesos"]
  },
  "Enano": {
    build: ["compacta y poderosa", "ancha y barriluda", "rechoncha y llena de cicatrices"],
    hair: ["una larga trenza con aros de cobre", "una barba bifurcada muy larga y cabello castaño", "cabello gris ceniza cortado al ras", "ningún cabello salvo una barba trenzada de color rojo cobrizo", "rizos castaño rojizo salvajes"],
    eyes: ["ojos grises que nunca terminan de posarse", "ojos ámbar profundamente hundidos", "un ojo ciego lechoso y uno verde agudo", "ojos negros brillantes y vigilantes"]
  },
  "Elfo": {
    build: ["menuda, casi etérea", "esbelta y grácil", "enjuta y larguirucha"],
    hair: ["una mata rebelde de cabello blanco plateado", "cabello negro recogido con severidad", "un enredo de cabello rubio pajizo largo", "cabello castaño cobrizo largo y sedoso", "cabello verde musgo trenzado con hojas"],
    eyes: ["ojos violetas de párpados pesados", "ojos verdes esmeralda muy vivos", "ojos plateados brillantes", "ojos dispares: uno azul, uno violeta"]
  },
  "Tiefling": {
    build: ["enjuta y larguirucha", "fibrosa e inquieta", "esbelta y grácil"],
    hair: ["cabello negro aceitado recogido con severidad", "rizos de color azul medianoche", "cabello rojo sangre salvaje", "una melena blanca ceniza que enmarca sus cuernos"],
    eyes: ["ojos del oro opaco de las monedas viejas", "ojos completamente rojos que retienen el brillo del fuego", "ojos de color cobre pulido", "ojos negros brillantes sin pupilas"]
  }
};

function makeAppearance(pools: ReturnType<typeof poolsFor>, race: string, tags: string[], preset: Preset): string {
  const vis = raceVisuals[race] || {};
  const buildPool = vis.build || pools.build;
  const hairPool = vis.hair || pools.hair;
  const eyesPool = vis.eyes || pools.eyes;
  
  const build = pick(buildPool);
  const hair = pick(hairPool);
  const eyes = pick(eyesPool);
  const feature = pickFlavored(pools.feature, tags, "feature", preset);
  
  if (race === "Dracónido") {
    return `dracónido de complexión ${build}, con ${hair} y ${eyes}. La mayoría recordará ${feature}`;
  }
  
  return `${String(race).toLowerCase()} de complexión ${build}, con ${hair} y ${eyes}. La mayoría recordará ${feature}`;
}

function constrained(val: string | undefined, fallback: () => string): string {
  return (val && val !== "any") ? val : fallback();
}

export interface GenerateOpts {
  preset?: string; race?: string; klass?: string;
  alignment?: string; ageRange?: string; narrativeRole?: string;
  power?: string; tags?: string[];
}

export function generateNPC(opts: GenerateOpts = {}, prev: Partial<NPC> = {}, locks: Locks = {}): NPC {
  const presetName = (opts.preset && PRESETS[opts.preset]) ? opts.preset : "5e Genérico";
  const preset = PRESETS[presetName];
  const tags = opts.tags || [];
  const pools = poolsFor(preset);

  const race = locks.name ? (prev.race ?? pick(preset.races)) : constrained(opts.race, () => pick(preset.races));
  const klass = locks.klass ? (prev.klass ?? pick(preset.classes)) : constrained(opts.klass, () => pick(preset.classes));
  const alignment = locks.alignment ? (prev.alignment ?? pick(T.alignments)) : constrained(opts.alignment, () => pick(T.alignments));
  const ageRange = constrained(opts.ageRange, () => pick(T.ageRanges));
  const narrativeRole = constrained(opts.narrativeRole, () => pick(T.narrativeRoles));
  const power = constrained(opts.power, () => pick(T.powerLevels));

  return {
    preset: presetName, tags: tags.slice(),
    name: locks.name ? (prev.name ?? makeName(preset.nameStyle, race)) : makeName(preset.nameStyle, race),
    pronouns: locks.name ? (prev.pronouns ?? pick(T.pronouns)) : pick(T.pronouns),
    race, klass, alignment, ageRange,
    age: T.ageMap[ageRange] || T.ageMap["adulto"],
    narrativeRole, power,
    appearance: locks.appearance ? (prev.appearance ?? makeAppearance(pools, race, tags, preset)) : makeAppearance(pools, race, tags, preset),
    traits: locks.traits ? (prev.traits ?? twoDistinct(() => pickFlavored(pools.trait, tags, "trait", preset))) : twoDistinct(() => pickFlavored(pools.trait, tags, "trait", preset)),
    motivation: locks.motivation ? (prev.motivation ?? pickFlavored(pools.motivation, tags, "motivation", preset)) : pickFlavored(pools.motivation, tags, "motivation", preset),
    secret: locks.secret ? (prev.secret ?? pickFlavored(pools.secret, tags, "secret", preset)) : pickFlavored(pools.secret, tags, "secret", preset),
    abilities: locks.abilities ? (prev.abilities ?? generateAbilities(klass, power)) : generateAbilities(klass, power)
  };
}

export function rerollField(npc: NPC, key: string): NPC {
  const preset = PRESETS[npc.preset] || PRESETS["5e Genérico"];
  const pools = poolsFor(preset);
  const tags = npc.tags || [];
  const n: NPC = { ...npc, traits: npc.traits.slice() };
  switch (key) {
    case "name": n.name = makeName(preset.nameStyle, n.race); n.pronouns = pick(T.pronouns); break;
    case "appearance": n.appearance = makeAppearance(pools, n.race, tags, preset); break;
    case "traits": n.traits = twoDistinct(() => pickFlavored(pools.trait, tags, "trait", preset)); break;
    case "motivation": n.motivation = pickFlavored(pools.motivation, tags, "motivation", preset); break;
    case "secret": n.secret = pickFlavored(pools.secret, tags, "secret", preset); break;
    case "abilities": n.abilities = generateAbilities(n.klass, n.power); break;
  }
  return n;
}

const POWER_HINT: Record<string, string> = {
  Mundano: "Trátalo como un PNJ de nivel campesino (VD 0 a 1/8); su verdadero poder reside en información, posición o influencia — no en el combate.",
  Competente: "Apunta a un VD de 1 a 3 — una amenaza creíble para un grupo de nivel bajo.",
  Élite: "Apunta a un VD de 5 a 9, con una táctica destacada o habilidad característica.",
  Legendario: "Apunta a un VD de 12 o más, con acciones legendarias, acciones de guarida o un poder especial único."
};

export function buildPrompt(npc: NPC): string {
  const preset = PRESETS[npc.preset] || PRESETS["5e Genérico"];
  const themes = npc.tags.length ? npc.tags.join(", ") : "ninguno";
  const ab = `FUE ${npc.abilities.FUE} (${abilityMod(npc.abilities.FUE)}), DES ${npc.abilities.DES} (${abilityMod(npc.abilities.DES)}), CON ${npc.abilities.CON} (${abilityMod(npc.abilities.CON)}), INT ${npc.abilities.INT} (${abilityMod(npc.abilities.INT)}), SAB ${npc.abilities.SAB} (${abilityMod(npc.abilities.SAB)}), CAR ${npc.abilities.CAR} (${abilityMod(npc.abilities.CAR)})`;
  return `Eres un asistente experto para Directores de Juego de Dungeons & Dragons 5e. Expande la semilla del PNJ que aparece a continuación en un personaje completo y listo para usar en la mesa.

=== SEMILLA DEL PNJ ===
Nombre: ${npc.name} (${npc.pronouns})
${preset.lineageLabel}: ${npc.race}
${preset.classLabel}: ${npc.klass}
Alineamiento: ${npc.alignment}
Edad: ${npc.ageRange} — ${npc.age}
Rol narrativo: ${npc.narrativeRole}
Nivel de poder: ${npc.power}
Temas: ${themes}
Tono de campaña: ${preset.tone}

Apariencia: ${npc.appearance}
Personalidad: ${npc.traits.join(" ")}
Motivación: ${npc.motivation}
Secreto: ${npc.secret}
Atributos: ${ab}

=== ENTREGABLE ===
1. Un bloque de estadísticas completo de D&D 5e ajustado al nivel de poder "${npc.power}" — CA, PG, velocidad, las seis puntuaciones de característica con sus modificadores, tiradas de salvación, habilidades clave, sentidos, idiomas, valor de desafío y una o dos acciones o rasgos distintivos. ${POWER_HINT[npc.power] || ""}
2. Notas de interpretación: voz descrita, una muletilla física y una línea de diálogo característica con sus propias palabras.
3. Dos ganchos de trama que conecten directamente el secreto con los personajes jugadores.
4. Dos relaciones con nombre: un aliado y un rival, cada uno en una oración.
5. Qué desea este PNJ en la próxima sesión y la única cosa que teme.

Mantén coherencia con el tono de campaña indicado. Usa encabezados claros en markdown. Responde completamente en español. No salgas del personaje ni añadas advertencias.`;
}

export function npcToMarkdown(npc: NPC): string {
  const preset = PRESETS[npc.preset] || PRESETS["5e Genérico"];
  const themeLine = npc.tags.length ? `**Temas:** ${npc.tags.join(", ")}  \n` : "";
  const ab = `FUE ${npc.abilities.FUE} (${abilityMod(npc.abilities.FUE)})  DES ${npc.abilities.DES} (${abilityMod(npc.abilities.DES)})  CON ${npc.abilities.CON} (${abilityMod(npc.abilities.CON)})  INT ${npc.abilities.INT} (${abilityMod(npc.abilities.INT)})  SAB ${npc.abilities.SAB} (${abilityMod(npc.abilities.SAB)})  CAR ${npc.abilities.CAR} (${abilityMod(npc.abilities.CAR)})`;
  return `# ${npc.name}
*${npc.pronouns} · ${npc.race} ${npc.klass} · ${npc.alignment} · ${npc.age}*

**Rol narrativo:** ${npc.narrativeRole}
**Nivel de poder:** ${npc.power}
${themeLine}
**Apariencia.** ${npc.appearance}.

**Personalidad.** ${npc.traits.join(" ")}

**Motivación.** ${npc.motivation}

**Secreto.** ${npc.secret}

**Atributos.** ${ab}
`;
  void preset;
}
