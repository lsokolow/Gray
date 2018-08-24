
function takeMe(){
  // money placed at random
  var moneyPlacex = Math.random()* 1260;

  var moneyPlacey = Math.random()* 570;
  Crafty.sprite('toddlers.png', {Toddlers:[0,0,25,34]});
  var money = Crafty.e("2D, DOM, Gravity, Collision, Toddlers")
  .gravity("Floor")
  .attr({x: moneyPlacex, y: moneyPlacey, w: 30, h: 34})

  // money placed at random

  // Crafty.e('2D,DOM,Image')

  .onHit("panda", function() {
        //if player falls, restart the game
        this.destroy();
    })
  // var moneyPlacex = Math.random()* 1260;
  //
  // var moneyPlacey = Math.random()* 570;
  // // money appears
  // Crafty.sprite('Toddlers.png', {Toddlers:[0,0,25,34]});
  // var money = Crafty.e("2D, DOM, Gravity, collision, Toddlers")
  // .gravity("Floor")
  // .attr({x: moneyPlacex, y: moneyPlacey, w: 30, h: 34})

}

function player(){
  Crafty.c('projectiles', {
    dir: 1, xspeed:10,
    // run when object is created
    init: function(){
      // Lets crafty know the object needs
      this.requires("2D, DOM, Collision, Image")
      .image("water.png")
      // logic behind movement move straight
      .bind('EnterFrame',function(){
        this.x += this.xspeed * this.dir;
        // flipping
        //   if(Crafty.math.abs(this.xspeed) != this.xspeed){this.flip('x');
        // }
        // else{
        //   this.unflip('x');
        // }


      })

    }
    // .attr({x: panda._x, y: panda._y + 0.3, w: 10, h: 20, xspeed: 8})
    //  Crafty.sprite("water.png", {water:[0,0,200,200]});
    // var water = Crafty.e("2D, DOM, Gravity, Image, water").attr({x: 100, y: 100});}
  });


  Crafty.sprite("shofiya-jerrin-panda-sprite.jpg", { dir: 1, panda:[0,0,155,250]});
  var panda = Crafty.e("2D, DOM, Twoway, Gravity, Collision, panda")
  .attr({w: 37, h: 50})
  .twoway(200)
  .gravity("Floor")
  // .onHit("Floor", function() {
  //if player falls, restart the game
  //     Crafty.scene("test");
  // });
  .bind('KeyDown', function(e){
    // if and other statements to control player
    if(e.key === Crafty.keys.UP_ARROW|| e.key === Crafty.keys.RIGHT_ARROW){
      this.dir = 1;
      this.unflip('X');
    }
    else if(e.key === Crafty.keys.LEFT_ARROW|| e.key === Crafty.keys.DOWN_ARROW){
      this.dir = -1;
      this.flip('X');
    }
    else if(e.key === Crafty.keys.SPACE){

      Crafty.e('projectiles')
      .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir});

    }
  });
  // projectiles

}

function enemy(){
  Crafty.sprite("Sprites-Raye.gif", { dir: 1, enemy:[0,0,38,81]});
  var enemy = Crafty.e("2D, DOM, Gravity, Collision, enemy")
  .attr({x: 620, y: 300, w: 40, h: 90})
  .gravity("Floor")
  // .twoway(200)
  .bind('KeyDown', function(e){
    // if and other statements to control player
    if(e.key === Crafty.keys.T){
      this.dir = 1;
      this.unflip('X');
      this.attr({y: this.y -100})
    }
    else if (e.key === Crafty.keys.H){
      this.dir = 1;
      this.unflip('X');
      this.attr({x: this.x +50})
      Craftfy.e('projectiles')
      .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir});
    }
    else if (e.key === Crafty.keys.G){
      this.dir = 1;
      this.flip('X');
      this.attr({y: this.y +100})
    }
    else if(e.key === Crafty.keys.F){
      this.dir = -1;
      this.flip('X');
      this.attr({x: this.x -50})
      Crafty.e('projectiles')
      .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir});
    }
    else if(e.key === Crafty.keys.Z||e.key === Crafty.keys.X){
      // player.sprite = 'panda';
      // player.image(player.sprite);
      Crafty.e('projectiles')
      .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir});


    }

  })
  .onHit("projectiles", function() {
        //if player falls, restart the game
        this.destroy();
      });

}

function startGame(){
  Crafty.init(1650,750, document.getElementById('game'));
  Crafty.background('url(http://brehziltile.com/g/2018/02/retro-s-wallpaper-images-nz-x-amazin-orange-uk-for-walls-50s-iphone-australia-hd-phone-tumblr.jpg)');
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 150, h:5})
  .color('blue');
  //main base
  Crafty.e('Floor, 2D, Canvas, Collision, Color')
  .attr({x: 20, y: 700, w: 1650, h:5})
  .color('gray');
  //up
  Crafty.e('Floor, 2D, Canvas, Collision, Color')
  .attr({x: 150, y: 150, w: 150, h:5})
  .color('blue');
  // villain
  Crafty.e('Floor, 2D, Canvas,Collision, Color')
  .attr({x: 500, y: 150, w: 150, h:5})
  .color('red');
  //2
  Crafty.e('Floor, 2D, Canvas,Collision, Color')
  .attr({x: 400, y: 50, w: 150, h:5})
  .color('blue');
  //3
  Crafty.e('Floor, 2D, Canvas, Collision, Color')
  .attr({x: 650, y: 250, w: 150, h:5})
  .color('blue');
  // 4
  Crafty.e('Floor, 2D, Canvas, Collision, Color')
  .attr({x: 850, y: 400, w: 150, h:5})
  .color('blue');
  // 5
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 920, y: 670, w: 150, h:5})
  .color('blue');
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 20, y:40 , w: 150, h: 5})
  .color('green');
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 630, y:560 , w: 150, h: 5})
  .color('green');
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 530, y: 400, w: 150, h: 5})
  .color('blue');
  for (var i= 0; i<10; i++){takeMe();}
  player();
  enemy();

  // buttons
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
}

// spr
