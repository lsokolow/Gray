var takeAdvantage = false;
var save = false;
var money1 = 0;
var saved = 0;

function platform(){
  var platformPlacex = Math.random()* 1270;
  var platformPlacey = Math.random()* 580;

  Crafty.e('Platform, 2D, Canvas, Color')
  .attr({x: platformPlacex, y: platformPlacey, w: 150, h: 4})
  .color('gray');
}

function takeMe(){
  // money placed at random
  var moneyPlacex = Math.random()* 4000;

  var moneyPlacey = Math.random()* 570;

  // money appears
  Crafty.sprite('dollar_sign.jpg', {money:[0,0,625,793]});
  var money = Crafty.e("2D, DOM, Gravity, Collision, money")
  .gravity("Platform")
  .attr({x: moneyPlacex, y: moneyPlacey, w: 30, h: 30})
  .onHit("floor", function() {
    //if player falls, restart the game
    this.destroy();
  })
  .onHit("walk1", function() {
    //if player falls, restart the game
    this.destroy();
    money1 += 5;
  })
  .onHit("panda", function() {
    //if player falls, restart the game
    this.destroy();
    money1 += 5;
  })
};

function saveMe(){
  // money placed at random
  var babyPlacex = Math.random()* 4000;

  var babyPlacey = Math.random()* 570;


  // money appears
  Crafty.sprite('toddlers.png', {baby:[0,0,25, 34]});
  var baby = Crafty.e("2D, DOM, Gravity, Collision, baby")
  .gravity("Platform")
  .attr({x: babyPlacex, y: babyPlacey, w: 30, h: 34})
  .onHit("floor", function() {
    //if player falls, restart the game
    this.destroy();
  })
  .onHit("walk1", function() {
    //if player falls, restart the game
    this.destroy();
    saved += 1;
  })
};

Crafty.c('projectiles', {
  dir: 1, xspeed:10,
  // run when object is created
  init: function(){
    // Lets crafty know the object needs
    this.requires("2D, DOM, Collision, Image")
    .image("fire.png")
    // logic behind movement move straight
    .bind('EnterFrame',function(){
      this.x += this.xspeed * this.dir;
  })
}
});



