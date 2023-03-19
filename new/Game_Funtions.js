// The let box
// Enemy let
let enemyhp;
let enemymaxhp;
let enemydmg;
let enemymaxdmg;
let enemyaccW = 0;                                                               // enemy accuracy if player walks/dodges
let enemyaccA = 0;                                                           // enemy accuracy if player Attacks
let enemyExists = false;
let enemyaccGeneration = false; 
let IsFinalEnemy = NaN;                                             //enemy cant hit the player the round it spawns, this makes sure it doesnt do that
let MaxTotalKERPerLevel = Math.floor(Math.random() * 20) + 15;
let TotalKER;
// Player let
let PlayerHP = 6;
let PlayerDMG = 1;
let PlayerACC = 40;
let PlayerCrit = 7;
let PlayerLoot = 40;
let PlayerRun = 10;
let Items = 0;
let Curse = 0;
let Points = 0;
let Hit;
let EscapedEnemies = 0;
let KilledEnemies = 0;
let PlayerAlive = true;
let PlayerEscape = false;
//Loot Generation
let GotCurse = false;
let GotItem = false;
let stat1, stat2, stat3;
let TempTake;                                                   // This exists to know if what stat the player takes and increase it
let CCurse = 0;
let IorC;
const stats = [
  {name: "HP", value: 0},
  {name: "Damage", value: 0},
  {name: "Accuracy", value: 0},
  {name: "Critical Chance", value: 0},
  {name: "Loot Chance", value: 0},
  {name: "Run Speed", value: 0}
];

let CursedStats = [
    {name: "HP", value: 0},
    {name: "Damage", value: 0},
    {name: "Accuracy", value: 0},
    {name: "Critical Chance", value: 0},
    {name: "Loot Chance", value: 0},
    {name: "Run Speed", value: 0}
];
// Enemy Generation
function generateEnemy() {                                                  
    enemyExists = true;
    enemymaxhp = Math.floor(Math.random() * 6) + 1;                              // Enemy HP max=6 may increase
    enemymaxdmg = Math.floor(Math.random() * 3) + 1;                             // Enemy DMG max=3 _ boss?
  if (enemymaxdmg === 3) {
    let enemydmgReduction = Math.floor(Math.random() * 3) - 2;                //Rare 3 DMG enemies. Chance = 1/9. Loot up?
  if (enemydmgReduction === 0 || enemydmgReduction === -1) {
    enemymaxdmg = enemymaxdmg - (Math.floor(Math.random() * 2) + 1);
  }}
  if (enemymaxdmg === 3 && enemymaxhp >= 3) {
    enemymaxhp = Math.floor(Math.random() * 2) + 1;                            // If enemy has 3 dmg, hp cannot be over 3
    }     
    enemyhp = enemymaxhp;
    enemydmg = enemymaxdmg;
      // Final Enemy generation
    TotalKER = KilledEnemies + EscapedEnemies
  if(TotalKER === MaxTotalKERPerLevel) {
    IsFinalEnemy = true;
    
  }
  if (TotalKER > MaxTotalKERPerLevel) {
    IsFinalEnemy = false;

  }
}
// Generate Small Items or Curse
    function ItemsOrCurse() {
        let stat1Index = Math.floor(Math.random() * 6);
        let stat2Index = Math.floor(Math.random() * 6);
      
        if(stat2Index === 1){
          let randnum = Math.floor(Math.random() * 2) + 1
          if (randnum === 1){
            stat2Index = Math.floor(Math.random() * 6);
          }
        }
        if(stat1Index === 1){
          let randnum = Math.floor(Math.random() * 2) + 1
          if (randnum === 1){
            stat1Index = Math.floor(Math.random() * 6);
          }
        }
        if (PlayerDMG === 1 && GotCurse === true && stat1Index === 1){
          stat1Index += Math.floor(Math.random() * 4) + 1;
        }
        if (PlayerDMG === 1 && GotCurse === true && stat2Index === 1){
          stat2Index += Math.floor(Math.random() * 4) + 1;
        }
        stat1 = stats[stat1Index];
        stat2 = stats[stat2Index];
      
        let value1 = Math.floor(Math.random() * (stat1Index === 1 ? 1 : stat1Index === 2 ? 7 : stat1Index === 3 ? 3 : stat1Index === 4 ? 7 : stat1Index === 5 ? 7 : 3)) + 1;
        let value2 = Math.floor(Math.random() * (stat2Index === 1 ? 1 : stat2Index === 2 ? 7 : stat2Index === 3 ? 3 : stat2Index === 4 ? 7 : stat2Index === 5 ? 7 : 3)) + 1;
        
        if (GotCurse === true){
          value1 = value1 * -1;
          value2 = value2 * -1;
        } else if (GotItem === true){
          value1 = value1 * 1;
          value2 = value2 * 1;
        }
      
        stat1.value = value1;
        stat2.value = value2;
      
        return [stat1, stat2];
      };
