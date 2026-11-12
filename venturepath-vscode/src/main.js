const CATS = [
  {id:"restaurang", name:"Restaurang och café", desc:"Servera mat och dryck på plats.", full:true, kw:["restaurang","café","cafe","kafé","servera","bistro","krog","pizzeria"]},
  {id:"is", name:"Fabrik och tillverkning", desc:"Tillverka och sälja produkter, till exempel is.", full:true, kw:["fabrik","tillverk","is","isbit","isblock","produktion","tillverkning"]},
  {id:"bolag", name:"Aktiebolag (AB)", desc:"Starta ett aktiebolag i Sverige.", full:true, kw:["aktiebolag","ab","bolag","bolagsverket","registrera bolag"]},
  {id:"butik", name:"Butik och e-handel", desc:"Sälja varor i fysisk butik eller online.", full:true, kw:["butik","e-handel","ehandel","webbshop","sälja","online"]},
  {id:"service", name:"Städ- och serviceföretag", desc:"Erbjuda städ, underhåll och service.", full:true, kw:["städ","service","tvätt","hemservice"]},
  {id:"bygg", name:"Byggföretag", desc:"Utföra bygg- och renoveringsuppdrag.", full:true, kw:["bygg","renovera","snickare","elektriker","rörmokare"]},
  {id:"transport", name:"Transport och logistik", desc:"Frakta gods och personer.", full:true, kw:["transport","logistik","frakt","taxi","åkeri","leverans"]},
  {id:"it", name:"IT och teknik", desc:"Utveckla och sälja digitala tjänster.", full:true, kw:["it","app","programmer","webb","teknik","mjukvara"]},
  {id:"konsult", name:"Konsultverksamhet", desc:"Sälja kunskap och rådgivning.", full:true, kw:["konsult","rådgivning","coach"]},
  {id:"skonhet", name:"Skönhet och personlig vård", desc:"Frisör, nagelstudio, massage m.m.", full:true, kw:["skönhet","frisör","nagel","massage","spa"]},
  {id:"livsmedel", name:"Livsmedelsproduktion", desc:"Tillverka livsmedel för försäljning.", full:true, kw:["livsmedel","bageri","mat","sylt","chark"]},
  {id:"import", name:"Import och export", desc:"Handla med varor över gränser.", full:true, kw:["import","export","tull","grossist"]},
  {id:"fastighet", name:"Fastighetsverksamhet", desc:"Förvalta och hyra ut fastigheter.", full:true, kw:["fastighet","hyra ut","lägenhet","förvaltning"]}
];

