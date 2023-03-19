let Test = true;
var app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
document.body.appendChild(app.view);

var originalHeight = app.renderer.height;

window.addEventListener("resize", function() {
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // Scale all objects in the stage based on the new window height
    var scale = app.renderer.height / originalHeight;
    app.stage.scale.x = scale;
    app.stage.scale.y = scale;
});
var bgTexture = PIXI.Texture.from("/Sprites/Free Pixel Art Forest/Preview/Background-export.png");
var bg1 = new PIXI.Sprite(bgTexture);
var bg2 = new PIXI.Sprite(bgTexture);
bg1.width = app.screen.width;
bg1.height = app.screen.height;
bg2.width = app.screen.width;
bg2.height = app.screen.height;
bg1.x = 0;
bg1.y = 0;
bg2.x = bg1.width;
bg2.y = 0;
bg1.tileMode = PIXI.WRAP_MODES.REPEAT;
bg2.tileMode = PIXI.WRAP_MODES.REPEAT;

app.stage.addChild(bg1);
app.stage.addChild(bg2);

app.ticker.add(function() {
    if (Test === !true){
        bg1.x -= 0;
        bg2.x -= 0;
    }
    else {
    bg1.x -= 5;
    bg2.x -= 5;
    }
    if (bg1.x <= -bg1.width) {
        bg1.x = bg2.x + bg2.width;
    }
    if (bg2.x <= -bg2.width) {
        bg2.x = bg1.x + bg1.width;
    }
});


var loader = new PIXI.Loader();
loader.add("PlayerIdleSprites", "/Sprites/done/adventurer-v1.5-Sheet-sheet.png");
loader.add("PlayerIdleData", "/Sprites/done/adventurer-v1.5-Sheet.json");
loader.add("Curses", "/Sprites/Curse-Sheet.png");
loader.add("CursesData", "/Sprites/Curse.json")

loader.load(setup);

function setup() {
  var frames = [];
  for (var i = 0; i < 4; i++) {
      var texture = PIXI.Texture.from("Idle " + i + ".png");
      frames.push(texture);
  }
  var PlayerIdle = new PIXI.AnimatedSprite(frames);
  app.stage.addChild(PlayerIdle);
  PlayerIdle.animationSpeed = 1/8;
  app.stage.addChild(PlayerIdle);
  PlayerIdle.scale.x = 1;
  PlayerIdle.scale.y = 1;
  PlayerIdle.y = 500
  PlayerIdle.play();
}


loader.load(setup2);    

function setup2() {
  var frames = [];
  for (var i = 0; i < 6; i++) {
      var texture2 = PIXI.Texture.from("Run " + i + ".png");
      frames.push(texture2);
  }
  var PlayerRun = new PIXI.AnimatedSprite(frames);
  app.stage.addChild(PlayerRun);
  PlayerRun.animationSpeed = 1/8;
  app.stage.addChild(PlayerRun);
  PlayerRun.ancor = 0.5;
  PlayerRun.x = app.renderer.width / 2;
  PlayerRun.y = app.renderer.height / 2;
  PlayerRun.scale.x = 1;
  PlayerRun.scale.y = 1;
  PlayerRun.play();
}

loader.load(setup3);

function setup3() {
  var frames = [];
  for (var i = 0; i < 4; i++) {
      var texture3 = PIXI.Texture.from("Idle-1 " + i + ".png");
      frames.push(texture3);
  }
  var PlayerIdle1 = new PIXI.AnimatedSprite(frames);
  app.stage.addChild(PlayerIdle1);
  PlayerIdle1.animationSpeed = 1/8;
  app.stage.addChild(PlayerIdle1);
  PlayerIdle1.x = 50;
  PlayerIdle1.y = 500;
  PlayerIdle1.scale.x = 1;
  PlayerIdle1.scale.y = 1;
  PlayerIdle1.play();
}
loader.load(setup4);

function setup4() {
var frames = [];
for (var i = 0; i < 6; i++) {
    var texture3 = PIXI.Texture.from("Attack0 " + i + ".png");
    frames.push(texture3);
}

if (Test === true) {
    for (var i = 0; i < 11; i++) {
    var texture3 = PIXI.Texture.from("AttackCombo " + i + ".png");
    frames.push(texture3);
    }
}
  var PlayerAttack = new PIXI.AnimatedSprite(frames);
  app.stage.addChild(PlayerAttack);
  PlayerAttack.animationSpeed = 1/8;
  app.stage.addChild(PlayerAttack);
  PlayerAttack.x = 155;
  PlayerAttack.y = 500;
  PlayerAttack.scale.x = 1;
  PlayerAttack.scale.y = 1;
  PlayerAttack.play();
}
loader.load(setup5);

function setup5() {
    var frames = [];
    for (var i = 0; i < 3; i++) {
        var texture3 = PIXI.Texture.from("Hurt " + i + ".png");
        frames.push(texture3);
    }
    
    if (Test === true) {
        for (var i = 0; i < 4; i++) {
        var texture3 = PIXI.Texture.from("Dead " + i + ".png");
        frames.push(texture3);
    }
    }
      var PlayerAttack = new PIXI.AnimatedSprite(frames);
      app.stage.addChild(PlayerAttack);
      PlayerAttack.animationSpeed = 1/8;
      app.stage.addChild(PlayerAttack);
      PlayerAttack.x = 155;
      PlayerAttack.y = 40;
      PlayerAttack.scale.x = 1;
      PlayerAttack.scale.y = 1;
      PlayerAttack.play();
    }

loader.load(setup6);

function setup6() {
  var frames = [];
  for (var i = 0; i < 4; i++) {
      var texture3 = PIXI.Texture.from("Encounter " + i + ".png");
      frames.push(texture3);
  }
  var Encounter = new PIXI.AnimatedSprite(frames);
  app.stage.addChild(Encounter);
  Encounter.animationSpeed = 1/8;
  app.stage.addChild(Encounter);
  Encounter.x = 50;
  Encounter.y = 300;
  Encounter.scale.x = 1;
  Encounter.scale.y = 1;
  Encounter.play();
}
loader.load(setup8);

function setup8() {
    var frames = [];
    for (var i = 0; i < 6; i++) {
    var texture = PIXI.Texture.from("Curse " + i + ".png");
    frames.push(texture);
    }

    var Curses = new PIXI.AnimatedSprite(frames);
    app.stage.addChild(Curses);
    Curses.animationSpeed = 1/8;
    Curses.x = 150;
    Curses.y = 300;
    Curses.scale.x = 0.3;
    Curses.scale.y = 0.3;
    Curses.loop = false
    Curses.play()
}
loader.load(setup7);

function setup7() {
  var frames = [];
  for (var i = 0; i < 3; i++) {
      var texture3 = PIXI.Texture.from("EncounterFinished " + i + ".png");
      frames.push(texture3);
  }
  var Encounter = new PIXI.AnimatedSprite(frames);
  app.stage.addChild(Encounter);
  Encounter.animationSpeed = 1/8;
  app.stage.addChild(Encounter);
  Encounter.x = 150;
  Encounter.y = 300;
  Encounter.scale.x = 1;
  Encounter.scale.y = 1;
  Encounter.play();
}
