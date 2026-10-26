// Tot conținutul preluat din pagina originală (C.S.H. BUSINESS SRL – Contabilitate 24 Timișoara).

const WA_TEXT =
  "Buna!%20Sunt%20interesat%20de%20servicii%20contabilitate%20C.S.H.%20BUSINESS%20SRL%20-%20consultanta%20gratuita";

export const company = {
  name: "C.S.H. BUSINESS SRL",
  tagline: "SERVICII DE CONTABILITATE",
  place: "Sânmihaiu Român • Timiș",
  legalBadge: "ART.10 L82/1991",
  caen: "CAEN 7022",
  address: "SÂNMIHAIU ROMÂN, Nr.324E, cod poștal 307380, Jud. Timiș",
  wazeAddress: "Str. Iezăr, Nr.8, Sânmihaiu Român, Jud. Timiș",
  wazeUrl:
    "https://www.waze.com/ul?q=" +
    encodeURIComponent("Str. Iezăr, Nr.8, Sânmihaiu Român, Jud. Timiș") +
    "&navigate=yes",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Str. Iezăr, Nr.8, Sânmihaiu Român, Jud. Timiș"),
  emailGeneral: "csh.business@yahoo.com",
  emailFlorina: "chis.florina@yahoo.com",
};

export const people = {
  nicolae: {
    name: "CHIS NICOLAE",
    short: "Nicolae",
    role: "Administrator / Economist",
    phone: "0732 264 771",
    tel: "tel:+40732264771",
    wa: `https://wa.me/40732264771?text=${WA_TEXT}`,
  },
  loredana: {
    name: "CHIS LOREDANA-FLORINA",
    short: "Loredana",
    role: "Contabilitate / Relații clienți",
    phone: "0728 811 869",
    tel: "tel:+40728811869",
    wa: `https://wa.me/40728811869?text=${WA_TEXT}`,
  },
};

export const WA_MAIN = people.nicolae.wa;

