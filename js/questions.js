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
      answer: ["Client-serverstructuur"]
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
    {
      question: "Noem een transportlaag protocol",
      answer: ["TCP", "Transmission Control Protocol"]
    },
    {
      question: "Bij welke laag hoort de TCP?",
      answer: ["Transportlaag", "Transport"]
    },
    {
      question: "Bij welke laag hoort de Internet Protocol?",
      answer: ["Netwerklaag", "Netwerk"]
    },
    {
      question: "Met wat wordt een host aangeduid?",
      answer: ["IP-adres"]
    },
    {
      question: "Is een IP-adres uniek?",
      answer: ["Ja"]
    },
    {
      question: "Welke poortnummer gebruikt een webserver?",
      answer: ["80"]
    },
    {
      question: "Met welke poortnummer werkt een emailserver dat gebruik maakt van SMTP?",
      answer: ["25"]
    },
    {
      question: "Waar zijn de protocollen, die gratis gebruikt kunnen worden, vastgesteld?",
      answer: ["RFC", "Request for Comments"]
    },
    {
      question: "URL is een speciale vorm van wat?",
      answer: ["URI"]
    },
    {
      question: "Uit hoeveel objecten bestaat een webpagina die een HTML-tekst en vijf JPEG-afbeeldingen bevat?",
      answer: ["6", "Zes"]
    },
    {
      question: "Met behulp van wat zijn alle objecten die op een webserver staan adresseerbaar?",
      answer: ["URL"]
    },
    {
      question: "Wat is Apache?",
      answer: ["Webserver"]
    },
    {
      question: "Wat is Microsoft Internet Information Server?",
      answer: ["Webserver"]
    },
    {
      question: "Welke protocol gebruikt HTTP als onderliggend transportprotocol?",
      answer: ["Transmission Control Protocol", "TCP"]
    },
    {
      question: "Welke transportprotocol op het internet levert de dienst doorvoercapaciteit?",
      answer: ["Geen"]
    },
    {
      question: "Welke transportprotocol op het internet levert de dienst timing?",
      answer: ["Geen"]
    },
    {
      question: "Welke transportprotocol levert de dienst betrouwbare gegevensoverdracht?",
      answer: ["Transmission Control Protocol", "TCP"]
    },
    {
      question: "Hoe heet de verbinding waaarbij de server de TCP-verbinding intact laat nadat hij een respons heeft verzonden?",
      answer: ["persistente verbinding"]
    },
    {
      question: "Hoe heet de eerste regel van een HTTP-bericht?",
      answer: ["requestregel"]
    },
    {
      question: "Hoe heten de regels na de requestregel?",
      answer: ["headerregels"]
    },
    {
      question: "Welke waarde gebruik je voor de methodeveld als je een object wilt opvragen?",
      answer: ["GET"]
    },
    {
      question: "Welke waarde gebruik je om een HTTP-bericht terug te krijgen zonder de gevraagde object?",
      answer: ["HEAD"]
    },
    {
      question: "Met welke methode kan je een object naar een webserver uploaden?",
      answer: ["PUT"]
    },
    {
      question: "Met welke methode kan je een object op een webserver wissen?",
      answer: ["DELETE"]
    },
    {
      question: "Welke component van een HTTP-antwoordbericht bevat de opgevraagde object?",
      answer: ["Entity body"]
    },
    {
      question: "Welk getal geeft aan dat een DSN-bericht een antwoord is?",
      answer: ["1"]
    },
    {
      question: "Welk getal geeft aan dat een DSN-bericht een verzoek is?",
      answer: ["0"]
    },
    {
      question: "Wat voert een TCP uit wanneer er een driedubbel ACK-bericht arriveert?",
      answer: ["Fast retransmit"]
    },
    {
      question: "Hoe heet de variable die er voor zorgt dat de verzender een indicatie van de beschikbare ruimte in de buffer van de ontvanger krijgt?",
      answer: ["Receivewindow"]
    },
    {
      question: "Hoe heet de informatie over de belasting van het netwerk die naar de verzender wordt verzonden?",
      answer: ["choke-packet"]
    },
    {
      question: "Hoe worden computernetwerken die alleen een connectiondienst op de netwerklaag leveren genoemd?",
      answer: ["virtueelcircuitnetwerken"]
    },
    {
      question: "Hoe worden computernetwerken die alleen een connectionless dient op de netwerklaag leveren genoemd?",
      answer: ["datagramnetwerken"]
    },
    {
      question: "Welke IP versie gebruikt een 32 bit adres?",
      answer: ["IPv4"]
    },
    {
      question: "Welke IP versie gebruikt een 128 bit adres?",
      answer: ["IPv6"]
    },
    {
      question: "Waar staat de afkorting TOS voor?",
      answer: ["Type of service", "Type-of-service"]
    },
    {
      question: "Uit hoeveel bits bestaat het versienummerveld van het IPv4-datagram?",
      answer: ["4", "Vier"]
    },
    {
      question: "Met welke veld kan IPv4 bepalen waar de gegevens in het datagram beginnen?",
      answer: ["Headerlengteveld"]
    },
    {
      question: "Uit hoeveel bits bestaat het het headerlengteveld?",
      answer: ["4", "Vier"]
    },
    {
      question: "Met welke veld kan het datagram verschillende 'types' IP-datagram van elkaar onderscheiden",
      answer: ["Type of service", "type-of-service"]
    },
    {
      question: "Welke veld geeft de totale lengte van het ip-datagram aan?",
      answer: ["datagramlengteveld"]
    },
    {
      question: "Uit hoeveel bits bestaat het datagramlengteveld?",
      answer: ["16", "Zestien"]
    },
    {
      question: "Waar staat de afkorting TTL voor?",
      answer: ["Time-to-live"]
    },
    {
      question: "Welke voorkomt dat een datagram eindeloos in het netwerk kan blijven rondzweven",
      answer: ["TTL-veld"]
    },
    {
      question: "Aan welke transport protocol wordt een pakket overhandigd als het protocol veld de waarde 6 heeft?",
      answer: ["TCP"]
    },
    {
      question: "Aan welke transport protocol wordt een pakket overhandigd als het protocol veld de waarde 17 heeft?",
      answer: ["UDP"]
    },
    {
      question: "Met welke veld kan de router fouten in een onvangen datagram detecteren?",
      answer: ["Headerchecksum"]
    },
    {
      question: "Waar staat de afkorting ICANN voor?",
      answer: ["Internet Corporation for Assigned Names and Numbers"]
    },
    {
      question: "Waar staat de afkorting CIDR voor?",
      answer: ["classless interdomain routing"]
    },
    {
      question: "Noem een plug-and-playprotocol",
      answer: ["DHCP"]
    },
    {
      question: "Waar staat de afkorting IETF voor?",
      answer : "Internet Engineering Task Force"
    },
    {
      question: "Maakt IPv6 gebruik van fragmentatie",
      answer: ["Nee"]
    },
    {
      question: "Heeft IPv6 een headerchecksum veld?",
      answer: ["Nee"]
    },
    {
      question: "Welke protocol gebruikt het Packet Too Big type?",
      answer: ["ICMPv6"]
    },
    {
      question: "Waar staat de afkorting IGMP voor?",
      answer: ["Internet Group Management Protocol"]
    },
    {
      question: "Waar staat de afkorting VPN voor?",
      answer: ["Virtual Private Network"]
    },
    {
      question: "Noem een beveiligde IP.",
      answer: ["IPsec"]
    },



]
