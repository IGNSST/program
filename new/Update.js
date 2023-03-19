var textarea = document.getElementById("Game_Text");

function addText(Game_Text) {
  textarea.value += Game_Text;                                               //Adding text to textbox
}
// Start text Generation (unfinished)
let allowedCommands = ["Walk"];                                 // all cmd's "Walk", "Attack", "Take", "Next_Level"
const max_levels = Math.floor(Math.random() * 2) + 3;
let current_level = 1;                                                      // reminder when working on "next_level" to add current_level + 1    !!!
addText("Welcome to Level " + current_level + " of " + "\ " +               // Starting Text
         max_levels + "\n" + "You can choose your next action from the commands below: \
          \n" + allowedCommands.join(", ") + "\n");
UpdateStats();
// Walk button (Complete)
document.getElementById("Walk").onclick = function() {                      // Player Clicks Walk
  if (!allowedCommands.includes("Walk")) {
    addText("You cannot use the 'Walk' command at this time.\n");
    return;
    }
    GotCurse = false;
    GotItem = false;


PlayerEscapes();

if (enemyExists === false) {                                                       
    generateEnemy();
}
GenerateEnemyAccA();
GenerateEnemyAccW();
allowedCommands = ['Walk']
if (enemyExists === true) {
  allowedCommands.push('Attack');
}  
if (PlayerEscape === true){
  PlayerEscape = false;
addText("You walk and escape the enemy, but you found a new enemy\n");
generateLoot(); 
if (TempTake !== undefined){
  allowedCommands = ['Walk']
  allowedCommands.push('Take');
  if (enemyExists === true){
    allowedCommands.push('Attack');
  }
} 
addText('HP: ' + enemyhp + " DMG: " + enemydmg + "\n" + allowedCommands.join(": " + enemyaccA + "% ") + ": " + enemyaccW + "%\n\n");

}
else if (enemyExists === true && enemyaccGeneration === true){
addText("You walk and the enemy attacks" + '\n HP:' + enemyhp + " DMG: " + enemydmg + "\n" + allowedCommands.join(": " + enemyaccA + "% ") + ": " + enemyaccW + "%\n\n" )
}
else if (IsFinalEnemy !== false){
addText("You walk and encounter an enemy \n" + "HP: " + enemyhp + " DMG: " + enemydmg + "\n" + allowedCommands.join(": " + enemyaccA + "% ") + ": " + enemyaccW + "%\n\n");
}

EnemyAttacks()

if (enemyExists === true)  {                                              // if enemy exsists generate enemy accuracy
enemyaccGeneration = true  
}

PlayerDies() 
if(IsFinalEnemy === false){
KilledEnemies ++;
allowedCommands = ['Next_Level']
addText ("Level Completed\nPress Next Level to Proceed")
return
}
if (!PlayerAlive){
  return
}
};
// Attack button (Complete!)
  document.getElementById("Attack").onclick = function() {
if (!allowedCommands.includes("Attack")) {
  addText("You cannot use the 'Attack' command at this time.\n");
  return;
  }
  GotCurse = false;
  GotItem = false;
  if (enemyhp <= 0 && IsFinalEnemy === true){
    generateLoot();
    // Quirk item space for later
  }
  
    if (enemyExists === false) {                                                       
      generateEnemy();
  }
Attack()
EnemyAttacks()
GenerateEnemyAccW()
GenerateEnemyAccA()
PlayerDies()
if (!PlayerAlive){
  return;
}
if (enemyExists === true && enemyaccGeneration === true && IsFinalEnemy !== false){
addText( 'HP:' + enemyhp + " DMG: " + enemydmg + "\n" + allowedCommands.join(": " + enemyaccA + "% ") + ": " + enemyaccW + "%\n" )
}

if (enemyExists === false){
  allowedCommands = ['Walk']
  if (TempTake !== undefined){
  allowedCommands.push('Take');
  }
}
else {
  allowedCommands = ['Walk', 'Attack']
}
if(IsFinalEnemy === false){
  KilledEnemies ++;
  allowedCommands = ['Next_Level']
  if (!PlayerAlive){
    return
} return
}
if (enemyExists === false){
  addText( allowedCommands.join(', ') + "\n \n" )
  }
if (!PlayerAlive){
return
}

addText("");

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
 Take()

EnemyAttacks()

  if (TempTake !== undefined && GotCurse === true){
    addToCursedStats();
    console.log(CursedStats);
  }
  if (GotCurse === true){
  GotCurse = false;
  Curse++;
  CCurse++;
  }
  else if (GotItem === true){
    GotItem = false;
    Items++;
    }
    UpdateStats()
 TempTake = undefined;
allowedCommands = ['Walk'];
if (enemyExists === true){
  allowedCommands.push('Attack');
}
PlayerDies()
  };
  // Restart button (missing: Refresh page or clear board and make re-start "Start text Generation")
  document.getElementById("Restart").onclick = function() {
    location.reload();
  };
// Next button ()
  document.getElementById("Next_Level").onclick = function() {
    if (!allowedCommands.includes("Next_Level")) {
      addText("You cannot use the 'Next_Level' command at this time.\n");
      return;
      }
      document.getElementById("Game_Text").value = "";
      allowedCommands = ["Walk"];
      current_level += 1;
      if (current_level < max_levels){
        addText("Game Complete\n Total Score:" + Points)
      }
      CreateBigItem();
      ReturnCStats();
      addText("Welcome to Level " + current_level + " of " + "\ " +               // Starting Text
         max_levels + "\n" + "You can choose your next action from the commands below: \
          \n" + allowedCommands.join(", ") + "\n");
      CCurse = 0;
      PlayerEscape = false;
      TotalKER = 0;
      MaxTotalKERPerLevel = Math.floor(Math.random() * 20) + 15;
  }