const GUIDES = {
  restaurang: {
    title:"Starta en restaurang", checked:"Senast kontrollerad: 2026-10-01 (planeringsunderlag, kontrollera mot Livsmedelsverket och din kommun)",
    intro:"En restaurang kräver planering av koncept, lokal, livsmedelsregler och bemanning. Kraven varierar med verksamhetens upplägg, så kontakta alltid din kommun tidigt.",
    steps:[
      "Undersök efterfrågan i området och välj koncept.",
      "Skriv en affärsplan och en startbudget.",
      "Välj företagsform, till exempel enskild firma eller aktiebolag.",
      "Registrera verksamheten hos rätt myndighet.",
      "Hitta en lokal och kontrollera att användningen är tillåten.",
      "Ansök om de anmälningar eller tillstånd som din kommun kräver.",
      "Inför egenkontroll, hygienrutiner och spårbarhet.",
      "Planera utrustning, råvaror och leverantörer.",
      "Planera personal, lön och arbetsgivarregistrering.",
      "Ordna bokföring, moms och betalningar.",
      "Marknadsför restaurangen inför öppning.",
      "Förbered öppningsdagen."
    ],
    req:[
      {t:"Anmälan till kommunen om livsmedelsverksamhet", k:"mand", note:"Gäller matlagning och servering. Verksamheten får starta två veckor efter att anmälan kommit in, eller när du fått bekräftelse. Kontrollera med kommunen."},
      {t:"Egenkontrollprogram för köket", k:"mand", note:"Skriftligt system för hygien, temperatur och riskhantering."},
      {t:"Serveringstillstånd", k:"rec", note:"Krävs om du vill servera alkohol. Ansökan görs hos kommunen."},
      {t:"Bygglov eller bygganmälan", k:"rec", note:"Kan krävas vid ombyggnad eller ändrad användning av lokalen. Kontrollera med kommunen."},
      {t:"Tekniska anmälningar", k:"rec", note:"Kan krävas för ventilation, fettavskiljare och vatten- och avloppsledningar. Kontrollera med kommunen."},
      {t:"Arbetsgivarregistrering", k:"rec", note:"Krävs i regel när du betalar ut ersättning för arbete till någon som inte är godkänd för F-skatt, till exempel en anställd. Registreras hos Skatteverket."}
    ],
    auth:"Vilka krav som gäller beror på verksamhetens upplägg, lokal och meny. Tillstånd presenteras här som något som kan krävas, inte som något alla behöver.",
    authorities:["Kommunens miljö- och hälsoskydd","Livsmedelsverket","Skatteverket","Arbetsmiljöverket (vid anställning)"],
    costs:"Startkostnader: lokalhyra och deposition, köksutrustning, inredning, lager, marknadsföring och reserv. Löpande: hyra, råvaror, löner, el, försäkringar.",
    mistakes:["Att underskatta startkostnaderna och ha för liten reserv.","Att börja innan lokalen och kommunens krav är klarlagda.","Att glömma egenkontroll och dokumentation."],
    links:[["Verksamt.se – starta restaurang","https://www.verksamt.se"],["Livsmedelsverket","https://www.livsmedelsverket.se"]]
  },
  is: {
    title:"Starta en fabrik som tillverkar och säljer is", checked:"Senast kontrollerad: 2026-10-01 (planeringsunderlag, kontrollera mot Livsmedelsverket och din kommun)",
    intro:"En isfabrik är livsmedelsproduktion. Vattenkvalitet, hygien, temperaturkontroll och spårbarhet är centrala. Kraven beror på produkt, produktionsmetod och försäljningsmodell.",
    steps:[
      "Undersök marknaden och potentiella kunder, till exempel grossister, restauranger och butiker.",
      "Bestäm produkttyp, förpackning och försäljningsmodell.",
      "Beräkna produktionskapacitet och lönsamhet med synliga antaganden.",
      "Hitta en lämplig produktionslokal.",
      "Utred krav på vattenkvalitet och livsmedelssäkerhet.",
      "Kontrollera vilka anmälningar och godkännanden som gäller.",
      "Inför rutiner för hygien, rengöring, temperatur och spårbarhet.",
      "Välj maskiner, frysutrustning och förpackningssystem.",
      "Planera kylkedja och transport.",
      "Ta fram produktinformation, märkning och kvalitetsrutiner.",
      "Skapa en budget och tidsplan för produktionsstart."
    ],
    req:[
      {t:"Anmälan till kommunen om livsmedelsverksamhet", k:"mand", note:"Gäller produktion och försäljning av livsmedel. Verksamheten får starta två veckor efter att anmälan kommit in, eller när du fått bekräftelse. Kontrollera med kommunen."},
      {t:"Egenkontrollprogram med temperatur- och spårbarhetsrutiner", k:"mand", note:"Ska beskriva hur du håller kylkedjan och spårar dina produkter."},
      {t:"Vatten av dricksvattenkvalitet", k:"mand", note:"Vatten som används i livsmedelstillverkning ska i regel vara av dricksvattenkvalitet. Kontrollera med kommunen och Livsmedelsverket."},
      {t:"Miljöanmälan eller miljötillstånd", k:"rec", note:"Kan krävas beroende på produktionens storlek och utsläpp. Kontrollera med kommunens miljöenhet."},
      {t:"Bygglov eller bygganmälan", k:"rec", note:"Kan krävas vid ny lokal eller ombyggnad. Kontrollera med kommunen."},
      {t:"Arbetsgivarregistrering", k:"rec", note:"Krävs i regel när du betalar ut ersättning för arbete till någon som inte är godkänd för F-skatt. Registreras hos Skatteverket."}
    ],
    auth:"Specifika krav beror på produkt, produktionsmetod, lokal och försäljningsmodell. Den här guiden ersätter inte kontakt med kommunen.",
    authorities:["Kommunens miljö- och hälsoskydd","Livsmedelsverket","Skatteverket","Arbetsmiljöverket"],
    costs:"Startkostnader: lokal, frysrum, maskiner, förpackningsutrustning och vattenanalys. Löpande: el (stor kostnadspost), vatten, underhåll, förvaring och transport.",
    mistakes:["Att underskatta elkostnaden för frysning.","Att sälja innan rutiner för kylkedja är dokumenterade.","Att välja lokal innan vattenkrav är utredda."],
    links:[["Livsmedelsverket","https://www.livsmedelsverket.se"],["Verksamt.se","https://www.verksamt.se"]]
  },
  butik: {
    title:"Starta butik eller e-handel", checked:"Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor. Kontrollera alltid hos Skatteverket, Konsumentverket och din kommun.",
    intro:"Att sälja varor kräver planering av sortiment, prissättning, leveranser och kundvillkor. Om du säljer på nätet gäller särskilda konsumentregler som du bör känna till innan du börjar.",
    steps:[
      "Välj sortiment och säljkanal: fysisk butik, e-handel eller båda.",
      "Kalkylera inköp, priser, frakt och marginaler.",
      "Välj företagsform och registrera verksamheten hos Skatteverket.",
      "Kontrollera om du behöver momsregistrering utifrån din beräknade omsättning.",
      "Om du har fysisk butik: hitta lokal och kontrollera att användningen är tillåten.",
      "Välj betallösning, kassasystem och leveransföretag.",
      "Ta fram kundvillkor, returregler och information enligt konsumentreglerna för distansköp.",
      "Hantera personuppgifter enligt GDPR, till exempel i kundregister och nyhetsbrev.",
      "Planera lager, inköp och leverantörer.",
      "Ordna bokföring, moms och kvitton.",
      "Marknadsför butiken eller webbshopen inför lansering.",
      "Testa köpflödet från start till mål innan du öppnar för kunder."
    ],
    req:[
      {t:"Registrering av verksamheten hos Skatteverket", k:"mand", note:"Krävs för att bedriva näringsverksamhet. Kontrollera hos Skatteverket."},
      {t:"Momsregistrering", k:"rec", note:"Krävs vid omsättning över gränsen för momsregistrering. Kontrollera hos Skatteverket."},
      {t:"Ångerrätt vid distansköp", k:"mand", note:"Vid försäljning på nätet till konsumenter gäller ångerrätt. Kontrollera gällande regler hos Konsumentverket."},
      {t:"Personuppgiftshantering enligt GDPR", k:"mand", note:"Gäller om du samlar in kunduppgifter. Kontrollera hos IMY."}
    ],
    auth:"Krav för detaljhandel beror på varuslag, försäljningssätt och lokal. Vissa varor kan kräva särskilda tillstånd eller märkning. Den här guiden ersätter inte kontakt med myndigheter.",
    authorities:["Skatteverket","Konsumentverket","IMY (dataskydd)","Kommunen (vid fysisk butik)","Verksamt.se"],
    costs:"Startkostnader: lager, hemsida eller butiksinredning, kassasystem, marknadsföring och reserv. Löpande: inköp, frakt, betalningsavgifter, hyra vid fysisk butik, försäkringar och bokföring.",
    mistakes:["Att räkna fram priser utan att ta med frakt, returer och betalningsavgifter.",
      "Att sakna tydliga villkor för ångerrätt och retur.",
      "Att underskatta tiden för lager och leveranser."],
    links:[["Verksamt.se","https://www.verksamt.se"],["Skatteverket","https://www.skatteverket.se"],["Konsumentverket","https://www.konsumentverket.se"]]
  },
  bolag: {
    title:"Starta ett aktiebolag (AB)", checked:"Senast kontrollerad: 2026-10-01 (planeringsunderlag, kontrollera mot Bolagsverket och Skatteverket)",
    intro:"Ett aktiebolag är en egen juridisk person med eget ansvar. Det skiljer sig från enskild näringsverksamhet, där du själv står för verksamheten. Kraven och avgifterna kan ändras, så kontrollera aktuella regler.",
    steps:[
      "Förstå skillnaden mellan aktiebolag och enskild firma.",
      "Kontrollera att företagsnamnet är ledigt och uppfyller reglerna.",
      "Ta fram bolagsordning och stiftelseurkund.",
      "Sätt in aktiekapital (minst 25 000 kr enligt aktuella källor) och skaffa bankintyg.",
      "Registrera bolaget hos Bolagsverket.",
      "Anmäl verklig huvudman när det krävs.",
      "Ansök om F-skatt och momsregistrering vid behov.",
      "Registrera som arbetsgivare om du ska anställa.",
      "Ordna bokföring och årsredovisning.",
      "Planera återkommande skyldigheter efter registrering."
    ],
    req:[
      {t:"Registrering hos Bolagsverket", url:"https://bolagsverket.se/foretag/aktiebolag.475.html", k:"mand", note:"Krävs för att bilda aktiebolag. Görs digitalt via verksamt.se."},
      {t:"Aktiekapital och bankintyg", url:"https://bolagsverket.se/foretag/aktiebolag.475.html", k:"mand", note:"Minst 25 000 kr enligt aktuella källor. Bankintyget bifogas registreringen. Kontrollera gällande regler hos Bolagsverket."},
      {t:"Bolagsordning och stiftelseurkund", url:"https://bolagsverket.se/foretag/aktiebolag.475.html", k:"mand", note:"Bolagsordningen bifogas registreringen. Stiftelseurkunden upprättas av grundarna."},
      {t:"Anmälan om verklig huvudman", url:"https://bolagsverket.se/foretag/aktiebolag.475.html", k:"mand", note:"Ska göras inom fyra veckor från registreringen, via Bolagsverkets e-tjänst."},
      {t:"F-skatt och momsregistrering", url:"https://skatteverket.se/foretag/drivaforetag/startaochregistrera/fochfaskatt", k:"rec", note:"Vid behov, beroende på verksamhet och omsättning. Görs hos Skatteverket."}
    ],
    auth:"Den här guiden är inte juridisk rådgivning. Vid tvister eller komplexa beslut, kontakta jurist eller registrerad revisor.",
    authorities:["Bolagsverket","Skatteverket","Verksamt.se"],
    costs:"Avgifter för registrering hos Bolagsverket kan tillkomma. Löpande kostnader: bokföring, årsredovisning, revisor vid behov och försäkringar.",
    mistakes:["Att glömma anmälan om verklig huvudman.","Att inte planera bokföring från första dagen.","Att förlita sig på föråldrade regler om aktiekapital."],
    links:[["Bolagsverket","https://www.bolagsverket.se"],["Skatteverket","https://www.skatteverket.se"],["Verksamt.se","https://www.verksamt.se"]]
  },
  service: {
  "title": "Starta städ- och serviceföretag",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "Städ och service är tjänsteföretag där kundens förtroende och arbetsmiljön är centrala. Kraven beror på vilka tjänster du erbjuder.",
  "steps": [
    "Välj vilka tjänster du ska erbjuda och vilka kunder du riktar dig till.",
    "Kalkylera priser inklusive material, resor och försäkringar.",
    "Välj företagsform: enskild firma eller aktiebolag.",
    "Registrera verksamheten hos Skatteverket.",
    "Ansök om F-skatt och kontrollera om du behöver momsregistrera dig.",
    "Om du ska anställa: registrera dig som arbetsgivare och följ arbetsmiljöreglerna.",
    "Teckna företagsförsäkring och ansvarsförsäkring.",
    "Ta fram rutiner för kvalitet, kemikalier och personalens säkerhet.",
    "Ta fram avtal och villkor för kunderna.",
    "Ordna bokföring och kvitton från start."
  ],
  "req": [
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    },
    {
      "t": "F-skatt",
      "k": "rec",
      "note": "Vanligt för egenföretagare som fakturerar kunder. Kontrollera hos Skatteverket."
    },
    {
      "t": "Arbetsgivarregistrering",
      "k": "rec",
      "note": "Krävs i regel när du betalar ut ersättning för arbete till någon som inte är godkänd för F-skatt."
    },
    {
      "t": "Arbetsmiljöansvar",
      "k": "rec",
      "note": "Som arbetsgivare har du ansvar för arbetsmiljön. Kontrollera Arbetsmiljöverkets regler."
    }
  ],
  "auth": "Krav för städ och service beror på vilka tjänster och kemikalier du använder. Kontrollera med myndigheterna innan du startar.",
  "authorities": [
    "Skatteverket",
    "Arbetsmiljöverket",
    "Verksamt.se"
  ],
  "costs": "Startkostnader: utrustning, kemikalier, fordon och försäkringar. Löpande: löner, material, resor och försäkring.",
  "mistakes": [
    "Att prissätta utan att räkna in resor och material.",
    "Att sakna försäkring.",
    "Att inte dokumentera rutiner för arbetsmiljö."
  ],
  "links": [
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ],
    [
      "Arbetsmiljöverket",
      "https://www.av.se"
    ]
  ]
},
  bygg: {
  "title": "Starta byggföretag",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "Byggföretag arbetar ofta med tunga krav på behörighet, försäkring och arbetsmiljö. Vilka krav som gäller beror på vilka arbeten du utför.",
  "steps": [
    "Välj vilka arbeten du ska utföra: renovering, snickeri, el, rör eller annat.",
    "Kontrollera vilka behörigheter som krävs för ditt område.",
    "Välj företagsform: enskild firma eller aktiebolag.",
    "Registrera verksamheten hos Skatteverket.",
    "Ansök om F-skatt och kontrollera momsregistrering.",
    "Teckna ansvars- och yrkesförsäkring.",
    "Ta fram avtal och offertmallar.",
    "Kontrollera vilket ansvar du har för arbetsmiljön vid byggarbete.",
    "Ta fram rutiner för garantier och dokumentation av utfört arbete.",
    "Ordna bokföring och fakturering."
  ],
  "req": [
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    },
    {
      "t": "Behörighet för vissa arbeten",
      "k": "rec",
      "note": "Vissa arbeten, till exempel el, kräver behörighet. Kontrollera hos Elsäkerhetsverket för el."
    },
    {
      "t": "Bygglov eller bygganmälan",
      "k": "rec",
      "note": "Kan krävas för vissa åtgärder. Kontrollera med kommunen."
    },
    {
      "t": "Arbetsgivarregistrering",
      "k": "rec",
      "note": "Krävs i regel när du betalar ut ersättning för arbete till någon som inte är godkänd för F-skatt."
    }
  ],
  "auth": "Behörighets- och tillståndskrav varierar kraftigt mellan olika byggarbeten. Kontrollera alltid med kommunen och berörd myndighet.",
  "authorities": [
    "Skatteverket",
    "Arbetsmiljöverket",
    "Elsäkerhetsverket",
    "Kommunen"
  ],
  "costs": "Startkostnader: verktyg, fordon, behörigheter och försäkringar. Löpande: material, löner, försäkring och resor.",
  "mistakes": [
    "Att utföra arbete som kräver behörighet utan att ha den.",
    "Att sakna ansvarsförsäkring.",
    "Att inte skriva avtal innan arbetet startar."
  ],
  "links": [
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ],
    [
      "Arbetsmiljöverket",
      "https://www.av.se"
    ]
  ]
},
  transport: {
  "title": "Starta transport- och logistikföretag",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "Transportföretag kräver ofta tillstånd, försäkring och tydliga rutiner för körning och vila. Kraven beror på vilken trafik du bedriver.",
  "steps": [
    "Välj tjänst: frakt, taxi, leverans eller annat.",
    "Kontrollera om din verksamhet kräver tillstånd för yrkesmässig trafik.",
    "Välj företagsform: enskild firma eller aktiebolag.",
    "Registrera verksamheten hos Skatteverket.",
    "Ansök om F-skatt och kontrollera momsregistrering.",
    "Skaffa fordon och teckna försäkring för fordon och ansvar.",
    "Ta fram rutiner för kör- och vilotider.",
    "Ta fram avtal med uppdragsgivare.",
    "Ordna körjournal och bokföring.",
    "Kontrollera arbetsmiljökrav för förare och lastning."
  ],
  "req": [
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    },
    {
      "t": "Trafiktillstånd",
      "k": "rec",
      "note": "Krävs ofta för yrkesmässig trafik. Kontrollera hos Transportstyrelsen."
    },
    {
      "t": "Försäkring för fordon och ansvar",
      "k": "mand",
      "note": "Fordon ska vara försäkrade. Kontrollera kraven hos Transportstyrelsen."
    },
    {
      "t": "Arbetsgivarregistrering",
      "k": "rec",
      "note": "Krävs i regel när du betalar ut ersättning för arbete till någon som inte är godkänd för F-skatt."
    }
  ],
  "auth": "Tillståndskrav för transport beror på vilken typ av trafik, fordon och last det gäller. Kontrollera alltid med Transportstyrelsen.",
  "authorities": [
    "Transportstyrelsen",
    "Skatteverket",
    "Arbetsmiljöverket"
  ],
  "costs": "Startkostnader: fordon, tillstånd och försäkring. Löpande: drivmedel, underhåll, försäkring, löner och avgifter.",
  "mistakes": [
    "Att börja köra utan att kontrollera tillståndskraven.",
    "Att underskatta kostnader för fordon och underhåll.",
    "Att sakna rutiner för kör- och vilotider."
  ],
  "links": [
    [
      "Transportstyrelsen",
      "https://www.transportstyrelsen.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ],
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ]
  ]
},
  it: {
  "title": "Starta IT- och teknikföretag",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "IT- och teknikföretag säljer tjänster och produkter digitalt. Viktiga områden är avtal, dataskydd och skydd av ditt varumärke.",
  "steps": [
    "Välj tjänst eller produkt: webbutveckling, konsulting eller programvara.",
    "Välj företagsform: enskild firma eller aktiebolag.",
    "Registrera verksamheten hos Skatteverket.",
    "Ansök om F-skatt och kontrollera momsregler, även för försäljning till kunder utomlands.",
    "Ta fram avtal, licensvillkor och integritetspolicy.",
    "Kontrollera GDPR om du hanterar personuppgifter.",
    "Undersök om du vill skydda ditt varumärke.",
    "Teckna ansvarsförsäkring.",
    "Ordna bokföring och fakturering.",
    "Ta fram rutiner för säkerhet och uppdateringar."
  ],
  "req": [
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    },
    {
      "t": "Dataskydd enligt GDPR",
      "k": "mand",
      "note": "Gäller när du hanterar personuppgifter. Kontrollera hos IMY."
    },
    {
      "t": "Momsregistrering",
      "k": "rec",
      "note": "Kan krävas beroende på omsättning och kundens land. Kontrollera hos Skatteverket."
    },
    {
      "t": "Varumärkesskydd",
      "k": "rec",
      "note": "Kan registreras hos Patent- och registreringsverket."
    }
  ],
  "auth": "Krav på dataskydd och moms beror på vad du säljer och till vem. Kontrollera med myndigheterna.",
  "authorities": [
    "Skatteverket",
    "IMY",
    "Patent- och registreringsverket",
    "Verksamt.se"
  ],
  "costs": "Startkostnader: utrustning, licenser och eventuell varumärkesregistrering. Löpande: programvara, hosting, försäkring och löner.",
  "mistakes": [
    "Att hantera personuppgifter utan att följa GDPR.",
    "Att sakna tydliga avtal och licensvillkor.",
    "Att inte kontrollera momsregler för försäljning utomlands."
  ],
  "links": [
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ],
    [
      "IMY",
      "https://www.imy.se"
    ],
    [
      "Patent- och registreringsverket",
      "https://www.prv.se"
    ]
  ]
},
  konsult: {
  "title": "Starta konsultverksamhet",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "Konsultverksamhet säljer kunskap och rådgivning. Viktigt är tydliga uppdragsavtal och ansvarsförsäkring.",
  "steps": [
    "Välj kompetensområde och vilka kunder du riktar dig till.",
    "Välj företagsform: enskild firma eller aktiebolag.",
    "Registrera verksamheten hos Skatteverket.",
    "Ansök om F-skatt och kontrollera momsregistrering.",
    "Ta fram uppdragsavtal och villkor.",
    "Teckna ansvarsförsäkring.",
    "Kontrollera GDPR om du hanterar kunders personuppgifter.",
    "Ordna bokföring och fakturering.",
    "Ta fram ett underlag för marknadsföring baserat på verkliga uppdrag."
  ],
  "req": [
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    },
    {
      "t": "Ansvarsförsäkring",
      "k": "rec",
      "note": "Rekommenderas starkt för rådgivning. Kontrollera vilka krav dina kunder ställer."
    },
    {
      "t": "Momsregistrering",
      "k": "rec",
      "note": "Kan krävas beroende på omsättning. Kontrollera hos Skatteverket."
    },
    {
      "t": "Dataskydd enligt GDPR",
      "k": "rec",
      "note": "Gäller när du hanterar personuppgifter. Kontrollera hos IMY."
    }
  ],
  "auth": "Konsulter som ger juridisk eller annan reglerad rådgivning kan ha särskilda krav. Kontrollera vad som gäller för ditt område.",
  "authorities": [
    "Skatteverket",
    "IMY",
    "Verksamt.se"
  ],
  "costs": "Startkostnader: dator, programvara och försäkring. Löpande: försäkring, löner eller underleverantörer, resor och bokföring.",
  "mistakes": [
    "Att ge rådgivning som kräver särskild behörighet utan att ha den.",
    "Att sakna skriftliga uppdragsavtal.",
    "Att prissätta utan att räkna in tid för administration."
  ],
  "links": [
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ],
    [
      "IMY",
      "https://www.imy.se"
    ]
  ]
},
  skonhet: {
  "title": "Starta skönhets- och vårdföretag",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "Frisör, nagelstudio, massage och liknande verksamheter kräver god hygien och lämpliga lokaler. Vissa behandlingar kan kräva anmälan eller tillstånd.",
  "steps": [
    "Välj tjänster: frisör, nagelstudio, massage eller annat.",
    "Kontrollera vilka utbildningar eller behörigheter som krävs för behandlingarna.",
    "Hitta en lämplig lokal och kontrollera att användningen är tillåten.",
    "Välj företagsform: enskild firma eller aktiebolag.",
    "Registrera verksamheten hos Skatteverket.",
    "Kontrollera med kommunen om vissa behandlingar kräver anmälan.",
    "Ta fram hygienrutiner för utrustning och lokal.",
    "Teckna företagsförsäkring.",
    "Välj kassasystem och bokföring.",
    "Ta fram bokningsrutiner och villkor för kunder."
  ],
  "req": [
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    },
    {
      "t": "Anmälan till kommunen",
      "k": "rec",
      "note": "Kan krävas för vissa behandlingar eller lokaler. Kontrollera med kommunen."
    },
    {
      "t": "Behörighet för behandlingar",
      "k": "rec",
      "note": "Vissa behandlingar kräver utbildning. Kontrollera vilka krav som gäller."
    },
    {
      "t": "Arbetsgivarregistrering",
      "k": "rec",
      "note": "Krävs i regel när du betalar ut ersättning för arbete till någon som inte är godkänd för F-skatt."
    }
  ],
  "auth": "Krav varierar mellan behandlingar. Kontrollera alltid med kommunen innan du startar.",
  "authorities": [
    "Skatteverket",
    "Kommunen",
    "Verksamt.se"
  ],
  "costs": "Startkostnader: lokal, inredning, utrustning och försäkring. Löpande: hyra, material, löner och marknadsföring.",
  "mistakes": [
    "Att börja med behandlingar som kräver anmälan utan att kontrollera.",
    "Att underskatta hyra och löpande kostnader.",
    "Att sakna hygienrutiner."
  ],
  "links": [
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ]
  ]
},
  livsmedel: {
  "title": "Starta livsmedelsproduktion",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "Livsmedelsproduktion kräver anmälan, egenkontroll och märkning enligt livsmedelsreglerna. Kraven beror på vilken produkt du tillverkar.",
  "steps": [
    "Välj produkt och tillverkningsmetod.",
    "Hitta en lämplig lokal och kontrollera att användningen är tillåten.",
    "Gör en anmälan till kommunen om livsmedelsverksamhet.",
    "Ta fram ett egenkontrollprogram för hygien och riskhantering.",
    "Kontrollera märkningskraven för produkten.",
    "Välj företagsform och registrera verksamheten hos Skatteverket.",
    "Ansök om F-skatt och kontrollera momsregistrering.",
    "Ta fram rutiner för spårbarhet och kvalitet.",
    "Planera leverantörer, råvaror och förvaring.",
    "Ordna bokföring och fakturering."
  ],
  "req": [
    {
      "t": "Anmälan till kommunen om livsmedelsverksamhet",
      "k": "mand",
      "note": "Gäller tillverkning och försäljning av livsmedel. Kontrollera med kommunen."
    },
    {
      "t": "Egenkontrollprogram",
      "k": "mand",
      "note": "Skriftligt system för hygien, temperatur och spårbarhet."
    },
    {
      "t": "Märkning av livsmedel",
      "k": "mand",
      "note": "Märkningen regleras. Kontrollera med Livsmedelsverket."
    },
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    }
  ],
  "auth": "Specifika krav beror på produkt och tillverkningsmetod. Kontrollera alltid med kommunen och Livsmedelsverket.",
  "authorities": [
    "Kommunen",
    "Livsmedelsverket",
    "Skatteverket"
  ],
  "costs": "Startkostnader: lokal, utrustning, förpackningar och godkännanden. Löpande: råvaror, el, löner och transport.",
  "mistakes": [
    "Att börja tillverka innan anmälan är gjord.",
    "Att sakna dokumenterad egenkontroll.",
    "Att märka produkten utan att kontrollera reglerna."
  ],
  "links": [
    [
      "Livsmedelsverket",
      "https://www.livsmedelsverket.se"
    ],
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ]
  ]
},
  import: {
  "title": "Starta import- och exportverksamhet",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "Import och export innebär tullregler, varukrav och ofta mer administration. Kraven beror på vad du handlar med och vilka länder du handlar med.",
  "steps": [
    "Välj produkter och marknader.",
    "Kontrollera tull- och importregler för varan.",
    "Kontrollera om varan kräver tillstånd eller godkännande.",
    "Välj företagsform och registrera verksamheten hos Skatteverket.",
    "Ansök om EORI-nummer hos Tullverket om det behövs för din verksamhet.",
    "Kontrollera moms vid import och export.",
    "Ordna transport och varuförsäkring.",
    "Ta fram avtal med leverantörer och köpare.",
    "Ordna bokföring och dokumentation av tullhandlingar."
  ],
  "req": [
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    },
    {
      "t": "EORI-nummer",
      "k": "rec",
      "note": "Vanligt krav vid tullhantering. Ansök hos Tullverket."
    },
    {
      "t": "Varuspecifika krav",
      "k": "rec",
      "note": "Vissa varor kräver tillstånd eller godkännande. Kontrollera hos Tullverket eller berörd myndighet."
    },
    {
      "t": "Momsregler vid import och export",
      "k": "rec",
      "note": "Kontrollera med Skatteverket."
    }
  ],
  "auth": "Tull- och varukrav varierar kraftigt. Kontrollera alltid med Tullverket för de varor du hanterar.",
  "authorities": [
    "Tullverket",
    "Skatteverket",
    "Verksamt.se"
  ],
  "costs": "Startkostnader: lager, system och försäkring. Löpande: transport, tullavgifter, försäkring och administration.",
  "mistakes": [
    "Att inte kontrollera tullregler innan första försändelsen.",
    "Att sakna dokumentation av varor och ursprung.",
    "Att underskatta transport- och tullkostnader."
  ],
  "links": [
    [
      "Tullverket",
      "https://www.tullverket.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ],
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ]
  ]
},
  fastighet: {
  "title": "Starta fastighetsverksamhet",
  "checked": "Innehållet är ett planeringsunderlag och är ännu inte kontrollerat mot aktuella källor.",
  "intro": "Fastighetsverksamhet kan handla om förvaltning, uthyrning eller förmedling. Vissa uppdrag kräver registrering och särskilda behörigheter.",
  "steps": [
    "Välj inriktning: förvaltning, uthyrning eller förmedling.",
    "Kontrollera om din verksamhet kräver registrering eller behörighet.",
    "Välj företagsform: enskild firma eller aktiebolag.",
    "Registrera verksamheten hos Skatteverket.",
    "Kontrollera skatte- och momsregler för uthyrning.",
    "Ta fram hyresavtal och rutiner för underhåll.",
    "Teckna försäkring för fastigheten och ansvar.",
    "Kontrollera om lokalen eller fastigheten behöver bygglov för ändrad användning.",
    "Ordna bokföring och dokumentation."
  ],
  "req": [
    {
      "t": "Registrering hos Skatteverket",
      "k": "mand",
      "note": "Krävs för att bedriva näringsverksamhet."
    },
    {
      "t": "Registrering för fastighetsförmedling",
      "k": "rec",
      "note": "Krävs för förmedling av fastigheter. Kontrollera hos Fastighetsmäklarinspektionen."
    },
    {
      "t": "Bygglov eller bygganmälan",
      "k": "rec",
      "note": "Kan krävas vid ändrad användning. Kontrollera med kommunen."
    },
    {
      "t": "Försäkring för fastigheten",
      "k": "rec",
      "note": "Rekommenderas starkt. Kontrollera vilka krav hyresgäster och banker ställer."
    }
  ],
  "auth": "Krav för förmedling, uthyrning och ändrad användning skiljer sig mycket. Kontrollera med respektive myndighet.",
  "authorities": [
    "Skatteverket",
    "Fastighetsmäklarinspektionen",
    "Kommunen"
  ],
  "costs": "Startkostnader: fastighet eller lokal, renovering och försäkring. Löpande: underhåll, försäkring, räntor och administration.",
  "mistakes": [
    "Att förmedla fastigheter utan nödvändig registrering.",
    "Att underskatta underhållskostnader.",
    "Att inte kontrollera bygglov vid ändrad användning."
  ],
  "links": [
    [
      "Verksamt.se",
      "https://www.verksamt.se"
    ],
    [
      "Skatteverket",
      "https://www.skatteverket.se"
    ],
    [
      "Fastighetsmäklarinspektionen",
      "https://www.fmi.se"
    ]
  ]
}
};