// Generate loot
function generateLoot(){                                                 
  let Lootroll = Math.floor(Math.random() * 100) + 1;                      // Player needs to escape or kill enemy to get loot.
  if (Lootroll <= PlayerLoot) {         
console.log("Player found loot");                                          // Player gets loot
  IorC = Math.floor(Math.random() * 2) + 1;                              // Random generator beetween 1 or 2 to decide if player got item or artifact
if (IorC === 1){
  GotItem = true;
}
else if (IorC === 2){
  GotCurse = true;
}
ItemsOrCurse()
let [stat1, stat2] = ItemsOrCurse();

  if (GotCurse === true) {
  if (stat1.name === stat2.name) {
    addText(
      `You have found a curse! ${stat1.name} ${
        stat1.name === "HP"
          ? stat1.value
          : stat1.name === "Damage"
          ? stat1.value
          : stat1.value + "%"
      }, \n`
    );
    TempTake = [stat1];
  } else {
    addText(
      `You have found a curse! ${stat1.name} ${
        stat1.name === "HP"
          ? stat1.value
          : stat1.name === "Damage"
          ? stat1.value
          : stat1.value + "%"
      }, ${stat2.name}: ${
        stat2.name === "HP"
          ? stat2.value
          : stat2.name === "Damage"
          ? stat2.value
          : stat2.value + "%"
      } \n`
    );
    TempTake = [stat1, stat2];
  }}
  else if (GotItem === true) {
  if (stat1.name === stat2.name) {
    addText(
      `You have found an item! ${stat1.name} ${
        stat1.name === "HP"
          ? stat1.value
          : stat1.name === "Damage"
          ? stat1.value
          : stat1.value + "%"
      }, \n`
    );
    TempTake = [stat1];
  } else {
    addText(
      `You have found an item! ${stat1.name} ${
        stat1.name === "HP"
          ? stat1.value
          : stat1.name === "Damage"
          ? stat1.value
          : stat1.value + "%"
      }, ${stat2.name}: ${
        stat2.name === "HP"
          ? stat2.value
          : stat2.name === "Damage"
          ? stat2.value
          : stat2.value + "%"
      } \n`
    );
    TempTake = [stat1, stat2];
  }}
}}
function UpdateStats(){
    document.getElementById("stats").innerHTML = 
  "<p> HP: " + PlayerHP + "</p>" +
  "<p> Damage: " + PlayerDMG + "</p>" +
  "<p> Accuracy: " + PlayerACC + "%</p>" +
  "<p> Critical Hit: " + PlayerCrit + "%</p>" +
  "<p> Loot chance: " + PlayerLoot + "%</p>" +
  "<p> Escape chance: " + PlayerRun + "%</p>" +
  "<p> Collected item's: " + Items + "</p>" +
  "<p> Collected Curse's: " + Curse + "</p>";
};
function GenerateEnemyAccW(){
  enemyaccW = (enemymaxhp >= 5) ? Math.floor(Math.random() * 16) + 5 :
  (enemymaxhp === 3 || enemymaxhp === 4) ? Math.floor(Math.random() * 16) + 10 :
  (enemymaxhp === 1 || enemymaxhp === 2 && enemymaxdmg <= 3) ? Math.floor(Math.random() * 15) + 17 :    // Need to increase enemy hit chances
  (enemymaxdmg === 3) ? Math.floor(Math.random() * 20) + 4: null;
}
function GenerateEnemyAccA(){
  enemyaccA = (enemymaxhp >= 5) ? Math.floor(Math.random() * 16) + 5 :
  (enemymaxhp === 3 || enemymaxhp === 4) ? Math.floor(Math.random() * 16) + 10 :
  (enemymaxhp === 1 || enemymaxhp === 2 && enemymaxdmg <= 3) ? Math.floor(Math.random() * 15) + 17 :    // Need to increase enemy hit chances
  (enemymaxdmg === 3) ? Math.floor(Math.random() * 20) + 4: null;
}
// Player Dies
function PlayerDies(){
  if (PlayerHP <= 0){
  allowedCommands = [' ']
  PlayerAlive = false;
  UpdateStats();
  addText ('Player Died, Press "Restart" to restart and retry')}
  if (!PlayerAlive){
    return
  }
};
 // The Player Attack function
