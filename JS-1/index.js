
// Užduotis 1

const AutoInf = ["Audi", "A4", "2021", "Dyzelinas"]
  
  let isvedimas = 
  "<p>Markė: " + AutoInf[0] + "</p>" +
  "<p>Modelis: " + AutoInf[1] + "</p>" +
  "<p>Metai: " + AutoInf[2] + "</p>" +
  "<p>Kuro tipas: " + AutoInf[3] + "</p>";

document.getElementById("isvedimas").innerHTML = isvedimas; // easy peasy lemon squezy


// Užduotis 2
const Contacts = ["Ignas",
                  "Staskevicius",
                  "wababab@gmail.com",
                  "8617090701",
                  "Rajono g. 901",
                  "12331",
                  "Per daug protingas"]
  
  let isvedimas1 = 
  "<p>Vartas: " + Contacts[0] + " "
  + Contacts[1] + "</p>" +
  "<p>Email: " + Contacts[2] + "</p>" +
  "<p>Tlf. Numeris: " + Contacts[3] + "</p>" +
  "<p>Adresas: " + Contacts[4] + "</p>" +
  "<p>Pasto kodas: " + Contacts[5] + "</p>" +
  "<p>Komentaras: " + Contacts[6] + "</p>";

document.getElementById("spec").innerHTML = isvedimas1; // easy peasy lemon squezy
// Užduotis 3.1
// Pabandziau pazaisti su masyvu pazaist vat ka gavau.
const Contacts1 = {
    Vardas: ["Ignas", "Antanas", "Karuna"],
    Pavarde: ["Staskevicius", "Barunas", "Antanauskas"],
    Email: ["Antas312@gmail.com", "BKasdta@gmail.com", "wababab@gmail.com"],
    Tlf: ["8701242019", "8617090701", "8463525860"],
    Adresas: ["Rajono g. 901", "Gatves g. 1", "Anekso g. 34"],
    Pasto_Kodas: ["213121", "675754", "574563"],
    Komentaras: ["Protingas", "Normalus", "Durnas"] 
  };
  document.getElementById("Rand").onclick = function() { 
  let Rand = Math.floor(Math.random() * 3);
  let smth = 
  "<p>Vardas: " + Contacts1.Vardas[Rand] + "</p>" +
  "<p>Pavarde: " + Contacts1.Pavarde[Rand] + "</p>" +
  "<p>Email: " + Contacts1.Email[Rand] + "</p>" +
  "<p>Tlf Numeris: " + Contacts1.Tlf[Rand] + "</p>" +
  "<p>Adresas: " + Contacts1.Adresas[Rand] + "</p>" +
  "<p>Pasto Kodas " + Contacts1.Pasto_Kodas[Rand] + "</p>" +
  "<p>Komentaras: " + Contacts1.Komentaras[Rand] + "</p>";
document.getElementById("SHop").innerHTML = smth; // easy peasy lemon squezy
  };
  //Uzduotis 3
  const kontaktai = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    elPastas: "jonas.jonaitis@gmail.com",
    telefonas: "+37061234567",
    adresas: "Kauno g. 123-45",
    pastoKodas: "LT-12345",
    komentaras: "sdasbasgdksagdv"
  };
  
  let kontaktaiHTML = " ";
  if (kontaktai.vardas) {
    kontaktaiHTML += "<p>Vardas: " + kontaktai.vardas + "</p>";
  }
  if (kontaktai.pavarde) {
    kontaktaiHTML += "<p>Pavardė: " + kontaktai.pavarde + "</p>";
  }
  if (kontaktai.elPastas) {
    kontaktaiHTML += "<p>El. pastas: " + kontaktai.elPastas + "</p>";
  }
  if (kontaktai.telefonas) {
    kontaktaiHTML += "<p>Telefonas: " + kontaktai.telefonas + "</p>";
  }
  if (kontaktai.adresas) {
    kontaktaiHTML += "<p>Adresas: " + kontaktai.adresas + "</p>";
  }
  if (kontaktai.pastoKodas) {
    kontaktaiHTML += "<p>Pasto kodas: " + kontaktai.pastoKodas + "</p>";
  }
  if (kontaktai.komentaras) {
    kontaktaiHTML += "<p>Komentaras: " + kontaktai.komentaras + "</p>";
  }
  else {
    kontaktaiHTML += "<p>Komentaras: Komentaro nera</p>";
  }
  
  document.getElementById("Drip").innerHTML = kontaktaiHTML;
  // Uzduotis 4
  const Preke1 = {
    prekes_pavadinimas: "Pringles Sour Cream & Onion",
    kaina: 2.84,
    aprasimas: "the irresistible snack classic in a practical tin - crunchy chips with sour cream and onion flavor - pop. Play. eat",
    img: [
        "https://m.media-amazon.com/images/I/71qRG-JNZkL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81X9ne+EakL._SL1500_.jpg"
    ],
    link: "https://www.amazon.de/-/en/dp/B09RR5FXMK/?_encoding=UTF8&pd_rd_w=RgSuk&content-id=amzn1.sym.1d648a76-95f4-414b-8977-fda7f711035c&pf_rd_p=1d648a76-95f4-414b-8977-fda7f711035c&pf_rd_r=2VE64XC214XY7XN1B5NZ&pd_rd_wg=5XCIp&pd_rd_r=f8a79505-872b-4d7e-b027-f6d21797e207&ref_=pd_gw_trq_ed_k9da0etn",
  };
  let parduotuve = " ";
  if (Preke1.prekes_pavadinimas) {
    parduotuve += "<p>"+ Preke1.prekes_pavadinimas + "</p>";
  }
  if (Preke1.kaina) {
    parduotuve += "<p>" + Preke1.kaina + "€</p>";
  }
  if (Preke1.aprasimas) {
    parduotuve += "<p>" + Preke1.aprasimas + "</p>";
  }
  else{
    parduotuve += "<p> nera aprasimo </p>";
  }
  if (Preke1.img) {
    parduotuve += "<img src='" + Preke1.img[0] + "' alt='Image-test-1' height='200' width='200'>";
    if(Preke1.img[1]){
    parduotuve += "<img src='" + Preke1.img[1] + "' alt='Image-test-1' height='200' width='200'>";
    }
  }
  if (Preke1.link) {
    parduotuve += "<div><a href='" + Preke1.link + "'>" + "Amazon" + "</a></div>";
  }
  document.getElementById("Shop").innerHTML = parduotuve;
  