const BUDGET_ITEMS = ["Registrering och etablering","Lokalhyra och deposition","Maskiner och utrustning","Varulager och material","Marknadsföring","Försäkringar","Bokföring och administration","Personal","Övriga utgifter","Reserv för oväntade kostnader"];

const STATUS = ["Ej påbörjad","Pågår","Behöver hjälp","Inte relevant","Klar"];

// State (saved per signed-in Claude account, private to each person)
let projects = [];
let budget = {};
let uid = null, db = null, budgetTimer = null, budgetDirty = false;
const cap = n => (window.claude && window.claude.use) ? window.claude.use(n) : Promise.resolve(null);
const userCol = () => db.collection("data/users/" + uid);
let pending = 0;
function setSync(t){ const e = document.getElementById("syncState"); if(e) e.textContent = t; }
function track(p){
  pending++; setSync("Sparar …");
  p.then(()=>{ pending--; if(!pending) setSync("Synkad kl " + new Date().toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"})); },
         ()=>{ pending--; setSync("Kunde inte spara. Försök igen."); });
  return p;
}
function setAccount(on){
  const btn = document.getElementById("acctBtn");
  if(btn) btn.textContent = on ? "Mitt konto" : "Logga in";
  if(!on) setSync("");
  const n = document.getElementById("acctNote");
  if(n){
    n.style.display = on ? "none" : "block";
    n.textContent = "Logga in med ditt Claude-konto för att spara projekt och budget. Utan inloggning kan du läsa guider och använda verktygen, men inget sparas.";
  }
}
function saveBudget(){
  if(!db || !uid) return;
  clearTimeout(budgetTimer);
  budgetTimer = setTimeout(()=>{
    budgetTimer = null;
    track(userCol().doc("budget").set({values: budget})).then(()=>{ budgetDirty = false; }).catch(()=>alert("Kunde inte spara budgeten. Försök igen."));
  }, 700);
}
async function initAccount(){
  const [u, d] = await Promise.all([cap("user"), cap("db")]);
  db = d;
  uid = (u && d) ? await u.id() : null;
  if(!uid || !db){ setAccount(false); return; }
  setAccount(true);
  userCol().onSnapshot(snap=>{
    const list = []; let b = {};
    snap.docs.forEach(doc=>{
      if(!doc.exists) return;
      const data = doc.data();
      if(doc.id === "budget") b = data.values || {};
      else if(doc.id.startsWith("p-")) list.push({docId: doc.id, ...data});
    });
    list.sort((x,y)=>(x.created||0)-(y.created||0));
    projects = list;
    renderProjects();
    if(!budgetTimer && !budgetDirty){ budget = b; renderBudget(); }
  }, ()=>alert("Kunde inte läsa dina sparade uppgifter just nu."));
}
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

// Navigation
function go(page, arg){
  if(planTimer){ clearTimeout(planTimer); planTimer=null; savePlan(); }
  if(page==="assistant") populateAi();
  if(page==="premium") document.getElementById("interestMsg").textContent = "";
  if(page==="account") renderAccount();
  document.querySelectorAll("section.page").forEach(s=>s.classList.remove("on"));
  document.getElementById("page-"+page).classList.add("on");
  document.querySelectorAll(".navlinks button").forEach(b=>b.classList.toggle("on", b.dataset.go===page));
  closeMenu();
  if(page==="guide") renderGuide(arg);
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click", e=>{
  const g = e.target.closest("[data-go]");
  if(g){ go(g.dataset.go); }
  const c = e.target.closest("[data-cat]");
  if(c){ openCat(c.dataset.cat); }
});
function toggleMenu(force){
  const open = force === undefined ? !document.getElementById("navlinks").classList.contains("open") : force;
  document.getElementById("navlinks").classList.toggle("open", open);
  document.getElementById("navscrim").classList.toggle("open", open);
  document.getElementById("menuBtn").textContent = open ? "✕ Stäng" : "☰ Meny";
}
function closeMenu(){ toggleMenu(false); }
document.getElementById("menuBtn").onclick = ()=>toggleMenu();
document.getElementById("navscrim").onclick = ()=>closeMenu();

// Categories
function catCard(c){
  return `<div class="card">
    
    <span class="tag ${c.full?'':'gray'}">${c.full?'Fullständig guide':'Kommande'}</span>
    <h4>${esc(c.name)}</h4>
    <p>${esc(c.desc)}</p>
    <button class="btn btn-ghost btn-sm" data-cat="${c.id}">${c.full?'Öppna guide':'Se mer (kommande)'}</button>
  </div>`;
}
document.getElementById("catGrid").innerHTML = CATS.map(catCard).join("");
document.getElementById("pCat").innerHTML = CATS.filter(c=>c.full).map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join("");

function openCat(id){
  const c = CATS.find(x=>x.id===id);
  if(c && GUIDES[id]) return go("guide", id);
  if(c){
    document.getElementById("guideBody").innerHTML = `<div class="panel"><h2>${esc(c.name)}</h2><p>${esc(c.desc)}</p><div class="warnbox">Den fullständiga guiden för den här kategorin är kommande. Prova någon av de fullständiga guiderna under Företagsguider.</div><button class="btn btn-primary" data-go="guides">Till guiderna</button></div>`;
    go("guide");
  }
}

// Idea matching
document.getElementById("ideaBtn").onclick = ()=>{
  const text = document.getElementById("ideaInput").value.trim().toLowerCase();
  const out = document.getElementById("ideaResult");
  if(!text){ out.innerHTML = `<div class="match">Skriv gärna en idé först, med dina egna ord.</div>`; return; }
  let best=null, bestScore=0;
  CATS.forEach(c=>{ let s=0; c.kw.forEach(k=>{ if(text.includes(k)) s += k.length; }); if(s>bestScore){bestScore=s;best=c;} });
  if(!best){
    out.innerHTML = `<div class="match"><strong>Jag kunde inte koppla din idé till en kategori ännu.</strong><br>Prova att beskriva vad du ska sälja eller göra, eller bläddra bland kategorierna nedan.</div>`;
    return;
  }
  const hasGuide = !!GUIDES[best.id];
  out.innerHTML = `<div class="match">
    <div class="checked">Vi tror att din idé passar:</div>
    <h3 style="margin:6px 0">${esc(best.name)}</h3>
    <p style="margin:0 0 12px;color:var(--muted)">${esc(best.desc)}</p>
    ${hasGuide?`<button class="btn btn-primary btn-sm" data-cat="${best.id}">Öppna guiden</button>`:`<span class="tag warn">Fullständig guide kommer snart</span>`}
    <p class="checked" style="margin-top:12px">Det här är ett förslag. Kontrollera alltid kraven hos din kommun och ansvarig myndighet.</p>
  </div>`;
};

// Guide rendering
const LINKS = [
  ["verklig huvudman","https://www.bolagsverket.se"],["bolagsverket","https://www.bolagsverket.se"],
  ["aktiekapital","https://www.bolagsverket.se"],["bolagsordning","https://www.bolagsverket.se"],
  ["stiftelseurkund","https://www.bolagsverket.se"],["aktiebolag","https://www.bolagsverket.se"],
  ["f-skatt","https://www.skatteverket.se"],["moms","https://www.skatteverket.se"],
  ["arbetsgivar","https://www.skatteverket.se"],["skatteverket","https://www.skatteverket.se"],
  ["märkning","https://www.livsmedelsverket.se"],["livsmedelsverket","https://www.livsmedelsverket.se"],
  ["livsmedel","https://www.livsmedelsverket.se"],["arbetsmiljö","https://www.av.se"],
  ["transportstyrelsen","https://www.transportstyrelsen.se"],["trafiktillstånd","https://www.transportstyrelsen.se"],
  ["tullverket","https://www.tullverket.se"],["eori","https://www.tullverket.se"],
  ["gdpr","https://www.imy.se"],["imy","https://www.imy.se"],["personuppgift","https://www.imy.se"],
  ["patent","https://www.prv.se"],["varumärke","https://www.prv.se"],
  ["elsäkerhet","https://www.elsakerhetsverket.se"],["fastighetsmäklar","https://www.fmi.se"],
  ["konsumentverket","https://www.konsumentverket.se"],["ångerrätt","https://www.konsumentverket.se"],
  ["registrer","https://www.verksamt.se"],["anmälan","https://www.verksamt.se"],["bygglov","https://www.verksamt.se"],
  ["tillstånd","https://www.verksamt.se"],["kommun","https://www.verksamt.se"],["verksamt","https://www.verksamt.se"]
];
function withLink(text){
  const t = text.toLowerCase();
  const hit = LINKS.find(([k]) => t.includes(k));
  const url = hit ? hit[1] : "https://www.verksamt.se";
  return `<a href="${url}" target="_blank" rel="noopener">${esc(text)}</a>`;
}
function renderGuide(id){
  const g = GUIDES[id];
  if(!g) return;
  document.getElementById("guideBody").innerHTML = `
    <p><a href="#" data-go="guides" style="color:#0369A1;font-weight:600">← Alla företagsguider</a></p>
    <div class="guide-grid">
      <div>
        <h2>${esc(g.title)}</h2>
        <p class="lead">${esc(g.intro)}</p>
        <div class="panel">
          <h3 style="margin-top:0">Krav</h3>
          <ul class="clean">${g.req.map(r=>`<li><span class="${r.k}">${r.k==="mand" ? "Krav" : "Kan krävas"}</span>: ${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${esc(r.t)}</a>` : withLink(r.t)}</li>`).join("")}</ul>
        </div>
        <div class="panel">
          <h3 style="margin-top:0">Viktiga punkter</h3>
          <ol class="steps">${g.steps.slice(0,6).map(x=>`<li>${esc(x)}</li>`).join("")}</ol>
        </div>
        <p class="checked">Planeringsunderlag. Kontrollera alltid hos ansvarig myndighet.</p>
      </div>
      <img class="guide-img" data-guide="${id}" src="./aktiebolag-fb.png" alt="Illustration om aktiebolag">
      
    </div>`;
}

// Budget
function renderBudget(){
  const rows = document.getElementById("budgetRows");
  if(!rows.dataset.built){
    rows.innerHTML = BUDGET_ITEMS.map((n,i)=>`
    <tr><td>${esc(n)}</td><td class="num"><input type="number" min="0" inputmode="numeric" data-b="${i}" placeholder="0"> kr</td></tr>`).join("");
    rows.dataset.built = "1";
  }
  rows.querySelectorAll("input[data-b]").forEach(inp => {
    if(document.activeElement === inp) return;
    const v = budget[inp.dataset.b];
    inp.value = (v === undefined || v === null) ? "" : v;
  });
  updateBudget();
}
function updateBudget(){
  let sum=0;
  BUDGET_ITEMS.forEach((_,i)=>{ sum += Number(budget[i]||0); });
  document.getElementById("budgetTotal").textContent = sum.toLocaleString("sv-SE");
}
document.getElementById("budgetRows").addEventListener("input", e=>{
  const i = e.target.dataset.b;
  if(i===undefined) return;
  budget[i] = e.target.value===""?"":Math.max(0,Number(e.target.value));
  budgetDirty = true; saveBudget(); updateBudget();
});
document.getElementById("budgetReset").onclick = ()=>{ budget={}; saveBudget(); renderBudget(); };

// Projects
let lastProjectsHtml = null;
function renderProjects(){
  const list = document.getElementById("projectList");
  if(!projects.length){
    list.innerHTML = `<div class="empty">Inga projekt ännu. Skapa ett ovan för att börja din checklista.</div>`;
    return;
  }
  const html = projects.map((p,pi)=>{
    const g = GUIDES[p.cat];
    const total = g.steps.length;
    const done = p.progress.filter(x=>x.s==="Klar").length;
    const pct = Math.round(done/total*100);
    return `<div class="panel">
      <div class="row">
        <div><h3 style="margin:0">${esc(p.name)}</h3><div class="checked">${esc(g.title)}</div></div>
        <div class="row" style="gap:8px"><button class="btn btn-primary btn-sm" data-plan="${pi}">Affärsplan</button><button class="btn btn-ghost btn-sm" data-del="${pi}">Ta bort</button></div>
      </div>
      <div class="progress"><div style="width:${pct}%"></div></div>
      <div class="checked">${done} av ${total} steg klara</div>
      <div style="margin-top:12px">${g.steps.map((s,si)=>`
        <div class="chk">
          <input type="checkbox" data-pi="${pi}" data-si="${si}" ${p.progress[si].s==="Klar"?"checked":""}>
          <div class="t">${esc(s)}<br>
            <select class="status" data-pi="${pi}" data-st="${si}">
              ${STATUS.filter(x=>x!=="Klar").map(x=>`<option ${p.progress[si].s===x?"selected":""}>${x}</option>`).join("")}
            </select>
          </div>
        </div>`).join("")}
      </div>
    </div>`;
  }).join("");
  if(html !== lastProjectsHtml){ list.innerHTML = html; lastProjectsHtml = html; }
}
document.getElementById("pSave").onclick = ()=>{
  const name = document.getElementById("pName").value.trim();
  const cat = document.getElementById("pCat").value;
  if(!name){ alert("Ge projektet ett namn."); return; }
  const steps = GUIDES[cat].steps.map(()=>({s:"Ej påbörjad"}));
  if(!db || !uid){ alert("Logga in med ditt Claude-konto för att spara projekt."); return; }
  const id = "p-" + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
  track(userCol().doc(id).set({name, cat, created: Date.now(), progress: steps}))
    .catch(()=>alert("Kunde inte spara projektet. Försök igen."));
  document.getElementById("pName").value="";
};
document.getElementById("projectList").addEventListener("change", e=>{
  const t=e.target;
  if(t.dataset.pi===undefined) return;
  const p = projects[t.dataset.pi];
  if(t.type==="checkbox"){ p.progress[t.dataset.si].s = t.checked?"Klar":"Ej påbörjad"; }
  else if(t.tagName==="SELECT"){ p.progress[t.dataset.st].s = t.value; }
  if(db && uid && p.docId) track(userCol().doc(p.docId).update({progress: p.progress}))
    .catch(()=>alert("Kunde inte spara ändringen."));
  renderProjects();
});
document.getElementById("projectList").addEventListener("click", e=>{
  const d = e.target.closest("[data-del]");
  if(d){
    if(d.dataset.armed !== "1"){ d.dataset.armed = "1"; d.textContent = "Bekräfta borttagning"; return; }
    const del = projects[d.dataset.del];
    if(db && uid && del) track(userCol().doc(del.docId).delete()).catch(()=>{});
  }
});

const PLAN_SECTIONS = [
  ["idea","Affärsidé","Vad erbjuder du, till vem och varför behövs det? Några meningar räcker."],
  ["market","Kunder och marknad","Vem är kunden? Hur stor är efterfrågan i ditt område, och hur vet du det?"],
  ["offer","Produkt eller tjänst","Vad säljer du, i vilka former eller paket, och vad skiljer dig från andra?"],
  ["competition","Konkurrenter","Vilka andra aktörer finns? Vad gör de bra och mindre bra?"],
  ["pricing","Prissättning och intäkter","Hur sätter du priserna? Vilka intäkter räknar du med per månad? Ange antagandena."],
  ["finance","Startkostnader och finansiering","Hur mycket behöver du och hur finansieras det? Eget kapital, lån eller annat?"],
  ["org","Organisation och ansvar","Vem gör vad? Hur många anställda planerar du och när?"],
  ["risks","Risker","Vad kan gå fel, och vad gör du för att minska risken?"],
  ["first90","Första 90 dagarna","Vilka tre till fem viktigaste milstolparna är?"]
];
let planId = null, planDraft = {}, planTimer = null;
function budgetTotal(){ let s = 0; BUDGET_ITEMS.forEach((_,i)=>{ s += Number(budget[i]||0); }); return s; }
function openPlan(docId){
  const p = projects.find(x=>x.docId===docId); if(!p) return;
  planId = docId; planDraft = {...(p.plan||{})};
  const total = budgetTotal();
  document.getElementById("planBody").innerHTML = `
    <p><a href="#" data-go="projects" style="color:#0369A1;font-weight:600">← Mina projekt</a></p>
    <h2>Affärsplan: ${esc(p.name)}</h2>
    <p class="lead">Planeringsunderlag för ${esc((GUIDES[p.cat]||{title:p.name}).title.toLowerCase())}. Det är inte en registrerad eller juridisk handling. Dina svar sparas automatiskt på ditt konto.</p>
    ${total ? `<div class="note">Din startbudget i Startbudget-verktyget är ${total.toLocaleString("sv-SE")} kr. Använd den i avsnittet om startkostnader om den stämmer.</div>` : ""}
    <div class="panel">
      ${PLAN_SECTIONS.map(([k,t,h])=>`
        <h3>${esc(t)}</h3>
        <div class="checked" style="margin-bottom:6px">${esc(h)}</div>
        <textarea data-plan-field="${k}" rows="3" style="width:100%;border:1px solid var(--line);border-radius:12px;padding:12px;font:inherit;color:var(--text)">${esc(planDraft[k]||"")}</textarea>`).join("")}
    </div>
    <div class="panel row">
      <div class="checked">Ändringar sparas automatiskt.</div>
      <div class="row" style="gap:8px">
        <button class="btn btn-ghost btn-sm" id="planDl">Ladda ner som text</button>
        <button class="btn btn-primary btn-sm" id="planPrint">Skriv ut / spara som PDF</button>
      </div>
    </div>`;
  go("plan");
}
function savePlan(){
  if(!planId || !db || !uid) return;
  track(userCol().doc(planId).update({plan: {...planDraft}})).catch(()=>alert("Kunde inte spara affärsplanen. Försök igen."));
}
async function downloadPlan(){
  const p = projects.find(x=>x.docId===planId); if(!p) return;
  let md = `# Affärsplan: ${p.name}\\n\\n${GUIDES[p.cat].title}\\n\\n> Planeringsunderlag. Ingen registrerad eller juridisk handling.\\n\\n`;
  PLAN_SECTIONS.forEach(([k,t])=>{ md += `## ${t}\\n\\n${(planDraft[k]||"").trim() || "(ej ifyllt)"}\\n\\n`; });
  const total = budgetTotal();
  if(total) md += `Startbudget enligt VenturePath: ${total} kr (uppskattning)\\n`;
  const safe = p.name.replace(/[^\\p{L}\\p{N} _-]/gu, "").trim().slice(0, 60) || "projekt";
  try{
    const dl = await cap("downloads");
    if(!dl){ alert("Nedladdning är inte tillgänglig här. Använd Skriv ut / spara som PDF."); return; }
    await dl.save({filename: `affarsplan-${safe}.md`, data: md});
  }catch(e){
    if(e && e.code === "declined") return;
    alert("Kunde inte spara filen. Försök med Skriv ut / spara som PDF.");
  }
}
document.getElementById("planBody").addEventListener("input", e=>{
  const f = e.target.dataset.planField; if(!f) return;
  planDraft[f] = e.target.value;
  clearTimeout(planTimer);
  planTimer = setTimeout(()=>{ planTimer = null; savePlan(); }, 800);
});
document.getElementById("planBody").addEventListener("click", e=>{
  if(e.target.id === "planDl") downloadPlan();
  if(e.target.id === "planPrint") window.print();
});
document.getElementById("projectList").addEventListener("click", e=>{
  const b = e.target.closest("[data-plan]");
  if(b){ const p = projects[b.dataset.plan]; if(p) openPlan(p.docId); }
});

