// Užduotis 1


let isvedimas = "";
let vardas = "Ignas";
let Pavarde = "Staskevicius";

isvedimas += "<p>Vardas: <b>" + vardas + "</b> Pavarde: <b>" + Pavarde + "</b></p> ";
document.getElementById("isvedimas").innerHTML = isvedimas; // easy peasy lemon squezy


// Užduotis 2


let spec = "";
let vardas2 = "Walter";
let Pavarde2 = "White";
let elpastas = "Heisenberg@gmail.com";
let telefonas = "108-000-000";
let adresas = "308 Negra Aroya Lane, Albuquerque, New Mexico";
let pastas = "30852"; 
let commentaras = "As nedarau meth"
spec += "<p>Vardas: <b>" + vardas2  + "</p></b>" +
        "<p> Pavarde: <b>" + Pavarde2 + "</b></p>" +
        "<p>Email: <b>" + elpastas + "</b></p>" +
        "<p>Telefonas: <b>" + telefonas + "</b></p>" +
        "<p>adresas: <b>" + adresas + "</b></p>" +
        "<p>Pašto kodas: <b>" + pastas + "</b></p>" +
        "<p>Commentaras: <b>" + commentaras + "</b></p>"; //truko 10 min kad butu graziai bet dabar moku
document.getElementById("spec").innerHTML = spec;


//  Užduotis 3


let parduotuve = "";

let Prekes_Pavadinimas = "309S Stainless Steel Pipe";

let Kaina = "400$";

let Aprasimas = "Stainless steel pipe tube is a kind of hollow long circular steel, mainly widely used in petroleum, chemical,\
                 medical, food, light industry, machinery instrument and other industrial conveying pipes and mechanical structure\
                 components. In addition, the bending, torsional strength is the same, the weight is light, so it is also widely\
                 used in the manufacture of mechanical parts and engineering structures. Also commonly used for furniture kitchenware and so on.";

let IMG = 'https://img.bjyyb.net/sites/72500/72774/20221020145724387.webp';

let Link = 'https://www.dtssMetal.com/products/stainless_steel_pipe_132287/309s_stainless_steel_pipe.html';

parduotuve +=   "<p>" + Prekes_Pavadinimas + "</p>\
                <p>" + Kaina + "</p>\
                <img src='" + IMG + "' alt='Image-test-1' height='200' width='200'>\
                <p>" + Aprasimas + "</p>\
                <a href='" + Link + "'>" + Link + "</a>";  // nieko nebesuprantu

document.getElementById("SHop").innerHTML = parduotuve;


//  Užduotis 4


let math = "";
let a = 3;
let b = 8;
let c = 4;

math += "<p> a = " + a + "</p>"+
        "<p> b = " + b + "</p>"+
        "<p> c = " + c + "</p>"+
        "<p>" + a + "·  x<sup>2</sup> + " + b + "·x + " + c + " = 0 </p>"+ // 3·x^2 + 8·x + 4 = 0
        "<p> D = b<sup>2</sup> - 4·a·c =" + b + "<sup>2</sup>" + " -4·" + a + "·" + c + "=" + (b*b-4*a*c) + "</p>" +  // D = b2  - 4·a·c = 82  - 4·3·4 = 16
        "<p> x<sub>1</sup> = ";
document.getElementById("math").innerHTML = math;