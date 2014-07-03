//////////////////// VARIABLES /////////////////////////////////////////

// Establishing player-related variables
var playerHealth = $("#playerHealth"),
    attackBTN = $("#personAttack"),
    damage;

var hero = $(".player1");

// Establishing monster-related variables
var joker = $(".monster1");
var beast = $(".monster2");

//////////////////// CONSTRUCTORS /////////////////////////////////////////

// Player Constructor is a blueprint of properties on an object...always Capitalized.
var Player = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.elem = options.elem;
  this.attack = function (target) {
    process_attack(this, target);
  };
};

// Monster Constructor
var Monster = function (options) {
  var options = options || {};
  this.name = options.name;
  this.health = options.health;
  this.elem = options.elem;
  // this.attack = function (target) {
  //   var damage =_.random(1, 30);
  //   console.log(damage);
  //   target.health -= damage;
  //   if(target.health > 0) {
  //     target.monsterElem.find('input').val(target.health);
  //     // Monster Needs to Attack Person
  //   } else {
  //     target.monsterElem.find('input').val('DEAD');
  //     target.monsterElem.css('color', 'red');
  //   }
  // };
};

//////////////////// INSTANCES /////////////////////////////////////////

// Player Instance
var hero = new Player ({
	name: 'THE HERO',
	health: 100,
	elem: $('.player1')
});


// Monster Instances
var joker = new Monster ({
  name: 'THE JOKER',
  health: 25,
  elem: $('.monster1')
});

var beast = new Monster ({
	name: 'THE BEAST',
  health: 95,
  elem: $('.monster2')
});

//////////////////// ACTIONS /////////////////////////////////////////

// Player Attack Action
var count = 0;
attackBTN.on('click', function () {
	count++;
	console.log("I'm counting your clicks")
    //even odd click detect 
    var isEven = function(someNumber) {
      return (someNumber % 2 === 0) ? true : false;
 		};
    // on odd clicks do this
    if (isEven(count) === false) {
      hero.attack(beast);
    }
    // on even clicks do this
    else if (isEven(count) === true) {
    	hero.attack(joker);
    }
});



// Function to attack a Monster
// This function should be broken down a little bit more, but you get the point.
var process_attack = function (attacker, attackee) {

  // Reset our Attack Button
  attackBTN.prop('disabled', false).text('Attack');

  // Generate a new damage value each time
  damage = _.random(5, 20);

  // Lower the attackee's health
  attackee.health -= damage;

  // If Attackee is still alive, decrease health!
  if (attackee.health > 0) {

    // Update the individual attacked's health visually
    attackee.elem.find('input').val(attackee.health);
  
    // When we attack a monster, he fights back
    if (attackee instanceof Monster) {
      console.log('You were attacked back');
      attackBTN.prop('disabled', true).text('Defending...');
      _.delay(process_attack, 1000, attackee, attacker);
    }

  } else {

    if (attackee instanceof Player) {
      // You Loose!!
      $('body').empty().css('background', 'url(http://goo.gl/0fmNnb)');
    } else {
      // You Win!!
      $('body').empty().css('background', 'url(http://goo.gl/zeyWpy)');
    }

  }
};