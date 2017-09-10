//============ basic dice roll ==============//

var roll = function(times, sides) {
  var result = 0;

  for (var i = 0; i < times; i++) {
    result += Math.floor(Math.random() * (1 + sides - 1)) + 1;
  }

  return result;
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
    armor: 0,
    level: 2,
    gold: roll(1, 4)
  };

  availableUnits.push(unit);

  return unit;
};

//============== reward system ==============//

function reward(giver, taker) {

  goldReward = giver.gold;
  taker.gold += goldReward;
  giver.gold = 0;

  return;
}

//===========================================//
//============== GAME DATABASE ==============//
//===========================================//

// A list of all the objects in the game so far

//=================== ITEMS =================//

//list of items with price
potion = {
  name: 'potion',
  power: 8,
  cost: 3,
  effect: "Increases life by 8 points"
};

//=================== UNITS =================//

var hero = {
  varName: 'hero',
  name: prompt("What is your name?", "Defaultiago"),
  life: roll(6, 6),
  speed: 1,
  attack: 8,
  dodge: 12,
  armor: 2,
  level: 6,
  gold: roll(1, 6),
  inventory: { potion : { amount : 1 } }
};

var giant = {
  varName: 'giant',
  name: 'giant ' + generateName(),
  life: roll(12, 12),
  speed: 1,
  attack: 12,
  dodge: 0,
  armor: 0,
  level: 8,
  gold: roll(6, 6)
};

var orc = {
  varName: 'orc',
  name: 'Orc ' + generateName(),
  life: roll(4, 6),
  speed: 1,
  attack: 10,
  dodge: 2,
  armor: 2,
  level: 4,
  gold: roll(2, 4)
};

var hobgoblin = {
  varName: 'hobgoblin',
  name: 'Hobgoblin ' + generateName(),
  life: roll(8, 4),
  speed: 2,
  attack: 8,
  dodge: 8,
  armor: 2,
  level: 8,
  gold: roll(2, 6)
};

var direwolf = {
  varName: 'direwolf',
  name: 'Dire Wolf ' + generateName(),
  life: roll(8, 6),
  speed: 2,
  attack: 10,
  dodge: 12,
  armor: 0,
  level: 12,
  gold: roll(6, 6)
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
  gold: roll(1, 4)
};

//===========================================//
var deathByCombat = false;
var shopVisits = 0;
var combatMessage = "Default";
var goldReward = 0;
var goblinCount = 1;
var availableUnits = [hero, goblin, orc, giant, direwolf, hobgoblin];

var checkUnits = function() {
  for (var i = 0; i < availableUnits.length; i++) {
    console.log('');
    console.log(availableUnits[i].varName);
    console.log('');
    console.log(availableUnits[i]);
  }
  console.log('');
  console.log('make them fight to death with the deathMatch(attacker,victim); function!');
};




//===========================================//
//================ COMBAT ===================//
//===========================================//


//=============== hit check =================//

function checkHit(attacker, victim) {

  var hitRoll = roll(1, 20);

  if (hitRoll > victim.dodge) {
    return true;
  }

  return false;
}

//=========== damage calculator =============//

function checkDamage(attacker, victim) {

  var damage = 0;

  for (var i = 0; i < attacker.speed; i++) {

    var attackPower = roll(1, attacker.attack);
    damage += attackPower - victim.armor;
  }

  return damage;
}

//============ COMBAT ROUND =============//

function combat(attacker, victim) {
  // create something to check if units exist

  deathByCombat = false;

  if ((attacker.name === undefined) || (victim.name === undefined)) {
    return "you are using an undefined unit. \n Type checkUnits() to see what's available, or create your own with createUnit()";
  }

  if (victim.life <= 0) {
    return 'invalid target';
  }
  if (attacker.life <= 0) {
    return 'invalid attacker';
  }

  if (!checkHit(attacker, victim)) {
    console.log(attacker.name + ' failed to hit ' + victim.name + '.');
    return;
  }

  var damage = checkDamage(attacker, victim);

  if (damage <= 0) {
    console.log(victim.name + ' suffered no damage');
    return;
  }

  victim.life -= damage;

  checkForDeath(attacker, victim);

  if (deathByCombat === true) {
    return;
  }

  console.log(victim.name + ' suffered ' + damage + ' points of damage.');
  return;
}
//=============== DEATHMATCH =================//