Crafty.defineScene("test", function(){
  money1 = 0;
  saved = 0;
  var direction = 1;
  var direction1 = 1;
  var direction2 = 1;
  Crafty.log(takeAdvantage)
  Crafty.init(1650,750, document.getElementById('game'))
  Crafty.background('url(city2.jpg)');
  //for (var i= 0; i<7; i++){platform(0,630, 40, 290);}
  //for (var i= 0; i<6; i++){platform(650,1240, 310,570);}
  Crafty.e('2D, Canvas, Color, Platform')
  .attr({x: 500, y: 600, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform')
  .attr({x: 700, y: 400, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform')
  .attr({x: 1000, y: 200, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform')
  .attr({x: 100, y: 600, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform')
  .attr({x: 1200, y: 600, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform')
  .attr({x: 1500, y: 700, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform')
  .attr({x: 1700, y: 500, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform')
  .attr({x: 2000, y: 400, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform,')
  .attr({x: 2200, y: 300, w: 200, h: 10})
  .color('gray')
  .bind("EnterFrame", function(){
    if ((this.x <= 2700) && (this.x >= 2200)) {
      this.x += direction1
    }
    if ((this.x == 2700) || (this.x == 2200)){
      direction1 *= -1

    }
  });
  Crafty.e('2D, Canvas, Color, Platform,')
  .attr({x: 2900, y: 400, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform,')
  .attr({x: 3100, y: 700, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform,')
  .attr({x: 3400, y: 300, w: 200, h: 10})
  .color('gray');
  Crafty.e('2D, Canvas, Color, Platform,')
  .attr({x: 3700, y: 600, w: 200, h: 10})
  .color('gray');
Crafty.e('2D, Canvas, Color, Platform,')
  .attr({x: 4100, y: 400, w: 200, h: 10})
  .color('gray');

  Crafty.e('2D, Canvas, Color, solid')
  .attr({x: 0, y: 0, w: 10, h: 750})
  Crafty.e('2D, Canvas, floor')
  .attr({x: 0, y: 800, w: 5000, h: 10})
  Crafty.sprite("sprite.png", {villain:[0,0,100,136]})
  /*Crafty.e("2D, Canvas, villain, Gravity, DOM, enemy")
  .attr({x: 500, y: 600})
  .gravity('Platform')
  .bind("EnterFrame", function(){
  if ((this.x <= 700) && (this.x >= 500)) {
  this.x += direction
}
if ((this.x == 700) || (this.x == 500)){
direction *= -1

}
});*/
Crafty.sprite("flag_sprite.png", {flag:[0,0,77,112]})
Crafty.e("2D, Canvas, flag, Gravity, DOM, end")
.attr({x: 4200, y: 400})
.gravity('Platform');

if (takeAdvantage == true){
  for(var i = 0; i < 30; i++){
    takeMe();
  };

var scoreText = Crafty.e("2D, DOM, Text")
  .attr({x: Crafty.viewport.x + 500, y: Crafty.viewport.y + 10 })
  .textAlign("center")
  .textColor("#c1c1c1")
  .bind('EnterFrame', function(){
    this.x = -Crafty.viewport.x + 500;
    this.y = -Crafty.viewport.y + 10;
    this.text("Money: " + money1)
    })
  scoreText.textFont({
    size: '30px',
    type: 'italic'});

};
Crafty.log(takeAdvantage);
Crafty.log(save);


if (save == true){
  for(var i = 0; i < 30; i++){
    saveMe();
  };

var saveText = Crafty.e("2D, DOM, Text")
  .attr({x: Crafty.viewport.x + 500, y: Crafty.viewport.y + 10 })
  .textAlign("center")
  .textColor("#c1c1c1")
  .bind('EnterFrame', function(){
    this.x = -Crafty.viewport.x + 500;
    this.y = -Crafty.viewport.y + 10;
    this.text("People Saved: " + saved)
    })
  saveText.textFont({
    size: '30px',
    type: 'italic'});

};

Crafty.sprite(400, 200, "cat_sprites.png", {dir: 1, health:10, walk1:[0,0], walk2:[0,1], walk3:[0,2], walk4:[0,3],
  walk5:[0,4], walk6:[0,5], walk7:[0,6], walk8:[0,7], walk9:[0,8], walk10:[0,9], walk11:[0,10], walk12:[0,11],
  idle1:[1,0], idle2:[1,1], idle3:[1,2], idle4:[1,3], idle5:[1,4], idle6:[1,5],
  jump4:[2,3],  jump5:[2,4], jump6:[2,5], jump7:[2,6], jump8:[2,7], jump9:[2,8], trans1:[2,0], trans2:[2,1],
  trans3:[2,2], trans10:[2,9], trans11:[2,10], trans12:[2,11],run1:[3,0], run2:[3,1],
  run3:[3,2], run4:[3,3],  run5:[3,4], run6:[3,5], run7:[3,6], run8:[3,7], run9:[3,8],
  run10:[3,9], run11:[3,10], run12:[3,11], run13:[3,12]});
  var cat = Crafty.e("2D, Canvas, walk1, Twoway, Gravity, DOM, Collision, SpriteAnimation, GroundAttacher")
  .reel("walk", 1000, ['walk1', 'walk2', 'walk3', 'walk4', 'walk5', 'walk6', 'walk7', 'walk8',
  'walk9', 'walk10','walk11', 'walk12',])

  .reel("idle", 1000, ['idle1', 'idle2', 'idle3', 'idle4', 'idle5', 'idle6',])

  .reel("jump", 1000, ['jump4', 'jump5', 'jump6', 'jump7', 'jump8', 'jump9','walk4'])

  .reel("transition", 1000, ['trans1', 'trans2', 'trans3', 'jump4', 'jump5', 'jump6', 'jump7', 'jump8',
  'jump9', 'trans0','trans11', 'trans12'])

  .reel("run", 1000, ['run1', 'run2', 'run3', 'run4', 'run5', 'run6', 'run7', 'run8',
  'run9', 'run0','run11', 'run12','run13'])

  .attr({x: 50, y: 0, w:200, h:100, health:10})
  .twoway(200)
  .gravity('Platform')
  .origin(200,100)
  .collision()
  .onHit("floor", function() {
    //if player falls, restart the game
    Crafty.scene("test");
  })
  .onHit("enemy", function() {
    this.health -= 1;
    if(this.health <= 0){
      Crafty.scene("test")
    }
  })
  .onHit("end", function() {
    //if player falls, restart the game
    Crafty.scene("level2");
  })

  .bind('KeyDown', function(evt) {
    if (evt.key == Crafty.keys.ENTER) {
      this.animate('run', -1)
      this.twoway(300);
    }
    else {
      this.twoway(200);
    }

    if (evt.key == Crafty.keys.LEFT_ARROW) {
      this.dir = -1;
      this.unflip()
      this.animate("walk", -1);
    }
    if (evt.key == Crafty.keys.RIGHT_ARROW) {
      this.dir = 1;
      this.flip()
      this.animate("walk", -1);
    }
    if (evt.key == Crafty.keys.UP_ARROW ) {
      this.animate("jump", 1);
    }



    if (evt.key == Crafty.keys.SPACE){
      Crafty.e('projectiles')
      .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir})
      .onHit("enemy", function() {
        //if player falls, restart the game
        this.destroy();
      });
    }
  })

  .bind('KeyUp', function(evt) {
    if ((evt.key == Crafty.keys.LEFT_ARROW) ||
    (evt.key == Crafty.keys.RIGHT_ARROW) ||
    (evt.key == Crafty.keys.ENTER)){
      this.pauseAnimation();
    }
    if ((evt.key == Crafty.keys.LEFT_ARROW) &&
    (evt.key == Crafty.keys.RIGHT_ARROW) &&
    (evt.key == Crafty.keys.UP_ARROW)) {
      this.animate("idle", 1);
    }
  });
  Crafty.viewport.follow(cat, 0,0)
  Crafty.viewport.scale(1.25)

  Crafty.sprite(47, 45, "dog_sprites.png", {dog1:[0,2], dog2:[1,2], dog3:[2,2]});
  Crafty.e("2D, Canvas, dog1, Gravity, DOM, Collision, SpriteAnimation, enemy")

  .reel("dog", 500, ['dog1', 'dog2', 'dog3', 'dog1', 'dog2', 'dog3',])
  .attr({x: 1200, y: 600 , w:94, h:90})
  .gravity('Platform')
  .animate("dog", -1)
  .bind("EnterFrame", function(){
    if ((this.x <= 1400) && (this.x >= 1200)) {
      this.x += direction2
    }
    if ((this.x == 1400) || (this.x == 1200)){
      direction2 *= -1
    }
    if (direction2 == -1){
      this.flip()
    }
    if (direction2 == 1){
      this.unflip()
    }
  })
  .onHit("projectiles", function() {
      //if player falls, restart the game
      this.destroy();
    });

  Crafty.sprite(47, 45, "dog_sprites.png", {dog1:[0,2], dog2:[1,2], dog3:[2,2]});
  Crafty.e("2D, Canvas, dog1, Gravity, DOM, Collision, SpriteAnimation, enemy")
  .reel("dog", 500, ['dog1', 'dog2', 'dog3', 'dog1', 'dog2', 'dog3',])
  .attr({x: 2900, y: 400 , w:94, h:90})
  .gravity('Platform')
  .animate("dog", -1)
  .bind("EnterFrame", function(){
    if ((this.x <= 3100) && (this.x >= 2900)) {
      this.x += direction2
    }
        if ((this.x == 3100) || (this.x == 2900)){
      direction2 *= -1
    }
    if (direction2 == -1){
            this.flip()
    }
    if (direction2 == 1){
      this.unflip()
    }
  })
  .onHit("projectiles", function() {
      //if player falls, restart the game
      this.destroy();
    });
Crafty.sprite(47, 45, "dog_sprites.png", {dog1:[0,2], dog2:[1,2], dog3:[2,2]});
Crafty.e("2D, Canvas, dog1, Gravity, DOM, Collision, SpriteAnimation, enemy")
    .reel("dog", 500, ['dog1', 'dog2', 'dog3', 'dog1', 'dog2', 'dog3',])
    .attr({x: 1000, y: 200 , w:94, h:90})
    .gravity('Platform')
    .animate("dog", -1)
    .bind("EnterFrame", function(){
      if ((this.x <= 1200) && (this.x >= 1000)) {
        this.x += direction2
      }
      if ((this.x == 1200) || (this.x == 1000)){
        direction2 *= -1
      }
      if (direction2 == -1){
        this.flip()
      }
      if (direction2 == 1){
        this.unflip()
      }
    })
    .onHit("projectiles", function() {
        //if player falls, restart the game
        this.destroy();
      });


  Crafty.sprite("pause_button.png", {Pause:[0,0,300,270]});
  Crafty.e("2D, Canvas, Pause, Mouse")
  .attr({x: Crafty.viewport.x + 10, y:Crafty.viewport.y + 10, w: 40, h: 40})
  .bind('Click', function(MouseEvent){
    Crafty.pause();
  })
  .bind('EnterFrame', function(){
    this.x = -Crafty.viewport.x + 10;
    this.y = -Crafty.viewport.y + 10;
  });

  Crafty.sprite("restart_button.png", {Restart:[0,0,300,270]});
  Crafty.e("2D, Canvas, Restart, Mouse")
  .attr({x:Crafty.viewport.x + 60, y:Crafty.viewport.y + 10, w: 40, h: 40})
  .bind('Click', function(MouseEvent){
    Crafty.scene("test");
  })
  .bind('EnterFrame', function(){
    this.x = -Crafty.viewport.x + 60;
    this.y = -Crafty.viewport.y + 10;
  });


  Crafty.sprite("exit_button.png", {Exit:[0,0,300,270]});
  Crafty.e("2D, Canvas, Exit, Mouse")
  .attr({x:Crafty.viewport.x + 110, y: Crafty.viewport.y + 10, w: 40, h: 40})
  .bind('Click', function(MouseEvent){
    Crafty.scene("start");
  })
  .bind('EnterFrame', function(){
    this.x = -Crafty.viewport.x + 110;
    this.y = -Crafty.viewport.y + 10;
  });

  Crafty.audio.add("Music", "50_Super_Hero.mp3");
  Crafty.audio.play("Music")

  Crafty.sprite("music_button.png", {Pause:[0,0,300,270]});
  Crafty.e("2D, Canvas, Pause, Mouse")
  .attr({x: Crafty.viewport.x + 160, y: Crafty.viewport.y + 10, w: 40, h: 40})
  .bind('Click', function(MouseEvent){
    Crafty.audio.toggleMute();
  })
  .bind('EnterFrame', function(){
    this.x = -Crafty.viewport.x + 160;
    this.y = -Crafty.viewport.y + 10;
  });
});
//http://stash.rachelnabors.com/img/codepen/tuna_sprite.png

Crafty.defineScene("lvl2", function(){
  money1 = 0;
  saved = 0;
  var direction = 1;
  var direction1 = 1;
  var direction2 = 1;

  Crafty.init(1650,750, document.getElementById('game'));
  Crafty.background('url(city3.jpg)');
  //crafty.sprite('url(https://vignette.wikia.nocookie.net/typemoon/images/7/7a/Artoria%27s_Mysterious_Heroine_Clothes.png/revision/latest?cb=20170123154123)');
  for (var i= 0; i<15; i++){platform();}
  Crafty.e('Platform, 2D, Canvas, Color')
  .attr({x: 40, y:40 , w: 150, h: 5})
  .color('gray');
  Crafty.e('Platform, 2D, Canvas, Color')
  .attr({x: 630, y:560 , w: 150, h: 5})
  .color('gray');
  Crafty.e('Platform, 2D, Canvas, Color')
  .attr({x: 0, y: 585, w: 1280, h: 5})
  .color('gray');
  Crafty.e('Platform, 2D, Canvas, Color')
  .attr({x: 630, y: 300, w: 150, h: 5})
  .color('gray');
  for (var i= 0; i<8; i++){takeMe();}
Crafty.sprite("flag_sprite.png", {flag:[0,0,77,112]})
Crafty.e("2D, Canvas, flag, Gravity, DOM, end")
.attr({x: 4200, y: 400})
.gravity('Platform');

var scoreText = Crafty.e("2D, DOM, Text")
  .attr({x: Crafty.viewport.x + 500, y: Crafty.viewport.y + 10 })
  .textAlign("center")
  .textColor("#c1c1c1")
  .bind('EnterFrame', function(){
    this.x = -Crafty.viewport.x + 500;
    this.y = -Crafty.viewport.y + 10;
    this.text("Money: " + money1)
    })
  scoreText.textFont({
    size: '30px',
    type: 'italic'});



      var enemyPlacex = Math.random()* 1260;

      var enemyPlacey = Math.random()* 570;

      Crafty.sprite("Sprite.png", { dir: 1,  health: 10, enemy:[0,0,100,136]});
      var enemy = Crafty.e("2D, DOM, Gravity, Collision, enemy")
      .attr({x: enemyPlacex, y: enemyPlacey, w: 40, h: 90,  health: 10})
      .gravity("Floor")
      .bind('EnterFrame', function(){
        var enemyPlacex = Math.random()* 1260;

        var enemyPlacey = Math.random()* 570;
        this.x = enemyPlacex;
        this.y = enemyPlacey;

      })

      .onHit("projectiles", function(){
        // e[0].obj.health -= 1;
        this.health -= 1;
        if (this.health <= 0){
          this.destroy()
          Crafty.scene("start");
        }
      });

Crafty.sprite("panda-sprite.jpg", {dir: 1, health: 10, panda:[0,0,155,250],});
  var panda = Crafty.e("2D, Canvas, panda, Twoway, Gravity, DOM, Collision, GroundAttacher")
  .attr({x: 50, y: 0, w: 37, h: 50, health: 10})
  .twoway(200)
  .gravity('Platform')
  .origin(200,100)
  .collision()
  .onHit("floor", function() {
    //if player falls, restart the game
    Crafty.scene("lvl2");
  })
  .onHit("enemy", function() {
    this.health -= 1;
    if(this.health <= 0){
      Crafty.scene("lvl")
    }
  })
  .onHit("end", function() {
    //if player falls, restart the game
    Crafty.scene("level2");
  })

  .bind('KeyDown', function(evt) {
    if (evt.key == Crafty.keys.ENTER) {
      this.twoway(300);
    }
    else {
      this.twoway(200);
    }

    if (evt.key == Crafty.keys.LEFT_ARROW) {
      this.dir = -1;
      this.unflip()
    }
    if (evt.key == Crafty.keys.RIGHT_ARROW) {
      this.dir = 1;
      this.flip()
    }



    if (evt.key == Crafty.keys.SPACE){
      Crafty.e('projectiles')
      .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir})
      .onHit("enemy", function() {
        //if player falls, restart the game
        this.destroy();
      });
    }
  })

  Crafty.viewport.follow(panda, 0,0)
  Crafty.viewport.scale(1.25)


      Crafty.sprite("pause_button.png", {Pause:[0,0,300,270]});
      Crafty.e("2D, Canvas, Pause, Mouse")
      .attr({x: Crafty.viewport.x + 10, y:Crafty.viewport.y + 10, w: 40, h: 40})
      .bind('Click', function(MouseEvent){
        Crafty.pause();
      })
      .bind('EnterFrame', function(){
        this.x = -Crafty.viewport.x + 10;
        this.y = -Crafty.viewport.y + 10;
      });

      Crafty.sprite("restart_button.png", {Restart:[0,0,300,270]});
      Crafty.e("2D, Canvas, Restart, Mouse")
      .attr({x:Crafty.viewport.x + 60, y:Crafty.viewport.y + 10, w: 40, h: 40})
      .bind('Click', function(MouseEvent){
        Crafty.scene("test");
      })
      .bind('EnterFrame', function(){
        this.x = -Crafty.viewport.x + 60;
        this.y = -Crafty.viewport.y + 10;
      });


      Crafty.sprite("exit_button.png", {Exit:[0,0,300,270]});
      Crafty.e("2D, Canvas, Exit, Mouse")
      .attr({x:Crafty.viewport.x + 110, y: Crafty.viewport.y + 10, w: 40, h: 40})
      .bind('Click', function(MouseEvent){
        Crafty.scene("start");
      })
      .bind('EnterFrame', function(){
        this.x = -Crafty.viewport.x + 110;
        this.y = -Crafty.viewport.y + 10;
      });

      Crafty.audio.add("Music", "50_Super_Hero.mp3");
      Crafty.audio.play("Music")

      Crafty.sprite("music_button.png", {Pause:[0,0,300,270]});
      Crafty.e("2D, Canvas, Pause, Mouse")
      .attr({x: Crafty.viewport.x + 160, y: Crafty.viewport.y + 10, w: 40, h: 40})
      .bind('Click', function(MouseEvent){
        Crafty.audio.toggleMute();
      })
      .bind('EnterFrame', function(){
        this.x = -Crafty.viewport.x + 160;
        this.y = -Crafty.viewport.y + 10;
      });
});



Crafty.defineScene("start", function(){
  Crafty.init(1650,750, document.getElementById('game'));
  Crafty.background('url(background.jpg)');
  var startText = Crafty.e("2D, DOM, Text")
  .attr({ w: 1000, h: 1000, x: 300, y: 120 })
  .text("Gray")
  .textAlign("center")
  .textColor("white");
  startText.textFont({
    size: '90px',
    type: 'italic'});
  var buttonText = Crafty.e("2D, DOM, Text, Mouse")
    .attr({ w: 1000, h: 1000, x: 300, y: 300 })
    .text("Start")
    .textAlign("center")
    .textColor("white")
    .bind('Click', function(MouseEvent){
      Crafty.scene("tutorial");
    });
    buttonText.textFont({
      size: '50px',
      type: 'italic'});
    });

Crafty.defineScene("level1", function(){
  Crafty.init(1650,750, document.getElementById('game'));
  Crafty.background('url(background.jpg)');
  takeAdvantage = false;
  save = false;
  var tutorialText = Crafty.e("2D, DOM, Text")
    .attr({ w: 1000, h: 1000, x: 350, y: 120 })
    .text("Level 1")
    .textAlign("center")
    .textColor("white");
  tutorialText.textFont({
    size: '80px',
    type: 'italic'});
  var storyText = Crafty.e("2D, DOM, Text")
    .attr({ w: 1000, h: 1000, x: 350, y: 240 })
    .text("As a teen in high school its hard to juggle school, sports and extracuriculars, especially with villains running around causing trouble. You are out walking when you see a burning building with people trapped inside. Near the building is a bank and you notice everyone is walking out and are distracted by the commotion. Are you going to save the people trapped? Or take advantage of the distraction and rob the bank?")
    .textAlign("center")
    .textColor("white");
    storyText.textFont({
      size: '40px',
      type: 'italic'});
  var button1 = Crafty.e("2D, DOM, Text, Mouse")
      .attr({ w: 1000, h: 1000, x: 600, y: 675 })
      .text("Save")
      .textAlign("center")
      .textColor("purple")
      .bind('Click', function(MouseEvent){
        save = true;
        Crafty.scene("test");
      });
    button1.textFont({
        size: '40px',
        type: 'italic'});
  var button2 = Crafty.e("2D, DOM, Text, Mouse")
        .attr({ w: 1000, h: 1000, x: 100, y: 675 })
        .text("Take Advantage")
        .textAlign("center")
        .textColor("purple")
        .bind('Click', function(MouseEvent){
          takeAdvantage = true;
            Crafty.scene("test");
        });
  button2.textFont({
      size: '40px',
      type: 'italic'});
  Crafty.log(takeAdvantage);
});




Crafty.defineScene("level2", function(){
  Crafty.init(1650,750, document.getElementById('game'));
  Crafty.background('url(background.jpg)');
  var tutorialText = Crafty.e("2D, DOM, Text")
    .attr({ w: 1000, h: 1000, x: 350, y: 120 })
    .text("Level2")
    .textAlign("center")
    .textColor("white");
  tutorialText.textFont({
    size: '80px',
    type: 'italic'});
  var storyText = Crafty.e("2D, DOM, Text")
    .attr({ w: 1000, h: 1000, x: 350, y: 240 })
    .text("You're at the bus stop coming home from a game at 7pm. All the sudden a figure appears and collaspes on the seat out of breath and limping. You recognize them as the villain NightCry who mostly trgets any place with money. You see how hurt the villain is and hear heroes and the police persuing them. Will you help the villain escape? Or help the police catch them?")
    .textAlign("center")
    .textColor("white");
  storyText.textFont({
      size: '40px',
      type: 'italic'});
  var button = Crafty.e("2D, DOM, Text, Mouse")
      .attr({ w: 1000, h: 1000, x: 350, y: 675 })
      .text("Next")
      .textAlign("center")
      .textColor("black")
      .bind('Click', function(MouseEvent){
        Crafty.scene("lvl2");
      });
    button.textFont({
        size: '40px',
        type: 'italic'});
      });

Crafty.defineScene("tutorial", function(){
  Crafty.init(1650,750, document.getElementById('game'));
  Crafty.background('url(background.jpg)');
  var tutorialText = Crafty.e("2D, DOM, Text")
    .attr({ w: 1000, h: 1000, x: 350, y: 120 })
    .text("Tutorial")
    .textAlign("center")
    .textColor("white");
  tutorialText.textFont({
    size: '80px',
    type: 'italic'});
  Crafty.sprite("arrow_keys.png", {arrow:[0,0,216,167]});
  Crafty.e('arrow, 2D, Canvas')
    .attr({x: 400, y: 240 });
  Crafty.sprite("spacebar.jpg", {space:[0,0,188,188]});
  Crafty.e('space, 2D, Canvas')
    .attr({x: 1100, y: 240 });
  Crafty.sprite("KA-US-20874.jpg", {buttons:[0,0,348,331]});
  Crafty.e('buttons, 2D, Canvas')
    .attr({w:174, h:165, x: 700, y: 240});
  var spaceText = Crafty.e("2D, DOM, Text")
    .attr({ w: 1000, h: 1000, x: 700, y: 440 })
    .text("Press the spacebar to use your abilities.")
    .textAlign("center")
    .textColor("white");
  spaceText.textFont({
      size: '20px',
      type: 'italic'});
  var spaceText = Crafty.e("2D, DOM, Text")
        .attr({ w: 1000, h: 1000, x: 0, y: 440 })
        .text("To move the villain character use (T,F,G,H) and use(X,Z) to use villain character abilities.")
        .textAlign("center")
        .textColor("white");
  spaceText.textFont({
          size: '20px',
          type: 'italic'});
  var storyText = Crafty.e("2D, DOM, Text")
      .attr({ w: 1000, h: 1000, x: 350, y: 500 })
      .text("There will be different scenarios and you will be given choices. Depending on the scenarios the objective is to collect the items or people and defeat the enemy to move on to the next level. You will have to collect the tokens and capture the enemy in order to win.")
      .textAlign("center")
      .textColor("white");
  storyText.textFont({
        size: '30px',
        type: 'italic'});
  var button = Crafty.e("2D, DOM, Text, Mouse")
        .attr({ w: 1000, h: 1000, x: 350, y: 675 })
        .text("Next")
        .textAlign("center")
        .textColor("black")
        .bind('Click', function(MouseEvent){
          Crafty.scene("level1");
        });
  button.textFont({
          size: '30px',
          type: 'italic'});
        });
