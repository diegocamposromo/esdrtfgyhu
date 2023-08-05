var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["061f1ab9-7701-49b4-9537-9b9b11aa0277","c707751f-8d0f-43da-b901-85e8d5a55b88","e416cdc1-beee-4cdd-8c6e-2bb247b3505d","0729c77a-4aac-4d32-898e-5469c29c4ed6"],"propsByKey":{"061f1ab9-7701-49b4-9537-9b9b11aa0277":{"name":"avion","sourceUrl":null,"frameSize":{"x":84,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"KWa3lYSa7C0w1c1Jvacvf6iD5N8RDb_D","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":45},"rootRelativePath":"assets/061f1ab9-7701-49b4-9537-9b9b11aa0277.png"},"c707751f-8d0f-43da-b901-85e8d5a55b88":{"name":"balla","sourceUrl":null,"frameSize":{"x":55,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"V8yZF8gfZ1YceKjOuduhaDCA1MjrjEbM","loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":52},"rootRelativePath":"assets/c707751f-8d0f-43da-b901-85e8d5a55b88.png"},"e416cdc1-beee-4cdd-8c6e-2bb247b3505d":{"name":"explocion","sourceUrl":null,"frameSize":{"x":91,"y":86},"frameCount":4,"looping":true,"frameDelay":12,"version":"b0wAzT3RaiVE1.VH2r3tGNE7tlpe8wee","loadedFromSource":true,"saved":true,"sourceSize":{"x":182,"y":172},"rootRelativePath":"assets/e416cdc1-beee-4cdd-8c6e-2bb247b3505d.png"},"0729c77a-4aac-4d32-898e-5469c29c4ed6":{"name":"nube","sourceUrl":null,"frameSize":{"x":41,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"cWbopM3Nema5v0nAkBXKnuxj0xHa3P2s","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":24},"rootRelativePath":"assets/0729c77a-4aac-4d32-898e-5469c29c4ed6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var dalas = createGroup();
var avion = createSprite(400, 200, 10, 15);
avion.setAnimation("avion");
var gameState ="serve";


function draw() {
  
  background("black");
  

    
  
  
  
   if(gameState == "serve")
  {
    
    
    
text("esquiva las balas", 0, 15);
        
    gameState="play"
  }
  
  if(gameState == "play")
  {
    if (keyDown("up")) {
      avion.y=avion.y-10;
    } else if ((keyDown("down"))) {
      avion.y=avion.y+10;
    }
    if (keyDown("left")) {
    avion.x=avion.x-10;
} else if ((keyDown("right"))) {
    avion.x=avion.x+10;
}
    createEdgeSprites()
    
avion.bounceOff(bottomEdge);
avion.bounceOff(topEdge);
avion.bounceOff(leftEdge);
avion.bounceOff(rightEdge);
     

    balas();
     
    if(dalas.bounceOff(avion)){
  gameState="end";
    avion.destroy();
    playSound("assets/category_explosion/8bit_explosion.mp3", false);

}
    sprite();
    function balas() {
      if(World.frameCount%10 === 0){
      y= Math.round(random(0,400));
      
      var bala = createSprite(0,y, 10,10);
      bala.setAnimation("balla");
      bala.scale=0.1;
      var x, y;
      bala.velocityX = 5;
      dalas.add(bala);
      
      
      }
    }
  }
  
  if(gameState == "end")
  {
  text("perdiste", 200, 200, 300, 300);
       
  }
  
  
  function sprite(){
    drawSprites();
  }
  
}
 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