//5 Uzduotis
const Prekes = [
    {
    pavadinimas: "Pringles Sour Cream & Onion",
    kaina: 2.84,
    aprasima: "the irresistible snack classic in a practical tin - crunchy chips with sour cream and onion flavor - pop. Play. eat",
    image: "https://m.media-amazon.com/images/I/71qRG-JNZkL._SL1500_.jpg",
    link: "https://www.amazon.de/-/en/dp/B09RR5FXMK/?_encoding=UTF8&pd_rd_w=RgSuk&content-id=amzn1.sym.1d648a76-95f4-414b-8977-fda7f711035c&pf_rd_p=1d648a76-95f4-414b-8977-fda7f711035c&pf_rd_r=2VE64XC214XY7XN1B5NZ&pd_rd_wg=5XCIp&pd_rd_r=f8a79505-872b-4d7e-b027-f6d21797e207&ref_=pd_gw_trq_ed_k9da0etn&th=1"
    },
    {
    pavadinimas: "LANON 3 mil Nitrile Gloves",
    kaina: 8.99,
    aprasima: "Silicone-Free, Disposable Gloves, Powder-Free, Non-Sterile, Latex-Free, Blue, Pack of 100,",
    image: "https://m.media-amazon.com/images/I/61YdpDs2vVL._AC_SL1500_.jpg",
    link: "https://www.amazon.de/Silicone-Free-Disposable-Powder-Free-Non-Sterile-Latex-Free/dp/B085R7NWC8/ref=sr_1_3_sspa?keywords=plastikhandschuhe&qid=1676900244&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
    },
    {
    pavadinimas: "D.RECT Set of 10 kitchen sponges",
    kaina: 2.41,
    aprasima: " pot sponges, double-sided cleaning sponges, 75 x 50 x 28 mm, multi-purpose cleaning sponge, MIDI, multi-coloured",
    image: "https://m.media-amazon.com/images/I/51LF-hI8MfL._AC_SL1000_.jpg",
    link: "https://www.amazon.de/-/en/kitchen-double-sided-cleaning-multi-purpose-multi-coloured/dp/B093T4694H/ref=sr_1_6?crid=1B44KNDIAN4J0&keywords=schwamm&qid=1676900753&sprefix=sponge%2Caps%2C126&sr=8-6"
    },
    {
    pavadinimas: "M&M'S Brownie ",
    kaina: 3.49,
    aprasima: "Chocolate lentils with brownie cores | Chocolate | Limited Edition |",
    image: "https://m.media-amazon.com/images/I/61jNfDoKEEL._SL1000_.jpg",
    link: "https://www.amazon.de/-/en/421522/dp/B098VB3Q5F/?_encoding=UTF8&pd_rd_w=5W1pI&content-id=amzn1.sym.1d648a76-95f4-414b-8977-fda7f711035c&pf_rd_p=1d648a76-95f4-414b-8977-fda7f711035c&pf_rd_r=VJ5GHAXNYN9NGZHQZCQZ&pd_rd_wg=ghHoe&pd_rd_r=461b38b2-b7be-4747-96b0-c6a84ef6f4b2&ref_=pd_gw_trq_ed_k9da0etn"
    },
    {
    pavadinimas: "Lotus Biscoff Caramel Pastry",
    kaina: 14.16,
    aprasima: "250g - with Best Ingredients - No Dyes - Vegan",
    image: "https://m.media-amazon.com/images/I/81YotpQPlOL._SL1500_.jpg",
    link: "https://www.amazon.de/-/en/Lotus-Biscoff-Caramel-Pastry-Ingredients/dp/B003R7K256/?_encoding=UTF8&pd_rd_w=AtZjt&content-id=amzn1.sym.1d648a76-95f4-414b-8977-fda7f711035c&pf_rd_p=1d648a76-95f4-414b-8977-fda7f711035c&pf_rd_r=PW3GDF1CGN8CY4MDYZ1V&pd_rd_wg=KseBH&pd_rd_r=4be72a21-d639-4ecd-bb14-705e63bc34b3&ref_=pd_gw_trq_ed_k9da0etn"
    }
    ]