function deathMatch(attacker, victim) {
  deathByCombat = false;

  if ((attacker.life <= 0) || (victim.life <= 0)) {
    return 'you can\'t have a deathMatch with a deadman.';
  }

  if ((attacker.life === undefined) || (victim.life === undefined)) {
    return 'one or more of your units doesn\'n exist in the database.';
  }

  while ((attacker.life > 0) && (victim.life > 0)) {

    combat(attacker, victim);
    if (deathByCombat === true) { return; }
    console.log(victim.name + '\'s current life is ' + victim.life + '.');

    combat(victim, attacker);
    if (deathByCombat === true) { return; }
    console.log(attacker.name + '\'s current life is ' + attacker.life + '.');
  }

  return "None of the conditions were met, this message shouldn't log!";
}

//===========================================//

function checkForDeath(attacker, victim) {
  var goldReward = 0;
  if ((victim.life <= 0) && (attacker.id === 'hero') && (victim.id === 'hero')) {
    console.log('You killed yourself. Why would you do that!?');
    return true;

  } else if ((victim.life <= 0) && (attacker.name === victim.name)) {
    console.log(attacker.name + ' killed itself. What a dummy.');
    return true;

  } else if (victim.life <= 0) {
    reward(victim, attacker);
    console.log(victim.name + " has died in combat.");
    console.log(attacker.name + " got " + goldReward + " gold.");
    deathByCombat = true;
    return deathByCombat;

  } else if (attacker.life <= 0) {
    reward(attacker, attacker);
    console.log(attacker.name + " has died in combat. ");
    console.log(victim.name + " got " + goldReward + " gold.");
    deathByCombat = true;
    return deathByCombat;
  }

  return false;
};

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

alert("Hello " + hero.name + "! This is a hackable hack and slash!");
alert("Type moreInfo() to see the list of commands");
console.log("Hello Adventurer! This is a hackable hack and slash!");
console.log("Type moreInfo() to see the list of commands");


var moreInfo = function() {
  console.log("Type checkUnits() to see the list of units");
  console.log("Type hero to see your hero's status and inventory");
  console.log("Type shop() to browse the shop for items");
  console.log("Type use() to use an item in your hero's inventory");
  console.log("Type deathMatch(attacker,victim) to witness a battle do the death");
};

var functionList = [ // update this or remove it
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
// a unit reroll function
// a battle reward system
// fix ''s and ""s
// make use item
// refactor death in battle

//===========================================//
//=================== SHOP ==================//
//===========================================//

var shopInventory = {
  potion : {cost : 3, description : "increases life by 8 points."}
};

//=================== shop =================//

function shop() {
  //make if for !first visit
  if (shopVisits === 0) {
    console.log("Shopkeeper: Welcome to the shop, " + hero.name + "!");
  }
  console.log("Shopkeeper: Type shopInventory to see a list of items.");
  console.log("Shopkeeper: Type buy(itemID) to purchase that item.");

  shopVisits++;
};

//=================== buy ==================//

function buy(itemID) {

  if (shop[itemID.name] === null) {
    return "Shopkeeper: I'm afraid I don't have a " + itemID.name;
  }

  if (hero.gold <= itemID.cost) {
    return "Shopkeeper: I'm afraid you don't have enough money for that.";
  }
  var reply = prompt("Shopkeeper: " + itemID.name + "costs " + itemID.cost +
    " gold. Do you want it?", "type yes to buy, anything else to leave").toLowerCase();
  // test the above

  if (reply === "yes") {
    hero.gold -= itemID.cost;
    hero.inventory.push(itemID);
    return itemID.name + " added to your inventory. You have " + hero.gold + " gold left.";
  }
  return "Shopkeeper: Maybe next time, then."
}

//=================== use ==================//

function use(itemID) {
  if( (hero.inventory[itemID.name] === null) || (hero.inventory[itemID.name].amount === 0) ){
    return "You don't have any " + itemID.name + "s with you.";
  }
    //check kind of item
    //use accordingly

    //for now let's go with potion
hero.life += itemID.power;
hero.inventory[itemID.name].amount --;
console.log("You drank a " + itemID.name + " and recovered " + itemID.power + " life points.");
console.log(hero.name + "'s current life is " + hero.life);
}
