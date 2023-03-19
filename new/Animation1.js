/* Create the application
const app = new PIXI.Application({
    width: window.innerWidth, // Width of canvas set to window width
    height: window.innerHeight, // Height of canvas set to window height
    backgroundColor: 0x1099bb // Background color in hex
});

// Add the canvas to the HTML document
document.body.appendChild(app.view);

// Load the background image and create a sprite
const backgroundTexture = PIXI.Texture.from('/Sprites/Free Pixel Art Forest/Preview/Background-export.png');
const background = new PIXI.Sprite(backgroundTexture);
background.width = window.innerWidth;
background.height = window.innerHeight;
app.stage.addChild(background);

// Create a rectangle sprite
const rectangle = new PIXI.Graphics();
rectangle.beginFill(0xFF0000); // Fill color in hex
rectangle.drawRect(0, 0, 100, 100); // Draw a rectangle at (0,0) with width 100 and height 100
rectangle.endFill(); // End the fill

// Add the rectangle sprite to the stage
app.stage.addChild(rectangle);
rectangle.anchor.set(0.5, 1);
// Resize the canvas when the window is resized
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    if (background) {
        background.width = window.innerWidth;
        background.height = window.innerHeight;
    }
});

// Render the stage
app.renderer.render(app.stage); */
const app = new PIXI.Application({ background: '#1099bb' });
document.body.appendChild(app.view);

// create a new Sprite from an image path
const bunny = new PIXI.Graphics();

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
});
