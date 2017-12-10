const listOfQuestions =  [
    {
      question : "Welke protocol gebruikt HTTP als onderliggend transportprotocol?",
      answer: ["TCP"]
    },
    {
      question : "Waar staat de afkorting HTTP voor?",
      answer: ["HyperText Transfer Protocol"]
    },
    {
      question: "Waar staat de afkorting ISP voor?",
      answer: ["Internet Service Provider"]
    },
    {
      question: "Waar staat de afkorting HFC voor?",
      answer: ["Hybrid fibre-coaxial", "Hybrid fibre coaxial", "Hybrid fiber-coaxial", "Hybrid fiber coaxial"]
    },
    {
      question: "Waar staat de afkorting DNS voor?",
      answer:["Domain Name System"]
    },
    {
      question: "Waar staat de afkorting DSL voor?",
      answer: ["Digital subscriber line"]
    },
    {
      question: "Waar staat de afkorting IP voor?",
      answer: ["Internet Protocol"]
    },
    {
      question: "Waar staat de afkorting TCP voor?",
      answer: ["Transmission Control Protocol"]
    },
    {
      question: "Waar staat de afkorting FTP voor?",
      answer: ["File Transfer Protocol"]
    },
    {
      question: "Waar staat de afkorting P2P voor?",
      answer: ["Peer-to-peer"]
    },
    {
      question: "Waar staat de afkorting FDM voor?",
      answer:["Frequency-division multiplexing"]
    },
    {
      question: "Waar staat de afkorting LAN voor?",
      answer: ["Local area network"]
    },
    {
      question: "Waar staat de afkorting DHCP voor?",
      answer: ["Dynamic Host Configuration Protocol"]
    },
    {
      question: "Waar staat de afkorting API voor?",
      answer: ["Application Programming Interface"]
    },
    {
      question: "Waar staat de afkorting FTTH voor?",
      answer: ["Fiber-to-the-home"]
    },
    {
      question: "Waar staat de afkorting UDP voor?",
      answer: ["User Datagram Protocol"]
    },
    {
      question: "Waar staat de afkorting FM voor?",
      answer: ["Frequentiemodulatie", "frequency modulation"]
    },
    {
      question: "Waar staat de afkorting SMTP voor?",
      answer:["Simple Mail Transfer Protocol"]
    },
    {
      question: "Waar staat de afkorting RFC voor?",
      answer: ["Request for Comments"]
    },
    {
      question: "Waar staat de afkorting WWW voor?",
      answer: ["World Wide Web"]
    },
    {
      question: "Waar staat de afkorting URL voor?",
      answer: ["Uniform resource locator"]
    },
    {
      question: "Waar staat de afkorting HTML voor?",
      answer: ["Hypertext Markup Language"]
    },
    {
      question: "Waar staat de afkorting URI voor?",
      answer: ["Uniform resource identifier"]
    },
    {
      question: "Waar staat de afkorting RTT voor?",
      answer: ["Round-triptijd"]
    },
    {
      question: "Waar staat de afkorting ASCII voor?",
      answer:["American Standard Code for Information Interchange"]
    },
    {
      question: "Waar staat de afkorting CDN voor?",
      answer: ["content distribution network", "Content delivery network"]
    },
    {
      question:"Waar staat de afkorting MTU voor?",
      answer:["Maximum transmission unit"]
    },
    {
      question: "Waar staat de afkorting PPP voor?",
      answer: ["Point-to-Point Protocol"]
    },
    {
      question: "Waar staat de afkorting FSM voor?",
      answer: ["Finite-state machine"]
    },
    {
      question: "Waar staat de afkorting EWMA voor?",
      answer: ["Exponential weighted moving average"]
    },
    {
      question: "Waar staat de afkorting ABR voor?",
      answer: ["Available bit-rate"]
    },
    {
      question: "Waar staat de afkorting ATM voor?",
      answer: ["Asychronous transfer mode"]
    },
    {
      question: "Waar staat de afkorting NAT voor?",
      answer: ["Network Adress Translation"]
    },
    {
      question: "Waar staat de afkorting ICMP voor?",
      answer: ["Internet Control Message Protocol"]
    },
    {
      question: "Waar staat de afkorting VC voor?",
      answer: ["virtueelcircuit"]
    },
    {
      question: "Wat is de subnetmask van een netwerk met de prefix 27",
      answer:["255.255.255.224"]
    },
    {
      question: "Hoe heet de tijd die nodig is om de header van een pakket te beoordelen en te bepalen waarheen het pakket moet worden verzonden?",
      answer: ["Processing delay"]
    },
    {
      question: "Hoe wordt een apparaat dat verbonden is aan het internet genoemd?",
      answer: ["Host", "Eindsysteem"]
    },
    {
      question: "Hoeveel lagen heeft het TCP/IP model?",
      answer: ["Vijf", "5"]
    },
    {
      question: "Hoeveel lagen heeft het OSI-model?",
      answer: ["Zeven", "7"]
    },
    {
      question: "Hoe heet de onderste laag?",
      answer: ["Fysiekelaag", "Fysieke"]
    },
    {
      question: "Hoe heet de bovenste laag?",
      answer: ["Applicatielaag", "Applicatie"]
    },
    {
      question: "Hoe heet de laag boven de fysiekelaag?",
      answer: ["Datalinklaag", "Datalink"]
    },
    {
      question: "Hoe heet de laag boven de fysiekelaag?",
      answer: ["Datalinklaag", "Datalink"]
    },
    {
      question: "Hoe heet de laag onder de datalinklaag?",
      answer: ["Fysiekelaag", "Fysieke"]
    },
    {
      question: "Hoe heet de laag boven de datalinklaag?",
      answer: ["Netwerklaag", "Netwerk"]
    },
    {
      question: "Hoe heet de laag onder de transportlaag?",
      answer: ["Netwerklaag", "Netwerk"]
    },
    {
      question: "Hoe noemen we een pakket met informatie op de applicatielaag?",
      answer: ["Message", "Bericht"]
    },
    {
      question: "Hoe wordt een pakket op de transportlaag genoemd?",
      answer:["Segment"]
    },
    {
      question: "Hoe wordt een pakket op de netwerklaag genoemd?",
      answer: ["Datagram"]
    },
    {
      question: "Hoe wordt een pakket op de datalinklaag genoemd?",
      answer: ["Frame"]
    },
    {
      question: "Hoe wordt de totale hoeveelheid vetraging genoemd?",
      answer: ["Nodal delay"]
    },
    {
      question: "Waaruit bestaat een webpagina?",
      answer: ["Objecten"]
    },
    {
      question: "Noem één van de dominante netwerkapplicatie structuren.",
      answer: ["Client-serverstructuur", "P2P-structuur"]
    },
    {
      question: "Noem één van de belangrijkste protocollen voor het internet.",
      answer: ["Transmission Control Protocol", "IP", "TCP", "Internet Protocol"]
    },
    {
      question: "Kan een applicatie in de core van een netwerk uitgevoerd worden?",
      answer: ["Nee"]
    },
    {
      question: "Hoe heet de host die een bestand ophaalt bij een andere host?",
      answer: ["Client"]
    },
    {
      question: "Hoe heet de host die een bestand verzend naar een andere host?",
      answer: ["Server"]
    },
    {
      question: "Via wat krijgt een host toegang tot het internet?",
      answer: ["Internet Service Provider", "ISP"]
    },
    {
      question: "Welke netwerkapplicatie structuur gebruikt BitTorrent?",
      answer: ["P2P-structuur"]
    },
    {
      question: "Welke netwerkapplicatie structuur gebruikt een webapplicatie?",
      answer: ["`Client-serverstructuur"]
    },
    {
      question: "Welke host staat altijd aan?",
      answer: ["Server"]
    },
    {
      question: "Welke host dient een verzoek in bij een andere host?",
      answer: ["Client"]
    },
    {
      question: "Wat heeft een server altijd?",
      answer: ["IP-adres"]
    },


]