export const nav = [
  { href: "#model", label: "Modelul legal" },
  { href: "#acoperire", label: "Acoperire" },
  { href: "#pret", label: "Preț fix" },
  { href: "#servicii", label: "Servicii" },
  { href: "#garda", label: "Gardă 24/7" },
  { href: "#faq", label: "Întrebări" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  badges: [
    "MODEL LEGAL ART.10 ALIN.(1) LEGEA 82/1991",
    "STUDII ECONOMICE SUPERIOARE • CAEN 7022",
    "TRANSPARENȚĂ 100% • CONTRACTE CLARE",
  ],
  intro: "Nu sunt membru CECCAR și nu pretind asta. Lucrez 100% legal pe un model transparent:",
  cta: "Vreau consultanță gratuită 15 min",
  reply: "Răspundem în < 2h, chiar și duminică",
  stats: [
    { k: "<72h", v: "înființare prin jurist" },
    { k: "2-4h", v: "CIM economist /lună" },
    { k: "24/7", v: "gardă ANAF & ITM" },
  ],
  social: "+47 firme cu CIM activ • Contracte consultanță + CIM • rating 4.9/5",
  contract: {
    title: "Modelul tău legal de colaborare",
    status: "ART.10 LEGEA 82 • OK",
    doc: "Contract individual de muncă",
    docStatus: "REVISAL • ACTIV",
    fields: [
      ["Angajator", "SRL-ul tău"],
      ["Angajat", "Economist (eu)"],
      ["Funcție", "Economist 2-4h/lună"],
      ["Temei legal", "Art.10 L82/1991"],
    ],
    sign: "Semnez bilanțul ca economist intern • Nu ca prestator CECCAR extern",
    checklist: [
      { label: "Contract prestări servicii consultanță CAEN 7022", done: true },
      { label: "CIM part-time economist + Revisal", done: true },
      { label: "Contabilitate 0 → Balanță + Bilanț", done: true },
      { label: "Control ANAF & ITM – vin eu ca economist angajat", done: false, active: true },
      { label: "ONRC via jurist / SSM & medicina muncii via parteneri", done: false },
    ],
    pay: { title: "Plată transparentă", text: "Factură consultanță + salariu CIM cu taxe la stat" },
    resp: { title: "Răspundere", text: "Eu vin la control ca angajat" },
    quote: "„În sfârșit cineva care explică pe față cum e legal fără CECCAR. Am CIM, Revisal, tot.”",
    quoteBy: "Andrei, SRL Timișoara – IT • model CIM din 2023",
  },
};

export const coverage = {
  strip: {
    title: "Acoperire Națională",
    text: "Servicii pe tot teritoriul României – Timișoara, București, Cluj, Iași, Constanța, orice județ",
    eu: "Suport firme RO cu activitate în UE",
    a: "100% ONLINE • FIZIC LA NEVOIE • 24/7",
    b: "ONRC + ANAF + ITM ÎN ORICE JUDEȚ",
  },
  trust: [
    "Nu trebuie să-ți faci token SPV/e-Factura - ne ocupăm noi 100%",
    "Plăți ANAF și furnizori la termen legal - nu mai iei amenzi",
    "Te ajutăm să emiți facturile corect, dacă nu te descurci",
  ],
  eyebrow: "ACOPERIRE • RO 100% + FIRME RO CU ACTIVITATE ÎN UE",
  title1: "Lucrăm pe tot teritoriul României +",
  title2: "Firme românești cu activitate în UE",
  disclaimer:
    "Înainte să scriem date firmă, menționăm clar: firma prestează servicii de contabilitate pe tot teritoriul statului român și prestează servicii de contabilitate la firmele din România care au contract cu firme din Uniunea Europeană și prestează lucrări acolo.",
  chips: ["ORICE JUDEȚ • 100% ONLINE", "RO ↔ UE • VIES + 390"],
  ro: {
    tag: "ACOPERIRE 100% RO",
    col: "COLOANA 1 • ACOPERIRE NAȚIONALĂ 100%",
    title: "Servicii pe tot teritoriul României",
    lead:
      "Firma noastră prestează servicii de consultanță și suport contabil pe tot teritoriul statului român. Indiferent dacă ești în",
    cities: "Timișoara, București, Cluj, Iași, Constanța sau oriunde în țară",
    rest:
      "- lucrăm 100% online și fizic unde e nevoie. Dosare ONRC în orice județ, contabilitate, SPV, e-Factura, controale ANAF - totul fără să te deplasezi. Suntem din Sânmihaiu Român, Timiș, dar clientul nostru poate fi din orice colț al României.",
    whatTitle: "Ce acoperim național",
    items: [
      {
        t: "ONRC în orice județ",
        d: "– înființări, modificări, suspendări, dizolvări via jurist colaborator, depunere online națională, rezervare denumire în 2-4h",
      },
      {
        t: "Contabilitate 100% online + suport 24/7",
        d: "– CIM economist, Revisal, SPV, e-Factura fără token, D100/D112, bilanț semnat ca angajat, control ANAF/ITM",
      },
      {
        t: "Deplasare la sediu în Timiș + împrejurimi, restul țării – online rapid",
        d: "– în Timiș venim fizic să ridicăm acte, în restul țării totul pe WhatsApp / Drive, cu confirmare și gardă 24/7",
      },
    ],
    cityList: ["Timișoara", "București", "Cluj", "Iași", "Constanța", "Brașov", "Orice județ"],
    seat: "Sediul fizic:",
    seatText:
      "Sânmihaiu Român, Timiș – operare națională. Clientul poate fi din orice județ, noi ne ocupăm de tot online + jurist local ONRC dacă e nevoie.",
  },
  eu: {
    tag: "FIRME RO → UE • SUPORT COMPLET",
    col: "COLOANA 2 • FIRME ROMÂNEȘTI ÎN UE",
    title: "Firme din România cu contracte în UE",
    lead: "Prestăm servicii de contabilitate și consultanță pentru",
    bold: "firmele din România care au contracte cu firme din Uniunea Europeană și prestează lucrări acolo",
    rest:
      ". Știm specificul: detașări, facturare intracomunitară, VIES, e-Transport internațional, declarații 390, SAF-T, impozitare. Te ajutăm să fii corect atât cu ANAF România, cât și cu legislația europeană.",
    whatTitle: "Ce acoperim pentru RO → UE",
    items: [
      {
        t: "Facturare intracomunitară, VIES",
        d: "– facturi fără TVA intra-UE, verificare VIES valid, declarație recapitulativă 390 lunar, corelații SAF-T",
      },
      {
        t: "Detașări personal în UE",
        d: "– contracte detașare, A1, Revisal, pontaje, diurne externe, coordonare cu parteneri SSM autorizați pentru șantiere externe",
      },
      {
        t: "e-Transport & Intrastat",
        d: "– UIT internațional, e-Transport RO-UE, Intrastat expediții / introduceri, D300 corelat, fără amenzi 10.000 lei",
      },
      {
        t: "Consultanță fiscală RO-UE",
        d: "– optimizare vector fiscal, impozit nerezidenți, evitarea dublei impuneri, consultanță model CIM compatibil cu activitate externă",
      },
    ],
    viesTitle: "VIES + D390 + Facturi fără TVA intra-UE verificate",
    detTitle: "Detașare",
    detText: "A1 + Revisal + diurnă externă + dosar ITM complet",
    cta: "Vreau suport RO → UE",
    dual: "România + UE • Consultanță fiscală duală",
    tags: ["e-Transport INTL", "Detașări A1", "Ev. dublă impunere"],
  },
  trustBox: {
    title: "Încredere teritorială:",
    text: "Poți lucra cu noi de oriunde din România, nu doar din Timiș. Sediul în Sânmihaiu Român, Timiș, dar operăm 100% național + suport pentru firme românești cu contracte și lucrări în UE. ONRC în orice județ, contabilitate CIM, e-Factura fără token, plăți ANAF la termen, facturare intracomunitară VIES, detașări, e-Transport internațional – totul printr-un singur contact.",
    cta: "Discutăm pe WhatsApp",
  },
};

export const model = {
  eyebrow: "Modelul nostru unic • 100% transparent",
  title: "Cum lucrăm legal și transparent – Modelul nostru unic",
  lead:
    "Nu ascundem nimic. Nu ești păcălit cu „sunt contabil autorizat”. Îți arăt exact contractele, temeiul legal și cine răspunde la ANAF/ITM. Totul scris, semnat, în Revisal.",
  pillars: [
    {
      n: "PILONUL 1 • EU PERSONAL",
      t: "Contabilitate & Bilanț – CIM Economist",
      body: [
        "Mă angajez la firma ta cu ",
        ["CIM part-time ca economist (Art.10 Legea 82/1991)"],
        ". Țin contabilitatea de la 0 la balanță, întocmesc și ",
        ["semnez bilanțul ca economistul tău intern"],
        ". Ești 100% legal, fără să mai ai nevoie de firmă CECCAR externă pentru contabilitatea curentă. Am studii economice superioare și experiență – condiția cerută de lege pentru semnarea bilanțului ca angajat.",
      ] as (string | string[])[],
      quote:
        "Art.10 alin.(1) Legea 82: „Răspunderea pentru organizarea și conducerea contabilității revine administratorului. Contabilitatea poate fi organizată și condusă prin compartiment distinct condus de director economic / contabil-șef / persoană cu studii economice superioare angajată cu CIM”",
      points: [] as string[],
    },
    {
      n: "PILONUL 2 • COLABORATOR JURIST",
      t: "ONRC & Juridic",
      body: [
        ["Înființări, modificări, dizolvări, suspendări, CAEN, sedii, asociați"],
        " – prin colaborator jurist autorizat, cu contract de colaborare. Tu vorbești doar cu mine, eu coordonez dosarul, juristul depune și semnează unde e nevoie de calificare juridică. Plată transparentă, factură separată dacă cere ONRC-ul onorariu jurist.",
      ] as (string | string[])[],
      quote: "",
      points: ["Rezervare denumire + redactare acte", "Depunere online/fizic ONRC", "Urmărire dosar + CUI + vector fiscal"],
    },
    {
      n: "PILONUL 3 • PARTENERI AUTORIZAȚI",
      t: "SSM & Medicina Muncii",
      body: [
        ["Recomandare către parteneri autorizați SSM și medicina muncii"],
        ". Nu fac eu SSM-ul – nu am calificare. Îți fac legătura, negociez tariful și urmăresc dosarul să fie complet la ITM. Ai dosar complet: fișe SSM, evaluare riscuri, control medical la angajare. Fără amenzi ITM de 5.000-10.000 lei. Eu coordonez, partenerii autorizați emit documentele legale.",
      ] as (string | string[])[],
      quote: "",
      points: ["Recomandare firmă SSM autorizată", "Recomandare clinică medicina muncii", "Urmărire dosar + alerte scadențe"],
    },
  ],
  benefit: {
    eyebrow: "BENEFICIUL REAL PENTRU TINE",
    title: "Ce înseamnă CIM de economist pentru tine?",
    lead:
      "Nu mai plătești o firmă de contabilitate separată care „prestează servicii” și apoi fuge la control. Ai un economist angajat la tine în firmă, cu contract în Revisal, care răspunde personal la ANAF și ITM.",
    items: [
      {
        t: "Cost fix mic, fără surprize",
        d: "2-4h/lună în CIM = salariu minim proporțional + taxe la stat. Nu plătești 800-1500 lei la o firmă CECCAR. E mai ieftin și mai sigur.",
      },
      {
        t: "Răspund la ANAF ca angajat",
        d: "La control, vin eu personal ca economistul tău angajat, cu delegație. Nu te las singur. Știu dosarul pe de rost, pentru că eu l-am făcut.",
      },
      {
        t: "Revisal inclus, fără birocrație",
        d: "Eu întocmesc CIM-ul, îl înregistrez în Revisal, fac pontajul și declarațiile. Tu semnezi o singură dată. Zero drumuri la ITM.",
      },
      {
        t: "Semnătură legală pe bilanț",
        d: "Conform Art.10 Legea 82, bilanțul se semnează de administrator + economist angajat cu studii superioare economice. Fără parafă CECCAR obligatorie pentru microîntreprinderi.",
      },
    ],
  },
  extract: {
    eyebrow: "EXTRAS LEGAL – CA SĂ FII LINIȘTIT",
    law: "Art.10 alin.(1) din Legea contabilității nr.82/1991 republicată",
    q1: "„Răspunderea pentru organizarea și conducerea contabilității revine administratorului. Contabilitatea se organizează și se conduce, de regulă, în compartimente distincte, conduse de către directorul economic, contabilul-șef sau altă persoană împuternicită să îndeplinească această funcție.”",
    q2: "„Aceste persoane trebuie să aibă studii economice superioare.”",
    gloss:
      "→ Adică: ești administrator, mă angajezi pe mine economist cu CIM, eu conduc contabilitatea până la balanță și bilanț și semnez legal ca angajat. Nu ca prestator extern.",
    importantTitle: "Important de știut:",
    important: [
      "Modelul e valabil dacă ai microîntreprindere / SRL mic-mediu, nu audit obligatoriu",
      "Bilanțul anual la micro poate fi semnat de economist angajat, fără viza CECCAR",
      "Pentru societăți mari cu audit statutar, recomand oricum colaborare CECCAR – îți spun sincer de la început",
      "Eu am studii superioare economice – îndeplinesc condiția legală",
    ],
    stamps: ["STUDII ECONOMICE SUPERIOARE", "CIM PART-TIME LEGAL"],
  },
  services: {
    title: "Servicii complete • un singur punct de contact: eu",
    items: [
      ["Contabilitate până la balanță", "Prin CIM economist, de la 0 la balanță"],
      ["Bilanț anual", "Întocmit + semnat ca economist angajat"],
      ["Control ANAF & ITM", "Vin eu personal, ca angajat"],
      ["Înființare SRL / PFA", "Prin colaborator jurist"],
      ["Modificări ONRC", "Sediu, CAEN, asociați, via jurist"],
      ["e-Factura & e-Transport", "SPV, UIT, D406, fără erori"],
      ["SSM & Medicina muncii", "Recomandare parteneri autorizați"],
      ["Salarizare & Revisal", "CIM, pontaj, declarații incluse"],
    ] as [string, string][],
  },
};

export const pricing = {
  eyebrow: "Cum se calculează prețul? • Preț fix negociat transparent",
  title1: "Preț corect, fix pe perioadă, calculat după firma",
  titleEm: "TA",
  title2: ", nu după listă.",
  lead1:
    "O firmă de ride-sharing cu 2 angajați care ajunge la 50 într-o săptămână nu poate plăti ca un PFA fără angajați. De aceea prețul se stabilește la început, după o analiză reală, și",
  leadFixed: "rămâne fix pe perioada agreată",
  lead2: "sau până la schimbarea vectorului fiscal.",
  whyTitle: "De ce fără preț de listă?",
  why: [
    "Un PFA IT fără TVA, 0 angajați = volum mic, risc mic.",
    "Un SRL transport / ride-sharing cu 2→50 șoferi = Revisal zilnic, e-Transport, diurne, pontaje.",
    "Același preț ar fi incorect pentru amândoi. Noi facem preț drept.",
  ],
  legalModel: "Model legal:",
  legalModelText: "Factură consultanță CAEN 7022 + salariu CIM economist cu taxe. Totul scris în contract.",
  factorsTitle: "Cei 5 factori care stabilesc prețul tău fix",
  factors: [
    {
      n: "01 • Forma juridică",
      v: "II, PFA, SRL, SRL-D",
      d: "Un II fără angajați are 1 declarație pe an. Un SRL are bilanț, asociați, dosar ANAF. Costul reflectă răspunderea și volumul de muncă legală, nu e arbitrar.",
    },
    {
      n: "02 • Regim TVA",
      v: "Neplătitor vs Plătitor",
      d: "Neplătitor = simplu. Plătitor = decont TVA lunar/trimestrial, e-Factura obligatorie, jurnale, corelații SAF-T. Înseamnă +2-4h de muncă reală în fiecare lună.",
      extra: [
        ["Neplătitor", "Fără decont TVA"],
        ["Plătitor TVA", "Decont + SAF-T + e-Factura"],
      ],
    },
    {
      n: "03 • Număr angajați",
      v: "0 / 1-5 / 5-20 / 20+ / variabil",
      d: "Exemplu ride-sharing: luni ai 2 șoferi, vineri ai 50. Înseamnă 48 CIM-uri, pontaje, adeverințe, Revisal zilnic. Nu poți plăti ca firma cu 0 angajați. Prețul se calibrează pe realitate.",
      extra: [["EXEMPLUL REAL", "„2 la 50 de angajați într-o săptămână” = scenariu real, tarif variabil cu praguri, negociat de la început."]],
    },
    {
      n: "04 • Domeniu de activitate",
      v: "Comerț, Servicii, Transport, Construcții, HoReCa, E-commerce, IT, Producție",
      d: "Complexitate diferită — fiecare domeniu are obligații diferite: Transport = e-Transport + UIT zilnic, HoReCa = gestiune + case de marcat, Construcții = diurne + șantiere, E-commerce = colete + Intrastat, IT = drepturi de autor.",
      tags: [
        "Comerț – e-Transport",
        "Transport / Ride-sharing – UIT + Revisal",
        "Construcții – diurne",
        "HoReCa – gestiune",
        "E-commerce – Intrastat",
        "IT – micro + dividende",
        "Producție – SAF-T complex",
        "Servicii – simplu",
      ],
    },
    {
      n: "05 • Volum activitate",
      v: "Facturi, bonuri, importuri",
      d: "10 facturi/lună vs 300 facturi + 500 bonuri + importuri Intrastat nu e același efort. Numărăm realist: nr. facturi emise/primite, bonuri, extrase, importuri.",
      stats: [
        ["~30", "facturi / lună mic"],
        ["150+", "facturi / lună mare"],
        ["INTRA", "Intrastat import"],
      ],
    },
  ],
  vector: {
    title: "Vector fiscal – explicat simplu",
    lead: "Prețul rămâne fix până se schimbă vectorul.",
    d: "Stabilim un preț fix pe perioada contractată (ex: 12 luni). Acel preț nu crește dacă ai cu 5 facturi în plus într-o lună normală.",
    renegotiate: "Se renegociază transparent doar când se schimbă vectorul fiscal:",
    triggers: [
      "Devii plătitor de TVA (treci pragul)",
      "Angajezi peste pragul agreat (ex: de la 0 la 5+)",
      "Schimbi domeniul (ex: servicii → comerț cu import)",
      "Volum exploziv (ex: ride-sharing 2 → 50 angajați)",
    ],
    after:
      "Atunci facem addendum, recalibrăm CIM economist + consultanța, și noul preț rămâne iar fix până la următoarea schimbare de vector. Fără surprize, fără facturi „din burtă”.",
  },
  offer: {
    title: "Cum decurge oferta în 15 minute?",
    steps: [
      ["Spui forma, TVA, angajați, domeniu", "Pe WhatsApp / call. 3 minute, fără acte la început."],
      ["Îți fac simulare pe 2 componente legale", "Factură consultanță CAEN 7022 + salariu CIM economist cu taxe. Totul transparent."],
      ["Preț fix, scris în contract", "Rămâne fix pe perioada agreată. Dacă se schimbă vectorul, renegociem la vedere."],
    ] as [string, string][],
    guarantee: "Garanție: Dacă după call nu ești convins că prețul e corect pentru volumul tău, nu semnăm. Fără presiune.",
  },
  next: {
    eyebrow: "Pasul următor – fără preț de listă",
    title: "Vrei să știi cât te costă exact pe firma TA?",
    d: "15 minute, pe WhatsApp sau telefon. Îți spun dacă modelul CIM e potrivit, ce vector ai acum și ce preț fix poți avea pe perioada contractată.",
    cta: "Vreau ofertă personalizată în 15 min – Gratuit",
    calc: "Calculează o estimare",
  },
  calc: {
    title: "Calculator estimare – orientativ, local",
    sub: "Alege datele firmei tale – estimarea rămâne pe site, nu trimitem nicăieri",
    close: "Închide",
    run: "Calculează estimarea",
    note: "Estimare orientativă, calculată local în browser. Nu colectăm datele.",
    resultPrefix: "Estimare orientativă: între",
    resultAnd: "și",
    resultSuffix: "lei/lună",
    fine:
      "Prețul final se stabilește după call-ul de 15 min, rămâne fix pe perioada contractată. Include consultanță CAEN 7022 + CIM economist cu taxe, SPV, e-Factura setată corect. Fără costuri ascunse, renegociem doar dacă se schimbă vectorul fiscal.",
    lock: "Blochează preț fix →",
    forma: ["II", "PFA", "SRL", "SRL-D"],
    angajati: [
      ["0", "0 angajați"],
      ["1-5", "1-5 angajați"],
      ["5+", "5+ angajați"],
      ["variabil", "Variabil ca ride-sharing (2→50)"],
    ] as [string, string][],
    tva: ["Nu", "Da"],
    domeniu: ["Servicii", "Comerț", "Transport / Ride-sharing", "Construcții", "HoReCa", "E-commerce", "IT", "Producție"],
  },
};

export const peace = {
  eyebrow: "LINIȘTE TOTALĂ • NU DOAR CONTABILITATE",
  title: "Ce mai facem pentru tine - ca să",
  titleEm: "dormi liniștit",
  lead:
    "Nu e doar contabilitate până la bilanț. E ecosistem complet: tu ai un singur contact - eu - și în spate o rețea de parteneri autorizați care rezolvă tot ce ține de firmă, legal.",
  cards: [
    {
      n: "CARD 01 • e-Factura & SPV",
      badge: "Fără token • Fără cozi SPV",
      t: "Fără token, fără cozi SPV",
      pre: "Firmele ",
      strong: "NU trebuie să-și facă token pe e-Factura",
      d: ". Ne ocupăm noi de tot: înregistrare SPV, token, configurare e-Factura, e-Transport, preluare facturi. Tu doar ne trimiți actele pe WhatsApp.",
      incl: "SPV + e-Factura + e-Transport + SAF-T D406 setat corect, fără erori 500. Noi monitorizăm.",
    },
    {
      n: "CARD 02 • Plăți",
      badge: "Zero penalități",
      t: "Plăți ANAF și furnizori la timp",
      d: "Te ajutăm să-ți faci toate plățile în termen legal la ANAF (TVA, impozit, CAS, CASS) și către furnizori. Calendar de plăți lunar, alerte pe WhatsApp înainte de scadență, ca să nu iei penalități.",
      pair: [
        ["ANAF", "TVA, impozit, CAS, CASS la termen"],
        ["Furnizori", "Calendar plăți + alerte WhatsApp"],
      ] as [string, string][],
    },
    {
      n: "CARD 03 • Facturi",
      badge: "Facturare asistată",
      t: "Nu te descurci cu facturile? Le facem noi",
      d: "Dacă nu știi sau nu ai timp să faci facturi, le emitem noi pentru tine, corect, cu e-Factura inclusă, conform legii. Îți arătăm și cum să le faci singur, dacă vrei.",
      list: [
        "Emitere facturi cu e-Factura inclusă",
        "Corectare facturi vechi + stornări legale",
        "Training scurt 10 min pe WhatsApp video",
      ],
    },
    {
      n: "CARD 04 • Ecosistem complet",
      badge: "Un singur contact: eu",
      t: "Tot ecosistemul firmei, printr-un singur contact",
      sub: [
        {
          t: "Case de marcat",
          d: "Colaborare cu firmă autorizată case de marcat - se ocupă 100% de fiscalizare, avizare, mentenanță, dosar ANAF aparate de marcat. Tu nu alergi la service-uri.",
        },
        {
          t: "Autorizații ORC",
          d: "Prin partenerul nostru de la ORC, te ajutăm cu toate autorizațiile legale - avize, autorizații de funcționare, puncte de lucru - fără să ai probleme cu instituțiile statului român.",
        },
        {
          t: "SSM & Medicina muncii",
          d: "Recomandare parteneri autorizați - dosar complet, fără amenzi ITM 5.000-10.000 lei.",
        },
      ],
    },
  ],
  promise: {
    label: "Promisiunea:",
    text: " tu trimiți actele pe WhatsApp, noi ne ocupăm de restul - SPV, e-Factura, plăți la termen, facturi, autorizații. Tu dormi liniștit, noi avem garda.",
    cta: "Vreau liniște totală →",
  },
};

export const premium = {
  eyebrow: "SERVICIU PREMIUM DIFERENȚIATOR • FĂRĂ BIBLIORAFTURI",
  title1: "Servicii Premium –",
  title2: "Fără drumuri,",
  title3: "fără bibliorafturi",
  lead:
    "Două servicii care ne diferențiază real în Timișoara: pregătim dosarul fiscal complet pentru bancă sau fonduri europene printr-un simplu apel și venim personal să ridicăm actele de la sediul tău. Tu nu mai alergi între instituții.",
  strip: ["APEL • RIDICARE • DOSAR GATA", "24/7 Timișoara"],
  credit: {
    n: "PREMIUM 01 • Credit & Fonduri Europene",
    badge: "SERVICIU EXPRESS",
    t: "Credit bancar sau proiect european? Dosar fiscal gata printr-un apel",
    p: [
      "Dacă firma ta vrea un ",
      "credit bancar",
      " sau un ",
      "proiect cu fonduri europene",
      ", noi îți punem la dispoziție ",
      "printr-un simplu apel telefonic",
      " toată documentația fiscală necesară către bancă sau către consultanții de fonduri europene. Fără să mai plimbi bibliorafturi de acte de la o instituție la alta.",
    ],
    d: "Bilanțuri, balanțe, adeverințe ANAF, certificate fiscale, D100, D112, situații financiare – le pregătim noi, ștampilate, semnate ca economist angajat, gata de depus la bancă sau AFIR / fonduri UE.",
    get: "Ce primești:",
    getText: "dosar complet PDF + original ștampilat, transmitere directă către banca / consultantul tău de fonduri, fără drumuri.",
    time: "Timp mediu: 24h.",
    cta: "Sună acum pentru dosar",
    tag: "Bănci + Fonduri UE • Fără bibliorafturi",
    docs: ["Bilanț ANAF", "Balanță", "Certificat fiscal", "Adeverințe ANAF", "Situații financiare"],
  },
  pickup: {
    area: "TIMIȘOARA & ÎMPREJURIMI",
    n: "PREMIUM 02 • Ridicare acte la sediu",
    t: "Ești ocupat? Venim noi să ridicăm actele",
    p1: "Dacă firma este ocupată și nu are timp să aducă documentele fiscale, ",
    p2: "doar printr-un simplu apel telefonic",
    p3: ", noi ne deplasăm și ridicăm documentele direct de la sediul firmei tale din ",
    p4: "Timișoara și împrejurimi",
    d: "Facturi, bonuri, extrase, contracte, deconturi, foi de parcurs – nu mai pierzi timp pe drumuri. Ne ocupăm noi de tot ce trebuie să ajungă la contabilitate. Primești confirmare pe WhatsApp cu tot ce am ridicat.",
    pick: "Ridicăm",
    pickText: "Facturi • Bonuri • Extrase • Contracte",
    zone: "Zonă",
    zoneText: "Timișoara • Sânmihaiu • Giroc • Dumbrăvița • Moșnița",
    cta: "Sună pentru ridicare",
    ctaLong: "Sună acum pentru ridicare",
    oneCall: "Un apel = noi venim",
    free: "Fără cost extra",
    freeText: " în primii 15 km pentru clienți cu abonament – inclus în pachetul Premium. Pentru ocazional, tarif simbolic deplasare, negociat transparent.",
  },
  why: {
    title: "De ce e premium?",
    text: "Pentru că alte firme de contabilitate îți cer să vii tu cu bibliorafturi. Noi inversăm rolurile: noi venim la tine, noi pregătim dosarul pentru bancă / fonduri, noi trimitem. Tu doar suni. E inclus în modelul nostru CIM – economistul tău vine la sediu, nu tu la ghișeu.",
    cta: "Vreau fără drumuri →",
  },
};

export const spv = {
  eyebrow: "CEL MAI IMPORTANT DIFERENȚIATOR",
  title1: "La noi NU îți bați capul cu SPV și XML-uri.",
  title2: "Noi facem absolut totul.",
  lead:
    "La alte firme, te pun să-ți descarci singur facturile din SPV și să le păstrezi în foldere pe calculatorul tău. La noi nu există așa ceva.",
  lead2: "Noi facem absolut totul.",
  ride:
    "Inclusiv pentru firmele de ride-sharing - Bolt, Uber, FreeNow - descărcăm noi toate facturile intracomunitare și e-Factura",
  old: {
    tag: "MODEL VECHI",
    col: "COLOANA 1",
    title: "La alții:",
    items: [
      "Îți spun să-ți descarci singur facturile din SPV",
      "Te lasă să te descurci cu XML-uri din e-Factura",
      "Îți cer să ții foldere pe calculator",
      "Dacă nu înțelegi, te descurci singur",
    ],
    result:
      "Rezultat: pierzi ore întregi în SPV, greșești XML-uri, iei amenzi e-Factura, și tot tu ești de vină. Noi am văzut zeci de cazuri.",
  },
  neo: {
    tag: "SERVICIU COMPLET 24/7",
    col: "COLOANA 2 • RECOMANDAT",
    title: "La noi - Serviciu complet 24/7",
    items: [
      ["Ne ocupăm noi cu descărcarea din SPV a facturilor", "Zilnic, automat, fără să ne suni"],
      [
        "Descărcăm noi facturile intracomunitare pentru firmele de ride-sharing (Bolt, Uber etc) - nu trebuie să-ți bați capul cu XML din SPV",
        "Cel mai căutat pentru șoferi - facturi Bolt / Uber intracomunitare",
      ],
      ["Noi descărcăm, verificăm, înregistrăm și arhivăm tot", "Arhivă completă în Drive, corelată cu e-Factura + e-Transport"],
      [
        "Dacă nu înțelegi ceva, stăm la dispoziția ta. Îți spunem tot ce ține de firma ta și te ajutăm",
        "Explicații pe WhatsApp, video scurt, fără limbaj corporatist",
      ],
    ] as [string, string][],
    spvDaily: ["SPV zilnic", "Descărcăm + verificăm XML + validăm ANAF"],
    archive: ["Arhivă", "Totul arhivat 10 ani, gata de control ANAF"],
  },
  personal: {
    eyebrow: "MESAJ PERSONAL • DE LA OM LA OM",
    text: "Știm că la început totul ți se pare foarte greu. E normal. Dar cu timpul, cu noi lângă tine, înțelegi și știi ce este mai bine pentru firma ta. Nu te lăsăm să-ți bați singur capul.",
    team: "Echipa Contabilitate 24/7",
    place: "Sânmihaiu Român, Timiș • Model CIM economist",
    plain: "Limbaj simplu, uman, nu corporatist. Întreabă orice, pe WhatsApp, chiar și cu voce.",
  },
  rideBox: {
    label: "Special pentru ride-sharing:",
    text: " La firmele de ride-sharing, facturile intracomunitare Bolt / Uber vin cu XML-uri complicate din Irlanda / Olanda. Noi le descărcăm zilnic din SPV, le verificăm VIES, le convertim și le înregistrăm corect. Tu nu vezi niciodată un XML. Primești doar raport simplu:",
    msg: "S-au descărcat 23 facturi, toate ok",
    chips: ["Bolt", "Uber", "FreeNow", "Bolt Food", "Uber Eats", "e-Factura", "SPV intracomunitar"],
    cta: "Vreau să nu mai descarc nimic din SPV →",
  },
};

export const steps = {
  title: "Cum funcționează? Simplu, legal, fără drumuri.",
  items: [
    {
      t: "Call 15 min gratuit + verificare eligibilitate",
      d: "Pe WhatsApp. Ne spui CAEN, asociați, cifra de afaceri estimată. Îți spun dacă modelul CIM e ok pentru tine (micro, fără audit obligatoriu) și costul exact pe 2 componente.",
    },
    {
      t: "Contracte + CIM în Revisal + preluare acte",
      d: "Semnăm contract prestări servicii consultanță CAEN 7022 + CIM part-time economist 2-4h/lună. Înregistrez CIM în Revisal, preiau actele, setez SPV, e-Factura. Tu semnezi digital de acasă.",
    },
    {
      t: "Devin economistul tău intern și mă ocup de tot",
      d: "Țin contabilitatea până la balanță, depun declarații, întocmesc și semnez bilanțul ca angajat, vin la control ANAF/ITM, coordonez juristul ONRC și partenerii SSM/medicina muncii. Tu vezi totul în Drive.",
    },
  ],
};

export const guard = {
  eyebrow: "DE CE 24/7? NU E MARKETING, E GARDĂ REALĂ",
  title: "Diferența se vede la 22:14 sâmbăta, la control.",
  p1: "Majoritatea firmelor de contabilitate lucrează L-V 9-17. ANAF trimite notificări și sâmbătă. SPV-ul pică duminică. ITM sună marți la 8 dimineața.",
  p2a: "La mine, „24/7” înseamnă gardă reală pentru clienții Premium:",
  p2b: " sunt angajatul tău, cunosc dosarul, intervin documentat în max 2h la blocaje e-Factura / SPV / notificare ANAF cu termen scurt. Și dacă vine controlul, vin eu – nu un call center.",
  p3: "Plus: pentru că sunt economist intern, am calitate procesuală să reprezint firma la ANAF/ITM cu delegație. Nu trebuie să cauți împuternicire la CECCAR.",
  program: { a: "Program public:", at: " L-V 9-18 pentru lucruri normale. ", b: "Gardă urgențe:", bt: " 24/7 pentru blocaje e-Factura / SPV / notificări ANAF cu termen scurt – doar Premium." },
  incidents: [
    ["Duminică • 21:40", "Factură blocată în SPV – eroare 500", "Reîncărcată + validată, trimisă la client în 23 min – ca economist angajat"],
    ["Sâmbătă • 09:12", "Notificare ANAF – e-Transport fără UIT", "Cod UIT obținut + declarație rectificativă depusă, fără amendă 10.000 lei"],
    ["Marți • 08:05", "Control ITM inopinat – Revisal + SSM", "M-am prezentat cu CIM + dosar SSM via partener autorizat, control închis fără amendă"],
  ] as [string, string, string][],
};

export const testimonials = {
  title: "Oameni reali, firme reale, contracte reale.",
  sub: "Testimoniale verificabile • CIM + contract consultanță",
  items: [
    {
      who: "Andrei P.",
      meta: "SRL Timișoara – IT • CIM 2h/lună din 2023",
      text: "Am înființat SRL-ul într-o joi prin juristul lui, luni aveam CIM în Revisal și prima factură. La control ANAF a venit el ca angajat, cu delegație. Fără stres.",
    },
    {
      who: "Elena D.",
      meta: "PFA → SRL Cluj • Preț fix negociat",
      text: "Eram blocată cu e-Factura de 3 zile. În 40 min mi-a setat tot SPV-ul și mi-a explicat modelul CIM pe video. Preț fix pe firmă, cu CIM inclus, merită fiecare leu. Transparent.",
    },
    {
      who: "Marius & Ioana",
      meta: "SRL Sânmihaiu – comerț • Premium 24/7",
      text: "Premium 24/7 e singurul unde chiar răspunde sâmbăta și vine la ITM. Am evitat amendă de 10.000 lei la e-Transport + dosar SSM făcut via partenerii lui.",
    },
  ],
};

export const faq = {
  title: "Întrebări care apar mereu. Răspunsuri pe față.",
  lead:
    "Modelul CIM ridică întrebări – e normal. Îți răspund legal, cu articol de lege, nu cu marketing. Dacă nu găsești răspunsul, dă-ne WhatsApp cu voce sau video scurt.",
  cta: "Întreabă pe WhatsApp",
  items: [
    {
      q: "E legal să te angajezi ca economist la mai multe firme?",
      a: "Da, 100% legal. Conform Codului Muncii, poți avea mai multe CIM-uri part-time, la mai mulți angajatori diferiți, cu timp parțial (2-4h/lună/firmă). Fiecare CIM se înregistrează în Revisal la fiecare firmă în parte, cu declarație pe propria răspundere că respecți timpul maxim legal. Am peste 40 de CIM-uri active în Revisal, toate declarate la ITM. E modelul clasic de economist part-time la microîntreprinderi.",
    },
    {
      q: "Ce studii trebuie să ai ca să semnezi bilanțul ca angajat?",
      a: "Studii superioare economice – facultate de economie terminată. Asta cere Art.10 din Legea 82/1991. Eu am studii economice superioare, îndeplinesc condiția. Pentru SRL-uri micro și mici fără audit obligatoriu, bilanțul poate fi semnat de administrator + economistul angajat cu studii economice, fără viza CECCAR. Pentru societăți mari cu audit obligatoriu, îți recomand oricum colaborare cu auditor/CECCAR – îți spun sincer de la început dacă nu ești eligibil pentru modelul CIM.",
    },
    {
      q: "Cum se face plata? Două facturi?",
      a: "Două componente clare, ambele legale: 1) Contract prestări servicii consultanță în afaceri CAEN 7022 – firma mea de consultanță îți emite factură lunară pentru consultanță, organizare, control ANAF/ITM, coordonare dosare. 2) CIM part-time economist – firma ta mă angajează 2-4h/lună ca economist, îmi plătești salariu proporțional (ex: 300-500 lei net) + taxe la stat (CAS, CASS). Salariul apare în Revisal și în D112. Totul e deductibil la tine ca cheltuială salarială + consultanță. Îți dau simulare exactă la call.",
    },
    {
      q: "Ce se întâmplă la control ANAF / ITM? Vii tu ca reprezentant?",
      a: "Da, vin eu personal. Pentru că sunt angajat cu CIM la firma ta, am calitate de reprezentant – economistul firmei. Mă prezint cu CIM + delegație semnată de administrator + împuternicire SPV. La ANAF: prezint contabilitatea ținută de mine până la balanță, răspund la întrebări, depun documente. La ITM: prezint CIM-urile, Revisal, pontaje, plus dosarul SSM și medicina muncii obținut via partenerii autorizați pe care i-am coordonat. Nu te las singur. Ăsta e marele avantaj vs o firmă externă de contabilitate care trimite un contabil care nu e angajatul tău.",
    },
    {
      q: "Cât durează înființarea SRL/PFA?",
      a: "Medie reală 48-72h lucrătoare de la momentul în care avem toate actele (CI, dovadă sediu, acord). Rezervare denumire 2-4h, redactare acte de către juristul colaborator, depunere în aceeași zi. CUI-ul vine de la ONRC, urmărim zilnic. În Timiș e mai repede, dar național la fel – depunem online. După înființare, în aceeași zi facem CIM-ul în Revisal ca să fii acoperit contabil de la zi 0.",
    },
    {
      q: "Pot lucra cu voi dacă sunt din București / Cluj / Iași?",
      a: "Da, 90% din clienți sunt extra-Timiș. Totul e digital: ONRC prin jurist colaborator online, ANAF prin SPV, CIM prin Revisal online, facturi prin e-Factura. Am clienți în București, Cluj, Brașov, Constanța, Iași. Sediul meu e în Sânmihaiu Român (lângă Timișoara) dar operez național. La control ANAF/ITM, dacă e nevoie fizic, mă deplasez contra cost de transport sau lucrăm cu delegație + videoconferință – stabilim de la început.",
    },
    {
      q: "Ce înseamnă mentenanță 24/7 concret? Chiar răspunzi noaptea?",
      a: "Da, dar structurat și doar pentru Premium. 9-18 L-V: suport normal pentru orice – contabilitate, facturi, declarații. 18-22 + weekend: gardă urgențe – e-Factura blocată, notificare ANAF cu termen <24h, Revisal urgent, control ITM neanunțat. Răspuns garantat în max 2h, de obicei în 20-30 min. Nu e abonament la call-uri de strategie la 2 dimineața, e intervenție pe blocaje reale care te pot costa amendă. Pentru că sunt angajatul tău, am interes direct să nu iei amendă.",
    },
  ],
};

export const contact = {
  eyebrow: "CONTACT OFICIAL",
  seatLabel: "Sediu oficial",
  waze: "Deschide adresa în aplicația de navigație:",
  wazeBtn: "Deschide în Waze",
  mapsBtn: "Deschide în Google Maps",
  hours: { label: "Orar sediu", value: "8-16 (L-V)", sub: "Program fizic la sediu" },
  phone: { label: "Consultanță telefonică", value: "24/7 NON-STOP", sub: "Răspundem chiar și duminica" },
  direct: "Contact direct • 2 linii WhatsApp",
  call: "Sună",
  emailTitle: "Email oficial",
  emailGeneralLabel: "Email general firmă",
  emailFlorinaLabel: "Email contabilitate / Florina",
  emailNote: "Trimite documente / facturi pe email, răspundem în <2h chiar și în weekend.",
  waNote:
    "Ambele numere sunt pe WhatsApp. Scrie pe oricare, răspundem în <2h chiar și duminica. Pentru urgențe SPV / e-Factura blocată / notificare ANAF - gardă Premium 24/7.",
  quick: { label: "Vrei ofertă rapidă?", text: " Spune-ne forma juridică, TVA, nr. angajați, domeniu - preț fix negociat, fără cifre pe site.", cta: "Cere ofertă →" },
};

export const finalCta = {
  eyebrow: "C.S.H. BUSINESS SRL • MODEL LEGAL ART.10 L82/1991",
  title: "Gata să ai economist angajat la tine, nu firmă externă?",
  text1: "Sună la ",
  text2: " - Nicolae sau ",
  text3: " - Loredana. 15 min pe WhatsApp, simulare completă: cost consultanță + CIM, acte, CUI, bilanț legal. Fără pitch agresiv.",
  waNicolae: "WhatsApp Nicolae",
  waLoredana: "WhatsApp Loredana",
};

export const footer = {
  tagline: "Servicii de contabilitate",
  official: "Date oficiale firmă",
  nameLabel: "Denumire",
  seatLabel: "Sediu oficial",
  wazeMaps: "Waze / Google Maps",
  emailFirm: "Email firmă",
  florina: "Florina – contabilitate",
  hours: "Orar sediu:",
  hoursVal: " 8-16 (L-V) • ",
  hoursStrong: "Consultanță telefonică 24/7",
  legalLine: "CAEN 7022 • Studii economice superioare • Art.10 L82/1991 • CIM economist part-time",
  servicesTitle: "Servicii complete",
  services: [
    "Contabilitate până la balanță + bilanț (CIM)",
    "Control ANAF & ITM – ca angajat",
    "SPV & e-Factura fără token – noi descărcăm tot",
    "Facturi intracomunitare ride-sharing (Bolt/Uber)",
    "Plăți ANAF & furnizori la termen",
    "Facturi emise corect dacă nu te descurci",
    "Case de marcat autorizate + autorizații ORC",
    "Dosar credit bancar / fonduri UE – 1 apel",
    "Ridicare acte de la sediu – Timișoara",
    "Acoperire națională + firme RO cu activitate în UE",
  ],
  legalTitle: "Legal • Transparent",
  legalName: "C.S.H. BUSINESS SRL - Servicii de consultanță CAEN 7022.",
  legalText:
    "Contabilitate organizată prin CIM economist conform Art.10 alin.(1) Legea 82/1991. Economist cu studii superioare economice, angajat part-time la firma client, semnează bilanțul ca economist intern. Model legal pentru microîntreprinderi fără audit obligatoriu.",
};

// Formula identică cu cea din pagina originală.
export function estimate(f: { forma: string; angajati: string; tva: string; domeniu: string }) {
  let y = 0;
  if (f.forma === "SRL") y += 90;
  if (f.forma === "SRL-D") y += 60;
  if (f.tva === "Da") y += 140;
  if (f.angajati === "1-5") y += 110;
  if (f.angajati === "5+") y += 260;
  if (f.angajati === "variabil") y += 380;
  if (["Transport / Ride-sharing", "Construcții", "HoReCa"].includes(f.domeniu)) y += 150;
  if (["E-commerce", "Producție", "Comerț"].includes(f.domeniu)) y += 90;
  const min = 180 + y;
  const max = min + (f.angajati === "variabil" ? 280 : 160) + (f.tva === "Da" ? 60 : 0);
  return { min, max };
}
