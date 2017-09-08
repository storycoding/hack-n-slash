//============ basic dice roll ==============//

var roll = function(times, sides) {

  var sides = Math.floor(Math.random() *
    (1 + sides - 1)) + 1;

  return times * sides;
};

//========== random name generator ==========//

var generateName = function() {

  var nameArray = ['Noob-Noob', 'Halo', 'Sik', 'krak', 'Steven'];

  var name = nameArray[Math.floor(Math.random() * nameArray.length)];

  return name;
};

//============= unit creation ==============//

var createUnit = function(type) {

  alert('This is a work in progress, expect the unexpected.');

  if (type != 'goblin') {
    return ('You can only create a \'goblin\' at this time.');
  }

  goblinCount++;

  var unit = { // make it so the index of the unit is the unit's name
    varName: 'gotta use availableUnits[index]', // sort this out
    name: generateName(),
    health: roll(2, 4),
    speed: 1,
    attack: 4,
    dodge: 8,
    armor: 0
  };

  availableUnits.push(unit);

  return unit;
};

//===========================================//
//============== GAME DATABASE ==============//
//===========================================//

var giant = {
  varName: 'giant',
  name: 'giant ' + generateName(),
  life: roll(8, 12),
  speed: 1,
  attack: 12,
  dodge: 0,
  armor: 0,
  level: 8
};

var orc = {
  varName: 'orc',
  name: 'Orc ' + generateName(),
  life: roll(4, 6),
  speed: 1,
  attack: 10,
  dodge: 2,
  armor: 2,
  level : 4
};

var goblin = {
  varName: 'goblin',
  name: 'Goblin ' + generateName(),
  life: roll(4, 4),
  speed: 2,
  attack: 6,
  dodge: 8,
  armor: 0,
  level: 2,
};

var hero = {
  varName: 'hero',
  name: 'You',
  life: roll(6, 6),
  speed: 1,
  attack: 8,
  dodge: 12,
  armor: 2,
  level: 6
};

//===========================================//
var combatMessage = "Default";
var deathMessage = 'What isn\'t alive may never die.';
var goblinCount = 1;
var availableUnits = [hero, goblin];

var checkUnits = function() {
  for (var i = 0; i < availableUnits.length; i++) {
    console.log(availableUnits[i].varName);
    console.log('');
    console.log(availableUnits[i]);
  }
  console.log('');
  console.log('make them fight with the combat(attacker,victim) function!');
};




//===========================================//
//================ COMBAT ===================//
//===========================================//


//=============== hit check =================//

var checkHit = function(attacker, victim) {

  var hitRoll = roll(1, 20);

  if (hitRoll > victim.dodge) {
    return true;
  }

  return false;
};

//=========== damage calculator =============//

var checkDamage = function(attacker, victim) {

  var damage = 0;

  for (var i = 0; i < attacker.speed; i++) {

    var attackPower = roll(1, attacker.attack);
    damage += attackPower - victim.armor;
  }

  return damage;
};

//============ COMBAT ROUND =============//

var combat = function(attacker, victim) { // create something to check if units exist

if ( (attacker.name === undefined) || (victim.name === undefined) ) {
  return "you are using an undefined unit. \n Type checkUnits() to see what's available, or create your own with createUnit()";
}

  if (victim.life <= 0) {
    return 'invalid target';
  }
  if (attacker.life <= 0) {
    return 'invalid attacker';
  }

  if (!checkHit(attacker, victim)) {

    return attacker.name + ' failed to hit ' + victim.name + '.';
  }

  var damage = checkDamage(attacker, victim);

  if (damage <= 0) {
    return victim.name + ' suffered no damage';
  }

  victim.life -= damage;

  if (checkForDeath(attacker, victim) === true) {
    return deathMessage;
  }

  return victim.name + ' suffered ' + damage + ' points of damage.';
};
//=============== DEATHMATCH =================//

var deathMatch = function(attacker, victim) {

if ( (attacker.life <= 0) || (victim.life <= 0) ) {
  return 'you can\'t have a deathMatch with a deadman.';
}

if ( (attacker.life === undefined) || (victim.life === undefined) ) {
  return 'one or more of your units doesn\'n exist in the database.';
}

while ( (attacker.life > 0) && (victim.life > 0) ) {
  combat(attacker, victim);
  console.log(victim.name + '\'s current life is ' + victim.life);
  combat(victim, attacker);
  console.log(attacker.name + '\'s current life is ' + attacker.life);
}

if (attacker.life <= 0) {
  return victim.name + ' is Victorious';
} else if (victim.life <= 0) {
  return attacker.name + ' is Victorious!';
}

return 'something needs to be double checked in the deathMatch conditions.';
};

//===========================================//

var checkForDeath = function(attacker, victim) {

  if ((victim.life <= 0) && (attacker.name === 'You') && (victim.name === 'You')) {
    deathMessage = ('You killed yourself. Why would you do that!?');
    return true;

  } else if ((victim.life <= 0) && (attacker.name === victim.name)) {
    deathMessage = (attacker.name + ' killed itself. What a dummy.');
    return true;
  }

  if ((victim.life <= 0) && (attacker.name === 'You')) {
    deathMessage = (victim.name + ' is dead! \n' + attacker.name + ' are victorious!');
    return true;

  } else if (victim.life <= 0) {
    deathMessage = (victim.name + ' is dead! \n' + attacker.name + ' is victorious!');
    return true;
  }

  return false;
}

//===========================================//
//================ GAME START ===============//
//===========================================//
console.API;

if (typeof console._commandLineAPI !== 'undefined') {
    console.API = console._commandLineAPI; //chrome
} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
    console.API = console._inspectorCommandLineAPI; //Safari
} else if (typeof console.clear !== 'undefined') {
    console.API = console;
}

console.API.clear();

alert("Hello Adventurer! This is a hackable hack and slash!");
alert("Type moreInfo() to see the list of commands");
console.log("Hello Adventurer! This is a hackable hack and slash!");
console.log("Type moreInfo() to see the list of commands");


var moreInfo = function() {
  console.log("Type checkUnits() to see the list of units");
  console.log("Type combat(attacker,victim) to make something hit something");
  console.log("Type functionList to see the list of functions");
};

var functionList = [
  'roll',
  'generateName',
  'createUnit',
  'checkUnits',
  'checkHit',
  'combat',
  'deathMatch',
  'checkForDeath',
  'moreInfo'
];


//===========================================//
//================ TO DO LIST ===============//
//===========================================//

// make a prompt(yourSummon) to create the hero
// make a level up system
// make money
// make a shop that sells potions
// make inventory
// make use item function
// make final boss