const AI_RULES = `Du är VenturePaths företagsassistent. Du hjälper användare att förstå hur de startar ett företag i Sverige.

Regler:
- Svara på svenska, enkelt och steg för steg. Håll svaren korta, cirka 150–250 ord, om inte användaren ber om mer.
- Hitta aldrig på tillstånd, blanketter, avgifter, belopp, lagar, myndighetskrav eller länkar. Om du inte är säker, säg det och hänvisa till ansvarig myndighet.
- Skilj tydligt mellan lagkrav, rekommendationer och uppskattningar.
- Du är inte juridisk, skattemässig eller annan reglerad rådgivare. Säg det när frågan kräver sådan rådgivning.
- Hänvisa bara till dessa officiella källor: verksamt.se, bolagsverket.se, skatteverket.se, livsmedelsverket.se, konsumentverket.se och imy.se.
- Bekräfta aldrig att användaren är registrerad, godkänd eller har ett tillstånd.
- Om ett projekt är valt, utgå från dess status och föreslå nästa steg som ännu inte är klart.`;
const CHIPS = [
  "Jag vill starta en restaurang i Helsingborg men har begränsad budget. Var börjar jag?",
  "Hur startar jag ett aktiebolag?",
  "Vilka tillstånd behöver jag för att sälja mat?",
  "Hur mycket pengar behöver jag för att öppna en liten butik?",
  "Jag har redan registrerat mitt företag. Vad ska jag göra nu?",
  "Kan du förklara vad F-skatt betyder på ett enkelt sätt?"
];
const AI_MSG = {
  not_granted: "Du behöver tillåta att Claude svarar i den här sidan för att använda assistenten.",
  rate_limited: "Det kommer många frågor just nu. Vänta en stund och försök igen.",
  cancelled: "Svaret stoppades."
};
let sampleFn = null, aiTurns = [], aiCtl = null;
cap("sample").then(s=>{ sampleFn = s; if(!s) document.getElementById("aiUnavail").style.display = "block"; });

