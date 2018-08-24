// background
function platform(fromX, toX, fromY, toY){
  var platformPlacex = Math.random()* (toX - fromX) + fromX;

  var platformPlacey = Math.random()* (toY - fromY) + fromY;

  Crafty.e('Floor, 2D, Canvas, Color, Collision')
  .attr({x: platformPlacex, y: platformPlacey, w: 150, h: 4})
  .color('red');



}
// tokens to win game/ money

function takeMe(){
  // money placed at random
  var moneyPlacex = Math.random()* 1260;

  var moneyPlacey = Math.random()* 570;
  Crafty.sprite('kisspng-dollar-sign-scalable-vector-graphics-symbol-vector-money-symbol-5a9a2892a62144.2469602515200523706805.jpg', {money:[0,0,625,793]});
  var money = Crafty.e("2D, DOM, Gravity, Collision, money")
  .gravity("Floor")
  .attr({x: moneyPlacex, y: moneyPlacey, w: 30, h: 30})

  // money placed at random

  // Crafty.e('2D,DOM,Image')

  .onHit("panda", function() {
        //if player falls, restart the game
        this.destroy();
    })


}




function player(){
  Crafty.c('projectiles', {
    dir: 1, xspeed:10,
    // run when object is created
    init: function(){
      // Lets crafty know the object needs
      this.requires("2D, DOM,Collision, Image")
      .image("water.png")

      // logic behind movement move straight
      .bind('EnterFrame',function(){
        this.x += this.xspeed * this.dir;

        // else{
        //   this.unflip('x');
        // }

      })
      .onHit("enemy", function() {
            //if player falls, restart the game
            this.destroy();
    })
    }

});

  Crafty.sprite("shofiya-jerrin-panda-sprite.jpg", { dir: 1, health: 10, panda:[0,0,155,250]});
  var panda = Crafty.e("2D, DOM, Twoway, Gravity, panda, Collision")
  .attr({w: 37, h: 50, health: 10})
  .twoway(150)
  .gravity("Floor")
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
  })
  .onHit("enemy", function(){
    // e[0].obj.health -= 1;
    this.health -= 1;
    if (this.health <= 0){
      this.destroy();
    }

  });

  // projectiles
}


function enemy(){
  var enemyPlacex = Math.random()* 1260;

  var enemyPlacey = Math.random()* 570;

  Crafty.sprite("Sprites-Raye.gif", { dir: 1,  health: 10, enemy:[0,0,38,81]});
  var enemy = Crafty.e("2D, DOM, Gravity, Collision, enemy")
  .attr({x: enemyPlacex, y: enemyPlacey, w: 40, h: 90,  health: 10})
  .gravity("Floor")
  .bind('EnterFrame', function(){
    var enemyPlacex = Math.random()* 1260;

    var enemyPlacey = Math.random()* 570;
    this.x = enemyPlacex ;
    this.y = enemyPlacey ;

  })

  .onHit("projectiles", function(){
    // e[0].obj.health -= 1;
    this.health -= 1;
    if (this.health <= 0){
      this.destroy();
    }

  });
}

  // .twoway(200)
  // .bind('KeyDown', function(e){
  //   // if and other statements to control player
  //   if(e.key === Crafty.keys.T){
  //     this.dir = 1;
  //     this.unflip('X');
  //     this.attr({y: this.y -100})
  //   }
  //   else if (e.key === Crafty.keys.H){
  //     this.dir = 1;
  //     this.unflip('X');
  //     this.attr({x: this.x +50})
  //     Craftfy.e('projectiles')
  //     .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir});
  //   }
  //   else if (e.key === Crafty.keys.G){
  //     this.dir = 1;
  //     this.flip('X');
  //     this.attr({y: this.y +100})
  //   }
  //   else if(e.key === Crafty.keys.F){
  //     this.dir = -1;
  //     this.flip('X');
  //     this.attr({x: this.x -50})
  //     Crafty.e('projectiles')
  //     .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir});
  //   }
  //   else if(e.key === Crafty.keys.Z||e.key === Crafty.keys.X){
  //     // player.sprite = 'panda';
  //     // player.image(player.sprite);
  //     Crafty.e('projectiles')
  //     .attr({x: this.x, y: this.y, w: 40, h: 40, dir: this.dir});
  //
  //
  //   }
  //   else if(e.key  Crafty.keys.UP_ARROW|| e.key === Crafty.keys.RIGHT_ARROW)
  //
  // })


// function player(player.sprite)


function startGame(){
  Crafty.init(1280,590, document.getElementById('game'));
  Crafty.background('url(https://hdqwalls.com/download/new-york-buildings-city-night-minimalism-4e-2560x1700.jpg)');

  for (var i= 0; i<7; i++){platform(0,630, 40, 290);}
  for (var i= 0; i<6; i++){platform(650,1240, 310,570);}
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 20, y:40 , w: 150, h: 5})
  .color('green');
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 630, y:560 , w: 150, h: 5})
  .color('green');
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 585, w: 1280, h: 5})
  .color('blue');
  Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 630, y: 300, w: 150, h: 5})
  .color('blue');
  player();
  for (var i= 0; i<10; i++){takeMe();}
  enemy();
  // button
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
