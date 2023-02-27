// Uzduotis 1
const months = [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Gegužė",
    "Birželis",
    "Liepa",
    "Rugpjūtis",
    "Rugsėjis",
    "Spalis",
    "Lapkritis",
    "Gruodis"
  ];
  let output = "";
  for (let i = 0; i < months.length; i++) {
    output += "<p>" + months[i] + "</p>";
  }
  document.getElementById("isvedimas1").innerHTML = output;
  // Uzduotis 2
  let Ats = 0;
  let output2 = "";
  for (let i = 0; i <= 25; i++) {
    Ats = Ats + i;
    output2 = Ats
  }
  document.getElementById("isvedimas2").innerHTML = output2;
  // Uzduotis 3
  let output3 = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0){
        output3 += "<p>* " + i + " *</p>" 
    }
  }
  document.getElementById("isvedimas3").innerHTML = output3;
  // Uzduotis 4
  let a = 10;                //factorialas
  let Ats4 = 1;
  for (let i = a; i >= 1; i--) {
    Ats4 = Ats4 * i;
  }
document.getElementById("isvedimas4").innerHTML = Ats4;
  // uzduotis 5
  let output5 = '<table>';
  let Ats5 = 0;
  output5 += "<tr>"
  for (let ii = 1; ii < 10; ii++) {
      output5 += "<td style = 'border: 1px solid black;'>"
      for (let i = 1; i <= 10; i++) {
      let g = i * ii;
        output5 +=  ii + "*" + i + "=" + g + "<br>"
    }
    output5 += "</td>"
    if (ii == 3){
        output5 += "</tr> <tr>"
    }
    if (ii == 6){
        output5 += "</tr> <tr>"
    }
}
output5 += "</tr>"
output5 += "</table>"
document.getElementById("isvedimas5").innerHTML += output5;
// Uzduotis 6\
let chess = "";
let size = 8;

for (let i = 0; i < size; i++) {
  chess += "<tr>";
  for (let ii = 0; ii < size; ii++) {
    if ((i + ii) % 2 === 0) {
      chess += "<td style='width: 50px; height: 50px;background-color: #fff'></td>";
    } else {
      chess += "<td style='width: 50px; height: 50px;background-color: #000;'></td>";
    }
  }
  chess += "</tr>";
}
document.getElementById("isvedimas6").innerHTML = "<table style = 'border: 1px solid black;'>" + chess + "</table>";
// Uzduotis 7
const salys = {
    "Lietuva": "Vilnius",
    "Latvija": "Ryga",
    "Estija": "Talinas",
    "Belgija": "Briuselis",
    "Danija": "Kopenhaga",
    "Prancūzija": "Paryžius",
    "Vokietija": "Berlynas",
    "Portugalija": "Lisabona",
    "Lenkija": "Varšuva",
    "Čekija": "Praha",
    "Graikija": "Atėnai",
    "Italija": "Roma",
    "Austrija": "Viena",
};

let output7 = "<table><tr><th>Nr.</th><th>Šalis</th><th>Sostinė</th></tr>";
let i = 1;
for (let s in salys) {
    output7 += "<tr><td>"+ i +"</td><td>" + s + "</td><td>" + salys[s] + "</td></tr>";
    i++;
}
output7 += "</table>";
document.getElementById("isvedimas7").innerHTML = output7;
// uzduotis 8