function populateAi(){
  const sel = document.getElementById("aiProject");
  const cur = sel.value;
  sel.innerHTML = `<option value="">Inget projekt</option>` + projects.map(p=>`<option value="${esc(p.docId)}">${esc(p.name)}</option>`).join("");
  sel.value = cur;
  document.getElementById("aiChips").innerHTML = CHIPS.map((c,i)=>`<button class="btn btn-ghost btn-sm" data-chip="${i}">${esc(c)}</button>`).join("");
}
function aiContext(){
  const p = projects.find(x=>x.docId === document.getElementById("aiProject").value);
  if(!p) return "Användaren har inte valt något projekt.";
  const g = GUIDES[p.cat];
  const steps = g.steps.map((s,i)=>`${i+1}. ${s} – ${(p.progress[i] && p.progress[i].s) || "Ej påbörjad"}`).join("\n");
  return `Valt projekt: ${p.name} (${g.title}).\nStatus per steg:\n${steps}`;
}
function addMsg(role, text){
  const wrap = document.getElementById("aiChat");
  const b = document.createElement("div");
  b.style.cssText = `align-self:${role==="user"?"flex-end":"flex-start"};max-width:85%;padding:12px 14px;border-radius:14px;white-space:pre-wrap;` + (role==="user" ? "background:#E6FBF8;" : "background:#fff;border:1px solid var(--line);");
  b.textContent = text;
  wrap.appendChild(b);
  wrap.scrollTop = wrap.scrollHeight;
  return b;
}
function localAnswer(q){
  const t = q.toLowerCase();
  const terms = Object.keys(GLOSS).filter(k => t.includes(k));
  let best = null, bestScore = 0;
  CATS.forEach(c => {
    if(!GUIDES[c.id]) return;
    const score = c.kw.reduce((sum, k) => sum + (t.includes(k) ? k.length : 0), 0);
    if(score > bestScore){ bestScore = score; best = c; }
  });
  let out = "";
  if(terms.length){ out += terms.map(k => k + ": " + GLOSS[k]).join("\n") + "\n\n"; }
  if(best){
    const g = GUIDES[best.id];
    out += g.title + ". Viktiga steg:\n" + g.steps.slice(0,5).map((x,i) => (i+1) + ". " + x).join("\n") + "\n\nDen fullständiga guiden hittar du under Företagsguider.";
  }
  if(!out) out = "Jag hittar inget svar på det just nu. Skriv vad du vill starta, till exempel restaurang eller aktiebolag, så visar jag stegen. Du kan också läsa guiderna under Företagsguider.";
  return out;
}
async function askAI(question){
  const q = question.trim();
  if(!q || aiCtl) return;
  document.getElementById("aiInput").value = "";
  if(!sampleFn){ addMsg("user", q); addMsg("assistant", localAnswer(q)); return; }
  addMsg("user", q);
  aiTurns.push({role:"user", content:q});
  let hist = aiTurns.slice(-10);
  while(hist.length && hist[0].role !== "user") hist = hist.slice(1);
  const ctx = aiContext();
  const turns = hist.map((t,i)=> i===0 && t.role==="user" ? {role:"user", content: AI_RULES + "\n\n" + ctx + "\n\nFråga: " + t.content} : t);
  const bubble = addMsg("assistant", "Tänker …");
  const stop = document.getElementById("aiStop"), send = document.getElementById("aiSend");
  aiCtl = new AbortController(); stop.style.display = "inline-block"; send.disabled = true;
  try{
    const res = await sampleFn(turns, {cache:false, signal: aiCtl.signal, onText: ({text})=>{ bubble.textContent = text; }});
    bubble.textContent = res.text;
    aiTurns.push({role:"assistant", content: res.text});
  }catch(e){
    const partial = e && e.text ? e.text : "";
    if(partial){ bubble.textContent = partial; aiTurns.push({role:"assistant", content: partial}); }
    else { bubble.remove(); aiTurns.pop(); addMsg("assistant", AI_MSG[e && e.code] || localAnswer(q)); }
  }finally{
    aiCtl = null; stop.style.display = "none"; send.disabled = false;
  }
}
document.getElementById("aiSend").onclick = ()=> askAI(document.getElementById("aiInput").value);
document.getElementById("aiInput").addEventListener("keydown", e=>{
  if(e.key === "Enter" && !e.shiftKey){ e.preventDefault(); askAI(e.target.value); }
});
document.getElementById("aiStop").onclick = ()=>{ if(aiCtl) aiCtl.abort(); };
document.getElementById("aiChips").addEventListener("click", e=>{
  const b = e.target.closest("[data-chip]");
  if(b) askAI(CHIPS[b.dataset.chip]);
});