function Attack() {
  if (enemyExists === false) {
  addText("\n" + "There is no enemy to attack.");
  } else {
  let hitChance = Math.floor(Math.random() * 100) + 1;
  if (hitChance <= PlayerACC) {
  Hit = true;
  let critChance = Math.floor(Math.random() * 100) + 1;
  if (critChance <= PlayerCrit) {
  addText("Critical hit!  You deal 3X damage!!!" + "\n");
  enemyhp -= PlayerDMG * 3;
  } else {
  enemyhp -= PlayerDMG;
  }
  addText("You attack the enemy and deal " + (Hit ? PlayerDMG * (critChance <= PlayerCrit ? 3 : 1) : 0) + " damage. " + "\n");
  } else {
  Hit = false;
  addText("You miss the attack. " + "\n");
  }
  if (enemyhp <= 0) {
  addText("The enemy is defeated. \n");
  KilledEnemies++;
  enemyExists = false;
  enemyaccGeneration = false;
  enemyExists = false;
  enemyaccA = 0;
  enemyaccW = 0;
  enemydmg = 0;
  generateLoot()
  } 
  }
  }
//Take Funtion
function Take() {
// Depending on the value of the stat1.name/stat2.name, chosen stat increases.
if (stat1.name !== stat2.name){
switch (stat2.name) {
  case "HP":
  PlayerHP += stat2.value;
  break;
  case "Damage":
  PlayerDMG += stat2.value;
  break;
  case "Accuracy":
  PlayerACC += stat2.value;
  break;
  case "Critical Chance":
  PlayerCrit += stat2.value;
  break;
  case "Loot Chance":
  PlayerLoot += stat2.value;
  break;
  case "Run Speed":
  PlayerRun += stat2.value;
  break;
  default:
  break;
}}
switch (stat1.name) {
  case "HP":
  PlayerHP += stat1.value;
  break;
  case "Damage":
  PlayerDMG += stat1.value;
  break;
  case "Accuracy":
  PlayerACC += stat1.value;
  break;
  case "Critical Chance":
  PlayerCrit += stat1.value;
  break;
  case "Loot Chance":
  PlayerLoot += stat1.value;
  break;
  case "Run Speed":
  PlayerRun += stat1.value;
  break;
  default:
  break;
}
  }
function addToCursedStats() {
switch (stat1.name) {
    case "HP":
    CursedStats.find(({ name }) => name === "HP").value += stat1.value;
    break;
    case "Damage":
    CursedStats.find(({ name }) => name === "Damage").value += stat1.value;
    break;
    case "Accuracy":
    CursedStats.find(({ name }) => name === "Accuracy").value += stat1.value;
    break;
    case "Critical Chance":
    CursedStats.find(({ name }) => name === "Critical Chance").value += stat1.value;
    break;
    case "Loot Chance":
    CursedStats.find(({ name }) => name === "Loot Chance").value += stat1.value;
    break;
    case "Run Speed":
    CursedStats.find(({ name }) => name === "Run Speed").value += stat1.value;
    break;
    default:
    break;
}
if (stat1.name !== stat2.name){
switch (stat2.name) {
    case "HP":
    CursedStats.find(({ name }) => name === "HP").value += stat2.value;
    break;
    case "Damage":
    CursedStats.find(({ name }) => name === "Damage").value += stat2.value;
    break;
    case "Accuracy":
    CursedStats.find(({ name }) => name === "Accuracy").value += stat2.value;
    break;
    case "Critical Chance":
    CursedStats.find(({ name }) => name === "Critical Chance").value += stat2.value;
    break;
    case "Loot Chance":
    CursedStats.find(({ name }) => name === "Loot Chance").value += stat2.value;
    break;
    case "Run Speed":
    CursedStats.find(({ name }) => name === "Run Speed").value += stat2.value;
    break;
    default:
    break;
}}
}
function EnemyAttacks(){
  if (enemyaccGeneration === true) {
    let enemyHitChance = Math.floor(Math.random() * 100) + 1;
    if (enemyHitChance <= enemyaccA) {
    let enemyDmgDealt = enemydmg;
    PlayerHP -= enemyDmgDealt;
    UpdateStats()
    PlayerDies()
    addText("The enemy attacks and deals " + enemyDmgDealt + " damage. \n");
    } else {
    addText("The enemy misses the attack. \n");
    }}
    if (enemyhp <= 0){


    }
  }
