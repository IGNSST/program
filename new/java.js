var textarea = document.getElementById("Game_Text");

function addText(Game_Text) {
  textarea.value += Game_Text;                                               //Adding text to textbox
}
// The let box
// Enemy let
let enemyhp;
let enemydmg;
let enemyaccW = 0;                                                               // enemy accuracy if player walks/dodges
let enemyaccA = 0;                                                           // enemy accuracy if player Attacks
let enemyExists = false;
let enemyaccGeneration = false;                                              //enemy cant hit the player the round it spawns, this makes sure it doesnt do that
// Player let
let PlayerHP = 6;
let PlayerDMG = 1;
let PlayerACC = 40;
let PlayerCrit = 7;
let PlayerLoot = 100;
let PlayerRun = 100;
let Items = 0;
let Curse = 0;
let Points = 0;
let Hit;

//Loot Generation
let GotCurse = false;
let GotItem = false;
const stats = [
  {name: "HP", value: 0},
  {name: "Damage", value: 0},
  {name: "Accuracy", value: 0},
  {name: "Critical Chance", value: 0},
  {name: "Loot Chance", value: 0},
  {name: "Run Speed", value: 0}
];
// Start text Generation (unfinished)
let allowedCommands = ["Walk"];                                 // all cmd's "Walk", "Attack", "Take", "Next_Level"
const max_levels = Math.floor(Math.random() * 2) + 3;
let current_level = 1;                                                      // reminder when working on "next_level" to add current_level + 1    !!!
addText("Welcome to Level " + current_level + " of " + "\ " +               // Starting Text
         max_levels + "\n" + "You can choose your next action from the commands below: \
          \n" + allowedCommands.join(", ") + "\n");
UpdateStats();
// Enemy Generation
function generateEnemy() {                                                  
  enemyExists = true;
  enemyhp = Math.floor(Math.random() * 6) + 1;                              // Enemy HP max=6 may increase
  enemydmg = Math.floor(Math.random() * 3) + 1;                             // Enemy DMG max=3 _ boss?
if (enemydmg === 3) {
  let enemydmgReduction = Math.floor(Math.random() * 3) - 2;                //Rare 3 DMG enemies. Chance = 1/9. Loot up?
  if (enemydmgReduction === 0 || enemydmgReduction === -1) {
  enemydmg = enemydmg - (Math.floor(Math.random() * 2) + 1);
  }}
  if (enemydmg === 3 && enemyhp <= 3) {
    enemyhp = Math.floor(Math.random() * 3) + 1;                            // If enemy has 3 dmg, hp cannot be over 3
  }}
// Generate Small Items or Curse
function ItemsOrCurse() {
  let stat1Index = Math.floor(Math.random() * 6);
  let stat2Index = Math.floor(Math.random() * 6);

  let stat1 = stats[stat1Index];
  let stat2 = stats[stat2Index];

  let value1 = Math.floor(Math.random() * (stat1Index === 1 ? 3 : stat1Index === 2 ? 1 : stat1Index === 3 ? 5 : stat1Index === 4 ? 7 : stat1Index === 5 ? 5 : 7)) + 1;
  let value2 = Math.floor(Math.random() * (stat2Index === 1 ? 3 : stat2Index === 2 ? 1 : stat2Index === 3 ? 5 : stat2Index === 4 ? 7 : stat2Index === 5 ? 5 : 7)) + 1;
  
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
  let IorC = Math.floor(Math.random() * 2) + 1;                              // Random generator beetween 1 or 2 to decide if player got item or artifact
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
    addText ( `You found a Curse ${stat1.name}: ${stat1.value}\n`);
  } else {
    addText ( `You found a Curse ${stat1.name}: ${stat1.value}, ${stat2.name}: ${stat2.value}\n`);
  }
  GotCurse = false;
} else if (GotItem === true) {
  if (stat1.name === stat2.name) {
    addText ( `You found an Item ${stat1.name}: ${stat1.value}\n`);
  } else {
    addText ( `You found an Item ${stat1.name}: ${stat1.value}, ${stat2.name}: ${stat2.value}\n`);
    GotItem = false;
  }
} else {
  addText (' ')
}}}


//Generate Final Enemy (unfinished)
  function GenerateFinalEnemy(){
    PlayerRun = 0
    generateEnemy();
    
  }
  function UpdateStats(){
    document.getElementById("stats").innerHTML = 
  "<p> HP: " + PlayerHP + "</p>" +
  "<p> Damage: " + PlayerDMG + "</p>" +
  "<p> Accuracy: " + PlayerACC + "</p>" +
  "<p> Critical Hit: " + PlayerCrit + "</p>" +
  "<p> Loot chance: " + PlayerLoot + "</p>" +
  "<p> Escape chance: " + PlayerRun + "</p>" +
  "<p> Collected items: " + Items + "</p>" +
  "<p> Collected artifacts: " + Curse + "</p>";
};
function GenerateEnemyAccW(){
if (enemyhp >=5) {
  enemyaccW = Math.floor(Math.random() * 16) + 5;
}
else if (enemyhp === 3 || enemyhp === 4){
  enemyaccW = Math.floor(Math.random() * 16) + 10;
}
else if (enemyhp === 1 || enemyhp === 2 && enemydmg <= 3){
  enemyaccW = Math.floor(Math.random() * 15) + 17;
}
else if (enemydmg === 3) {
  enemyaccW = Math.floor(Math.random() * 20) + 4;
}
}
function GenerateEnemyAccA(){
  if (enemyhp >=5) {
  enemyaccA = Math.floor(Math.random() * 16) + 5;
}
else if (enemyhp === 3 || enemyhp === 4){
  enemyaccA = Math.floor(Math.random() * 16) + 10;
}
else if (enemyhp === 1 || enemyhp === 2 && enemydmg <= 3){
  enemyaccA = Math.floor(Math.random() * 15) + 17;
}
else if (enemydmg === 3) {
  enemyaccA = Math.floor(Math.random() * 20) + 4;
}
}
// Walk button (Complete)