let selectedPlan = null;
document.getElementById("page-premium").addEventListener("click", e => {
  const b = e.target.closest("[data-plan]");
  if(!b) return;
  selectedPlan = b.dataset.plan;
  const name = selectedPlan === "pro" ? "Pro" : "Business";
  document.getElementById("planMsg").textContent = "Du valde " + name + ". Betalning är inte aktiverad än, så ingen debitering sker. Anmäl intresse nedan så får du besked när den öppnar.";
  document.getElementById("interestBox").scrollIntoView({behavior: "smooth", block: "center"});
});
document.getElementById("interestBtn").onclick = async ()=>{
  const msg = document.getElementById("interestMsg");
  if(!db || !uid){ msg.textContent = "Logga in med ditt Claude-konto för att anmäla intresse."; return; }
  msg.textContent = "Sparar …";
  try{
    await userCol().doc("interest").set({premium: true, plan: selectedPlan || "ej valt", updated: Date.now()});
    msg.textContent = "Tack! Vi har sparat ditt intresse.";
  }catch(e){
    msg.textContent = "Kunde inte spara. Försök igen.";
  }
};


const GLOSS = {
  "f-skatt": "Godkännande från Skatteverket som innebär att du själv ansvarar för att betala skatt och egenavgifter på det du fakturerar.",
  "moms": "Mervärdesskatt på varor och tjänster. Företag som säljer för mer än en viss nivå måste registrera sig för moms. Kontrollera gränsen hos Skatteverket.",
  "aktiekapital": "Pengar som ägarna satsar i bolaget. Enligt aktuella källor krävs minst 25 000 kr. Pengarna tillhör bolaget.",
  "bolagsordning": "Ett dokument som beskriver bolagets grundläggande regler, till exempel namn och verksamhet.",
  "stiftelseurkund": "Ett dokument där grundarna skriver under att de bildar bolaget.",
  "verklig huvudman": "Den fysiska person som i slutänden äger eller kontrollerar bolaget. Anmäls till Bolagsverket inom fyra veckor.",
  "egenkontroll": "Ett skriftligt system där du visar hur du arbetar med hygien och livsmedelssäkerhet.",
  "bokföring": "Den systematiska registreringen av alla affärshändelser, till exempel inköp och försäljning.",
  "årsredovisning": "Bolagets årliga redovisning av resultat och ekonomiska läge.",
  "arbetsgivare": "Registrering hos Skatteverket som krävs när du betalar ut ersättning för arbete till någon som inte är godkänd för F-skatt, till exempel en anställd.",
  "ångerrätt": "Kundens rätt att ångra ett köp som gjorts på distans, till exempel på nätet, inom 14 dagar.",
  "gdpr": "EU:s regler för hur personuppgifter får samlas in och användas.",
  "spårbarhet": "Möjligheten att följa en produkt från råvara till kund.",
  "kylkedja": "Att livsmedel hålls kalla hela vägen, från tillverkning till kund.",
  "deposition": "Pengar som hyresvärden tar in som säkerhet och som normalt betalas tillbaka när hyresavtalet upphör.",
  "enskild firma": "Företagsform där du själv är ansvarig för företaget, med hela din privata ekonomi."
};
const STEP_HINT_TERMS = Object.keys(GLOSS);
let stepGuide = null;
const stepIdx = {}, stepDone = {};
function glossHtml(text){
  const t = text.toLowerCase();
  const hits = STEP_HINT_TERMS.filter(k => t.includes(k));
  if(!hits.length) return "";
  return `<div class="note"><strong>Det här betyder orden</strong><ul class="clean">${hits.map(k=>`<li><strong>${esc(k)}:</strong> ${esc(GLOSS[k])}</li>`).join("")}</ul></div>`;
}
function renderStepper(id){
  const g = GUIDES[id]; if(!g) return;
  stepGuide = id;
  const n = g.steps.length;
  const i = Math.min(stepIdx[id] || 0, n);
  stepIdx[id] = i;
  stepDone[id] = stepDone[id] || {};
  const top = `<p><a href="#" data-go="guides" style="color:#0369A1;font-weight:600">← Alla kategorier</a></p><h2>${esc(g.title)}</h2>`;
  const body = document.getElementById("guideBody");
  if(i < n){
    const next = i+1 < n ? esc(g.steps[i+1]) : "Sammanfattning";
    body.innerHTML = `${top}
      <div class="checked">Steg ${i+1} av ${n}</div>
      <div class="progress"><div style="width:${Math.round(i/n*100)}%"></div></div>
      <div class="panel">
        <h3 style="margin-top:0;font-size:1.3rem">${esc(g.steps[i])}</h3>
        ${glossHtml(g.steps[i])}
        <div class="row" style="margin-top:18px;justify-content:flex-start;gap:10px">
          <button class="btn btn-ghost" data-stepnav="-1" ${i===0 ? "disabled" : ""}>Tillbaka</button>
          <button class="btn btn-primary" data-stepnav="1">${i===n-1 ? "Till sammanfattningen" : "Klar, nästa steg"}</button>
        </div>
      </div>
      <p class="checked">Nästa steg: ${next}</p>`;
  } else {
    body.innerHTML = `${top}
      <div class="progress"><div style="width:100%"></div></div>
      <div class="panel">
        <h3 style="margin-top:0">Bra jobbat! Du har gått igenom alla ${n} steg.</h3>
        <p>Nu samlar du in det som behövs och kontaktar rätt myndighet. S.E.S.M skickar inget åt dig.</p>
        <h3>Tillstånd och registreringar</h3>
        <ul class="clean">${g.req.map(r=>`<li><span class="${r.k}">${r.k==="mand" ? "Krav" : "Kan krävas"}</span>: ${esc(r.t)}<br><small class="checked">${esc(r.note)}</small></li>`).join("")}</ul>
        <h3>Vem kontaktar du?</h3>
        <ul class="clean">${g.authorities.map(a=>`<li>${esc(a)}</li>`).join("")}</ul>
        <h3>Officiella länkar</h3>
        <ul class="clean links">${g.links.map(l=>`<li><a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])}</a></li>`).join("")}</ul>
      </div>
      <div class="row" style="gap:10px;justify-content:flex-start">
        <button class="btn btn-primary" data-savecat="${id}">Spara min plan</button>
        <button class="btn btn-ghost" data-stepnav="-1">Tillbaka till stegen</button>
        <button class="btn btn-ghost" data-restart="1">Börja om</button>
        <button class="btn btn-ghost" data-fullguide="${id}">Hela guiden</button>
      </div>
      <p class="checked" id="saveMsg"></p>`;
  }
}
function saveCategoryPlan(id){
  const g = GUIDES[id];
  if(!db || !uid){ alert("Logga in med ditt Claude-konto för att spara din plan."); return; }
  const progress = g.steps.map((_,i)=>({s: stepDone[id] && stepDone[id][i] ? "Klar" : "Ej påbörjad"}));
  const pid = "p-" + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
  track(userCol().doc(pid).set({name: g.title, cat: id, created: Date.now(), progress}))
    .then(()=>{ const m = document.getElementById("saveMsg"); if(m) m.textContent = "Sparad under Mina projekt."; })
    .catch(()=>alert("Kunde inte spara planen. Försök igen."));
}
document.getElementById("guideBody").addEventListener("click", e=>{
  const t = e.target.closest("[data-stepnav],[data-restart],[data-savecat],[data-fullguide]");
  if(!t || !stepGuide) return;
  const id = stepGuide;
  if(t.dataset.stepnav !== undefined){
    const n = GUIDES[id].steps.length;
    const cur = stepIdx[id] || 0;
    const d = Number(t.dataset.stepnav);
    if(d > 0) stepDone[id][cur] = true;
    stepIdx[id] = Math.max(0, Math.min(n, cur + d));
    renderStepper(id);
  } else if(t.dataset.restart !== undefined){
    stepIdx[id] = 0; renderStepper(id);
  } else if(t.dataset.fullguide){
    renderGuide(t.dataset.fullguide);
  } else if(t.dataset.savecat){
    saveCategoryPlan(t.dataset.savecat);
  }
});
document.addEventListener("click", e=>{
  if(!e.target.closest("[data-scroll-cats]")) return;
  const onHome = document.getElementById("page-home").classList.contains("on");
  if(!onHome){ go("home"); setTimeout(()=>document.getElementById("cats").scrollIntoView({behavior:"smooth"}), 60); }
  else document.getElementById("cats").scrollIntoView({behavior:"smooth"});
});
document.addEventListener("click", e=>{
  if(e.target.closest("[data-other]")){
    document.getElementById("ideaInput").focus();
    document.getElementById("ideaBox").scrollIntoView({behavior:"smooth"});
  }
});