function PlayerEscapes(){
  let Escaperoll = Math.floor(Math.random() * 100) + 1;                     // Run Away From enemy chance 10%
  if (Escaperoll <= PlayerRun && enemyaccGeneration === true && IsFinalEnemy != true) {
    enemyExists = false;
    enemyaccGeneration = false;
    enemyaccA = undefined;
    console.log(Escaperoll, PlayerRun)
    EscapedEnemies ++;
    PlayerEscape = true;
  }
}
function CreateBigItem(){
if (CCurse !== 0){
    let stat1Index = Math.floor(Math.random() * 6);
    let stat2Index = Math.floor(Math.random() * 6);
    let stat3Index = Math.floor(Math.random() * 6);

  while (stat1Index === stat2Index || stat1Index === stat3Index || stat2Index === stat3Index) {
      stat2Index = Math.floor(Math.random() * 6);
      stat3Index = Math.floor(Math.random() * 6);
  }

    stat1 = stats[stat1Index];
    stat2 = stats[stat2Index];
    stat3 = stats[stat3Index];

    let value1 = Math.floor(Math.random() * (stat1Index === 1 ? 1 : stat1Index === 2 ? 7 : stat1Index === 3 ? 4 : stat1Index === 4 ? 6 : stat1Index === 5 ? 6 : 4)) + 1;
    let value2 = Math.floor(Math.random() * (stat2Index === 1 ? 1 : stat2Index === 2 ? 7 : stat2Index === 3 ? 4 : stat2Index === 4 ? 6 : stat2Index === 5 ? 6 : 4)) + 1;
    let value3 = Math.floor(Math.random() * (stat3Index === 1 ? 1 : stat3Index === 2 ? 7 : stat3Index === 3 ? 4 : stat3Index === 4 ? 6 : stat3Index === 5 ? 6 : 4)) + 1;

    stat1.value = Math.floor(value1 * (1 + ((CCurse - 1) * 0.5)));
    stat2.value = Math.floor(value2 * (1 + ((CCurse - 1) * 0.5)));
    stat3.value = Math.floor(value3 * (1 + ((CCurse - 1) * 0.5)));

    stat1.name === "Damage" ? stat1.value = 1 : stat1.value;
    stat2.name === "Damage" ? stat2.value = 1 : stat2.value;
    stat3.name === "Damage" ? stat3.value = 1 : stat3.value;

switch (stat3.name) {
  case "HP":
  PlayerHP += stat3.value;
  break;
  case "Damage":
  PlayerDMG += stat3.value;
  break;
  case "Accuracy":
  PlayerACC += stat3.value;
  break;
  case "Critical Chance":
  PlayerCrit += stat3.value;
  break;
  case "Loot Chance":
  PlayerLoot += stat3.value;
  break;
  case "Run Speed":
  PlayerRun += stat3.value;
  break;
  default:
}
switch (stat2.name) {
  case "HP":
  PlayerHP += stat2.value;
  break;
  case "Damage":
  PlayerDMG += stat2.value;
  break;
  case "Accuracy":
  PlayerACC += stat2.value;
  break;
  case "Critical Chance":
  PlayerCrit += stat2.value;
  break;
  case "Loot Chance":
  PlayerLoot += stat2.value;
  break;
  case "Run Speed":
  PlayerRun += stat2.value;
  break;
  default:
  break;
}
switch (stat1.name) {
  case "HP":
  PlayerHP += stat1.value;
  break;
  case "Damage":
  PlayerDMG += stat1.value;
  break;
  case "Accuracy":
  PlayerACC += stat1.value;
  break;
  case "Critical Chance":
  PlayerCrit += stat1.value;
  break;
  case "Loot Chance":
  PlayerLoot += stat1.value;
  break;
  case "Run Speed":
  PlayerRun += stat1.value;
  break;
  default:
  break;
}
addText(
`You found a settlement and went to pray to the gods... \n\
You have ` + CCurse + ` Cursed Souls, not too many but not\
 too little... \nThe Gods reward you!!!\n You Recieved: ` + 
   `${stat1.name} ${
    stat1.name === "HP"
      ? stat1.value
      : stat1.name === "Damage"
      ? stat1.value
      : stat1.value + "%"}, 
      ${stat2.name}: ${
    stat2.name === "HP"
      ? stat2.value
      : stat2.name === "Damage"
      ? stat2.value
      : stat2.value + "%"}, 
      ${stat3.name}: ${
    stat3.name === "HP"
      ? stat3.value
      : stat3.name === "Damage"
      ? stat3.value
      : stat3.value + "%"} 
      \n`)
      UpdateStats()
  }
else{
addText(
`You found a settlement and went to pray to the gods... \n\
You have ` + CCurse + ` Cursed Souls, It seems you've been too scared to pick them up\n\
The Gods encourage you to pick up the Cursed Souls!!!\n`)
}
}
function ReturnCStats(){
  switch (CursedStats.name) {
    case "HP":
    PlayerHP += CursedStats.value;
    break;
    case "Damage":
    PlayerDMG += CursedStats.value;
    break;
    case "Accuracy":
    PlayerACC += CursedStats.value;
    break;
    case "Critical Chance":
    PlayerCrit += CursedStats.value;
    break;
    case "Loot Chance":
    PlayerLoot += CursedStats.value;
    break;
    case "Run Speed":
    PlayerRun += CursedStats.value;
    break;
    default:
}}