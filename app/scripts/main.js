/*
  ___      _             
 / __| ___| |_ _  _ _ __ 
 \__ \/ -_)  _| || | '_ \
 |___/\___|\__|\_,_| .__/
                   |_|   
*/
// onChange linked to dropdown to update variables


// Setup Vars & Player Elements
var playerHealth = $('#playerHealth'),
    mixerBTN = $('#mixer'),
    damage;

/*
   ___             _               _              
  / __|___ _ _  __| |_ _ _ _  _ __| |_ ___ _ _ ___
 | (__/ _ \ ' \(_-<  _| '_| || / _|  _/ _ \ '_(_-<
  \___\___/_||_/__/\__|_|  \_,_\__|\__\___/_| /__/
*/

// Player Constructor
// var Player = function (options) {
//   var options = options || {};
//   this.name = options.name;
//   this.health = 100;
//   this.attack = function (target) {
//     process_attack(this, target);
//   };
//   this.elem = options.elem;
// };

var Painter = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.attack = function (target) {
    process_attack(this, target);
  };
  this.elem = options.elem;
};

// Monster Constructor
// var Monster = function (options) {
//   var options = options || {};
//   this.name = options.name;
//   this.health = 100;
//   this.elem = options.elem;
// };

var Mixture = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = 100;
  this.elem = options.elem;
};

/*
  ___         _                       
 |_ _|_ _  __| |_ __ _ _ _  __ ___ ___
  | || ' \(_-<  _/ _` | ' \/ _/ -_|_-<
 |___|_||_/__/\__\__,_|_||_\__\___/__/
*/

// Player Instance
// var ryu = new Player ({ 
//   name: 'Ryu',
//   elem: $('.player')
// });
var monet = new Painter ({ 
  name: 'Claude Monet',
  health: 80
});

var ross = new Painter ({ 
  name: 'Bob Ross',
  health: 60
});

var warhol = new Painter ({ 
  name: 'Andy Warhol',
  health: 30
});

// Monster Instances
// var rickRoss = new Monster ({
//   name: 'Rick Ross',
//   elem: $('.monster')
// });

var redDrop = new Mixture ({
  name: 'Red Drop',
  elem: $('.mixture')
});

var greenDrop = new Mixture ({
  name: 'Green Drop',
  elem: $('.mixture')
});

var blueDrop = new Mixture ({
  name: 'Blue Drop',
  elem: $('.mixture')
});

/*
    _      _   _             
   /_\  __| |_(_)___ _ _  ___
  / _ \/ _|  _| / _ \ ' \(_-<
 /_/ \_\__|\__|_\___/_||_/__/
                             
*/


// Player Attack Action
// attackBTN.on('click', function () {
//   ryu.attack(rickRoss);
// });

mixerBTN.on('click', function () {
  monet.attack(redDrop);
});

//Linking drop down to health values
$('#artists').on('change', function (){
  
  alert( $(this).val() );
  
  if ($(this).val() == 1){
    this.health
  }
  
});

// Function to attack a Monster
// This function should be broken down a little bit more, but you get the point.
var process_attack = function (attacker, attackee) {

  // Reset our Attack Button
  mixerBTN.prop('disabled', false).text('Stir the paint!');

  // Generate a new damage value each time
  damage = _.random(5, 20);

  // Lower the attackee's health
  attackee.health -= damage;

  // If Attackee is still alive, decrease health!
  if (attackee.health > 0) {

    // Update the individual attacked's health visually
    attackee.elem.find('input').val(attackee.health);
  
    // When we attack a monster, he fights back, ids win or lose
    if (attackee instanceof Mixture) {
      console.log('Please wait while we mix your new color.');
      mixerBTN.prop('disabled', true).text('Mixing new color...');
      _.delay(process_attack, 1000, attackee, attacker);

      $("#mixer").on("click", function(){
      $(this).addClass("orange");
      // $(elem).css('background-color' rgb(255, 1, 3));
  });
    }

  } else {

    if (attackee instanceof Painter) {
      // You Loose!!
      $('body').empty().css('background', 'url(http://goo.gl/0fmNnb)');
    } else {
      // You Win!!
      $('body').empty().css('background', 'url(http://goo.gl/zeyWpy)');
    }

  }
};