const revealIO = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); revealIO.unobserve(en.target); } });
}, {threshold: 0.2});
document.querySelectorAll(".reveal").forEach(el=>revealIO.observe(el));
document.querySelectorAll(".range-pill").forEach(pill => {
  pill.addEventListener("click", e => {
    const b = e.target.closest("button");
    if(!b) return;
    pill.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
  });
});

const tallGrid = document.querySelector(".tallgrid");
if(tallGrid){
  const gridIO = new IntersectionObserver(es=>{
    es.forEach(e=>{ e.target.classList.toggle("go", e.isIntersecting); });
  }, {threshold: 0.25});
  gridIO.observe(tallGrid);
}
const boxesEl = document.querySelector(".tallgrid");
const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function fadeBoxes(){
  if(!boxesEl) return;
  if(reduceMotion){ boxesEl.style.opacity = 1; return; }
  const r = boxesEl.getBoundingClientRect();
  const vh = window.innerHeight || 800;
  const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.7)));
  boxesEl.style.opacity = p.toFixed(3);
}
window.addEventListener("scroll", fadeBoxes, {passive: true});
window.addEventListener("resize", fadeBoxes);

const dashEl = document.getElementById("dash");
const DASH_COUNT_MS = 25000;
let dashRaf = null, dashStart = 0, dashLast = 0, dashCountT = 0;
function renderDash(p){
  if(!dashEl) return;
  const line = dashEl.querySelector(".linechart .line");
  if(line) line.style.strokeDashoffset = 100 * (1 - p);
  const dots = dashEl.querySelectorAll(".linechart .dot");
  dots.forEach((d, i) => { d.style.opacity = p > (i + 1) / (dots.length + 1) ? 1 : 0; });
}
function dashLoop(ts){
  if(!dashStart){ dashStart = ts; dashLast = ts; }
  dashCountT = Math.min(DASH_COUNT_MS, dashCountT + (ts - dashLast));
  dashLast = ts;

  const period = 6000;
  const phase = ((ts - dashStart) % period) / period;
  const pp = (1 - Math.cos(2 * Math.PI * phase)) / 2;
  renderDash(pp);
  dashEl.querySelectorAll("[data-count]").forEach(n => { n.textContent = Math.round(pp * Number(n.dataset.count)); });
  dashEl.querySelectorAll(".bar-fill").forEach(bar => { bar.style.width = (pp * Number(bar.dataset.w)) + "%"; });

  dashRaf = requestAnimationFrame(dashLoop);
}
function startDash(){ if(dashRaf) return; dashStart = 0; dashRaf = requestAnimationFrame(dashLoop); }
function stopDash(){ if(dashRaf){ cancelAnimationFrame(dashRaf); dashRaf = null; } }
if(dashEl){
  if(reduceMotion){ renderDash(1); dashEl.querySelectorAll("[data-count]").forEach(n => { n.textContent = n.dataset.count; }); dashEl.querySelectorAll(".bar-fill").forEach(bar => { bar.style.width = bar.dataset.w + "%"; }); }
  else {
    const dashIO = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting) startDash(); else stopDash(); });
    }, {threshold: 0.3});
    dashIO.observe(dashEl);
  }
}


