// VARIABLES 

// Establishing player-related variables
var playerHealth = $("#playerHealth"),
    attackBTN = $("#personAttack"),
    damage;

var hero = $(".player1");

// Establishing monster-related variables
var joker = $(".monster1");
var beast = $(".monster2");

//CONSTRUCTORS 

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
};

// INSTANCES

// Player Instance
var hero = new Player ({
	name: 'MARIO',
	health: 100,
	elem: $('.player1')
});


// Monster Instances
var joker = new Monster ({
  name: 'GOOMBA',
  health: 25,
  elem: $('.monster1')
});

var beast = new Monster ({
	name: 'SPIKE',
  health: 95,
  elem: $('.monster2')
});

// ACTIONS 

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
      _.delay(process_attack, 500, attackee, attacker);
    }

  } else {

    if (attackee instanceof Player) {
      // You Lose!!
      // $('body').empty().css('background', 'url(images/brick.jpg)');
      // $(this).hide("#personAttack")
      $( "#loseResult" ).add("h2").html("You lose :(").animate({
        fontSize: "10em",
      }, 500 );
       $( "#logo" ).animate({
        height: "-1000px"
        }, 1000 );
    } else {
      // You Win!!
      // $(this).hide("#personAttack")
      $( "#winResult" ).add("h2").html("You win ;)").animate({
        fontSize: "10em",
        }, 500 );
      $( "#logo" ).animate({
        scale: "1000px"
        }, 1000 );
      // $('body').empty().css('background', 'url(images/supermario2.jpg)');
    }
  }
};

//Extra factoid
console.log ("A turn-based strategy (TBS) game is a strategy game (usually some type of wargame, especially a strategic-level wargame) where players take turns when playing. This is distinguished from real time strategy where all players play simultaneously.")