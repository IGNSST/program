var textarea = document.getElementById("Game_Text");

function addText(Game_Text) {
  textarea.value += Game_Text;                                              //Adding text to textbox
}
// The let box
// Enemy let
let enemyhp;
let enemydmg;
let enemyaccW;                                                              // enemy accuracy if player walks/dodges
let enemyaccA = 0;                                                              // enemy accuracy if player Attacks
let enemyExists = false;

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
//Loot Generation
let GainedLoot;
let ItemStats = 0;
// Start text Generation (unfinished)
let allowedCommands = ["Walk",  "Restart"];                                 // all cmd's "Walk", "Attack", "Take", "Restart", "Next_Level"
let max_levels = Math.floor(Math.random() * 3) + 2;
let current_level = 1;                                                      // reminder when working on "next_level" to add current_level + 1    !!!
addText("Welcome to Level " + current_level + " of " + "\ " +               // Starting Text
         max_levels + "\n" + "You can choose your next action from the commands below: \
          \n" + allowedCommands.join(", ") + "\n");
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
  if (!enemyExists) {                                                       // I'll need to move this later
    generateEnemy();
  }
// Walk button (missing: item find, player escape)

document.getElementById("Walk").onclick = function() {                      // Player Clicks Walk
  if (!allowedCommands.includes("Walk")) {
    addText("You cannot use the 'Walk' command at this time.\n");
    return;
    }
  let hitChance = Math.floor(Math.random() * 100) + 1;
  console.log([hitChance, enemyaccA]);
  if (hitChance <= enemyaccA && enemyExists === true) {                     // Accuracy formula            
  // The enemy hits the player
  console.log("The enemy hit the player");                                  // dont forget to change                      !!!
  PlayerHP = PlayerHP - enemydmg;
  Hit = "The enemy hit the player" 
  } else {
  // The enemy misses the player
  console.log("The enemy missed the player");
  Hit = "The enemy missed the player"
  };

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


  
  let Lootroll = Math.floor(Math.random() * 100) + 1;                      // Player needs to escape or kill enemy to get loot, this is so fucked
  if (Lootroll <= PlayerLoot) {         
console.log("Player found loot");                                          // Player gets loot
GainedLoot = "You Found an item :" + ItemStats;
    }
else{
  GainedLoot = " "
}
  allowedCommands = ['Walk', 'Restart']
  if (enemyExists === true) {
    allowedCommands.push('Attack');
  }
addText("Enemy HP: " + enemyhp + "\n" + "Enemy DMG: " + enemydmg + "\n" + "Enemy ACC: " + enemyaccA + "\n" + "Hit: " + Hit + "\n"  + "Loot: " + GainedLoot + "\n");

};


// Attack button (missing: enemy kill item, enemy hurt, enemy hurt player, enemy accuracy, final enemy)

  document.getElementById("Attack").onclick = function() {
    if (!allowedCommands.includes("Attack")) {
      addText("You cannot use the 'Attack' command at this time.\n");
      return;
      }
  };
// Take button (missing: increase stats, +points, found item while enemy exist's,)
  document.getElementById("Take").onclick = function() {
    if (!allowedCommands.includes("Take")) {
      addText("You cannot use the 'Take' command at this time.\n");
      return;
      }
 
  };
  // Restart button (missing: Refresh page or clear board and make re-start "Start text Generation")
  document.getElementById("Restart").onclick = function() {
    if (!allowedCommands.includes("Restart")) {
      addText("You cannot use the 'Restart' command at this time.\n");
      return;
      }

  };
// Next button (missing: clear board, +1 on current level, big item gain based on curse (new formula req))
  document.getElementById("Next_Level").onclick = function() {
    if (!allowedCommands.includes("Next_Level")) {
      addText("You cannot use the 'Next_Level' command at this time.\n");
      return;
      }

    };