// ---- Contact form ----
(function(){
  const AMNEN = [
    { value: "Starta företag", beskrivning: "Frågor om att komma igång med ditt företag" },
    { value: "Teknisk support", beskrivning: "Problem med inloggning eller plattformen" },
    { value: "Abonnemang och betalning", beskrivning: "Fakturor, planer och betalningar" },
    { value: "Samarbeten och affärsförslag", beskrivning: "Partnerskap och andra förslag" },
    { value: "Annat", beskrivning: "Något som inte passar ovan" },
  ];
  const form = document.getElementById("contactForm");
  if(!form) return;
  const topicSelect = document.getElementById("cFor");
  const topicOptions = form.querySelector(".kv5__val");
  AMNEN.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic.value;
    option.textContent = topic.value;
    topicSelect.appendChild(option);

    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "kv5-amne";
    radio.value = topic.value;
    const optionContent = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = topic.value;
    const description = document.createElement("em");
    description.textContent = topic.beskrivning;
    optionContent.append(title, description);
    label.append(radio, optionContent);
    topicOptions.appendChild(label);
  });
  const loadedAt = Date.now();
  let lastSentAt = 0;
  const btn = document.getElementById("cSend");
  const status = document.getElementById("cStatus");
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function setErr(id, msg){
    const el = document.getElementById(id);
    el.classList.toggle("bad", !!msg);
    document.getElementById(id + "Err").textContent = msg || "";
  }
  function showStatus(kind, text){
    status.className = "cstatus " + kind;
    status.textContent = text;
  }
  function validate(){
    let ok = true;
    const v = {
      sort: document.getElementById("cFor").value,
      name: document.getElementById("cName").value.trim(),
      email: document.getElementById("cEmail").value.trim(),
      subject: document.getElementById("cSubject").value.trim(),
      message: document.getElementById("cMessage").value.trim(),
      privacy: document.getElementById("cPrivacy").checked
    };
    setErr("cFor", v.sort ? "" : "Välj vad ditt ärende gäller."); if(!v.sort) ok = false;
    setErr("cName", v.name.length >= 2 ? "" : "Skriv ditt namn."); if(v.name.length < 2) ok = false;
    setErr("cEmail", EMAIL.test(v.email) ? "" : "Skriv en giltig e-postadress, till exempel namn@exempel.se."); if(!EMAIL.test(v.email)) ok = false;
    setErr("cSubject", v.subject.length >= 3 ? "" : "Skriv ett kort ämne, minst tre tecken."); if(v.subject.length < 3) ok = false;
    setErr("cMessage", v.message.length >= 10 ? "" : "Skriv ditt meddelande, minst tio tecken."); if(v.message.length < 10) ok = false;
    setErr("cPrivacy", v.privacy ? "" : "Du behöver godkänna att vi använder uppgifterna."); if(!v.privacy) ok = false;
    return ok ? v : null;
  }
  ["cFor","cName","cEmail","cSubject","cMessage","cPrivacy"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => validate());
    document.getElementById(id).addEventListener("change", () => validate());
  });
  form.querySelectorAll(".kv5__val input").forEach(radio => {
    radio.addEventListener("change", () => {
      document.getElementById("cFor").value = radio.value;
      validate();
    });
  });
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "cstatus"; status.textContent = "";
    const v = validate();
    if(!v) { showStatus("err", "Kontrollera de markerade fälten och försök igen."); return; }
    // spam checks: hidden field filled in, form sent too fast, or sent again too soon
    if(form.website.value) { form.reset(); showStatus("ok", "Tack! Ditt meddelande har tagits emot."); return; }
    if(Date.now() - loadedAt < 3000) { showStatus("err", "Vänta några sekunder och försök igen."); return; }
    if(Date.now() - lastSentAt < 30000) { showStatus("err", "Vänta en halv minut mellan meddelanden."); return; }
    if(!db || !uid) { showStatus("err", "Meddelandet kunde inte sparas just nu. Logga in med ditt Claude-konto och försök igen."); return; }
    btn.disabled = true; btn.classList.add("loading");
    btn.innerHTML = '<span class="spin"></span>Skickar …';
    try {
      const id = "m-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      await db.collection("contact").doc(id).set({
        topic: v.sort, name: v.name, email: v.email, subject: v.subject,
        message: v.message, created: Date.now()
      });
      lastSentAt = Date.now();
      form.reset();
      ["cFor","cName","cEmail","cSubject","cMessage","cPrivacy"].forEach(x => { document.getElementById(x).classList.remove("bad"); document.getElementById(x + "Err").textContent = ""; });
      showStatus("ok", "Tack! Ditt meddelande har tagits emot och sparats.");
    } catch(err) {
      showStatus("err", "Meddelandet kunde inte sparas. Försök igen om en stund.");
    } finally {
      btn.disabled = false; btn.classList.remove("loading");
      btn.textContent = "Skicka meddelande";
    }
  });
})();

function renderAccount(){
  const el = document.getElementById("accStatus");
  if(!el) return;
  el.textContent = (db && uid)
    ? "Du är inloggad med ditt Claude-konto. Dina uppgifter sparas privat på kontot."
    : "Du är inte inloggad. Logga in med ditt Claude-konto för att spara projekt, budget och meddelanden.";
}

renderBudget();
renderProjects();
go("home");
fadeBoxes();
initAccount();
window.addEventListener("pagehide", ()=>{
  if(budgetTimer && db && uid){ clearTimeout(budgetTimer); budgetTimer = null; userCol().doc("budget").set({values: budget}); }
});