document.getElementById("Walk").onclick = function() {                      // Player Clicks Walk
  if (!allowedCommands.includes("Walk")) {
    addText("You cannot use the 'Walk' command at this time.\n");
    return;
    }

  let Escaperoll = Math.floor(Math.random() * 100) + 1;                     // Run Away From enemy chance 10%
  if (Escaperoll <= PlayerRun && enemyaccGeneration === true) {
    enemyExists = false;
    enemyaccGeneration = false;
    enemyaccA = undefined;
    generateLoot();
    console.log(Escaperoll, PlayerRun)
  }
else{ 
  GainedLoot = null
}
if (enemyExists === false) {                                                       
    generateEnemy();
}

    if (enemyaccGeneration === true) {
  let hitChance = Math.floor(Math.random() * 100) + 1;
  console.log([hitChance, enemyaccA]);
  if (hitChance <= enemyaccA && enemyExists === true) {                     // Accuracy formula            
  // The enemy hits the player
  console.log("The enemy hit the player");                                  // dont forget to change                      !!!
  PlayerHP = PlayerHP - enemydmg;
  UpdateStats();
  Hit = "The enemy hit the player" ;
  } else {
  // The enemy misses the player
  console.log("The enemy missed the player");
  Hit = "The enemy missed the player";
  }};

GenerateEnemyAccA();
GenerateEnemyAccW();

  allowedCommands = ['Walk']
  if (enemyExists === true) {
    allowedCommands.push('Attack');
  }                                      

if (enemyExists === true)  {                                              // comment needed
    enemyaccGeneration = true  
} 
addText("Enemy HP: " + enemyhp + "\n" + "Enemy DMG: " + enemydmg + "\n" + "Enemy ACC: " + enemyaccA   + "         Enemy ACC2: " + enemyaccW + "\n" + "Hit: " + Hit +  "\n"  + "Loot: " + GainedLoot + "\n");
};


// Attack button (missing: enemy kill item, enemy hurt, enemy hurt player, enemy accuracy, final enemy)

  document.getElementById("Attack").onclick = function() {
    if (!allowedCommands.includes("Attack")) {
      addText("You cannot use the 'Attack' command at this time.\n");
      return;
      }
      let hitChance = Math.floor(Math.random() * 100) + 1;
      if (hitChance <= PlayerACC && enemyExists === true) {                     // Accuracy formula            
        // The enemy hits the player
        console.log("The Player hit the enemy");
        enemyhp = enemyhp - PlayerDMG;
        } else {
        // The enemy misses the player
        console.log("The Player missed the enemy");
        }
      if (enemyhp === 0 && enemyExists === true) {
        generateLoot();
        enemyaccGeneration = false;
        enemyExists = false;
        enemyaccA = 0;
        enemyaccW = 0;
        enemydmg = 0;
      }
      else {
        GainedLoot = null
      }

if (enemyaccGeneration === true) {
  let hitChance = Math.floor(Math.random() * 100) + 1;
  console.log([hitChance, enemyaccW]);
  if (hitChance <= enemyaccW && enemyExists === true) {                     // Accuracy formula            
  // The enemy hits the player
  console.log("The enemy hit the player ATK");                                  // dont forget to change                      !!!
  PlayerHP = PlayerHP - enemydmg;
  UpdateStats();
  Hit = "The enemy hit the player" 
  } else {
  // The enemy misses the player
  console.log("The enemy missed the player ATK");
  Hit = "The enemy missed the player"
  }};

GenerateEnemyAccW()

      if (enemyExists === false){
        allowedCommands = ['Walk']
        
      }
      else {
        allowedCommands = ['Walk', 'Attack']
        if (GainedLoot !== null){
          allowedCommands.push('Take')
        }
      }

addText("Enemy HP: " + enemyhp + "\n" + "Enemy DMG: " + enemydmg + "\n" + "Enemy ACC1: " + enemyaccA  + "         Enemy ACC2: " + enemyaccW + "\n" + "Hit: " + Hit + "\n"  + "Loot: " + GainedLoot + "\n");

if (enemyExists === true)  {                                              // comment needed
  enemyaccGeneration = true  
} 
};

// Take button (missing: increase stats, found item while enemy exist's,)
  document.getElementById("Take").onclick = function() {
    if (!allowedCommands.includes("Take")) {
      addText("You cannot use the 'Take' command at this time.\n");
      return;
      }
 
  };
  // Restart button (missing: Refresh page or clear board and make re-start "Start text Generation")
  document.getElementById("Restart").onclick = function() {
    location.reload();
  };
// Next button (missing: clear board, +1 on current level, big item gain based on curse (new formula req))
  document.getElementById("Next_Level").onclick = function() {
    if (!allowedCommands.includes("Next_Level")) {
      addText("You cannot use the 'Next_Level' command at this time.\n");
      return;
      }

  }
