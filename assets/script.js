//===========================================//
//============= VAR INITIATION ==============//
//===========================================//

var heroName = 'hero';
var shopVisits = 0;
var goldReward = 0;

//================== view ==================//

var view = {

    var unitsUl = document.querySelector("ul");
    unitsUl.innerHTML = "";

    var unitLi = document.createElement("li");
    var currentUnit = game.units[i];

    unitLi.textContent = "UnitNameAndStuff"
    unitUl.appendChild(unitLi);
}


//================== names =================//

var nameArray = [
  'Noob-Noob', 'Sik', 'Krak', 'Steven', 'Pablo', 'Courtney', 'Weimin',
  'Charles', 'Rick', 'Morty', 'Mom', 'Dad', 'Lebowski', 'Mickey', 'Marco'];

//=================== items =================//

potion = {
  name: 'potion',
  power: 8,
  cost: 3,
  effect: "Increases strength by 8 points"
};

//===========================================//
//============= GAME FUNCTIONS ==============//
//===========================================//

function listFunctions() {

  console.log('help()');
  console.log('roll(numberOfDice,sides)');
  console.log('generateName()');
  console.log('createUnit(unitNameString, /*strength*/ roll(numberOfDice,sides), armorValue, /*gold*/ roll(numberOfDice,sides))');
  console.log('checkUnits()');
  console.log('deathMatch(unitA, unitB)');
  console.log('shop()');
  console.log('buy(itemID)');
  console.log('revive(unit)');
}

//================== help ===================//

function help() {

 console.log("Type your hero's name to see your hero's stats and loot");
 console.log("Type checkUnits() to see the list of units");
 console.log("Type createUnit() to make your own beast");
 console.log("Type deathMatch(attacker,defender) to witness a battle do the death");
 console.log("Type listFunctions() to see the complete list of functions");
}

//============= roll the dice ===============//

var roll = function(numberOfDice, sides) {
  var result = 0;

  for (var i = 0; i < numberOfDice; i++) {
    result += Math.floor(Math.random() * (1 + sides - 1)) + 1;
  }

  return result;
};
//===========================================//
//================ CREATE HERO ==============//
//===========================================//

function createHero() {

  heroName = prompt("What is your name?", "hero");
  var heroStrength = roll(4,4);

  window[heroName] = {
    name: heroName,
    strength: heroStrength,
    maxStrength : heroStrength,
    armor: 4,
    gold: roll(1, 6),
    loot: {potion : { amount : 1 }}
  };

  availableUnits.push(window[heroName]);

  return window[heroName];
}




//===========================================//
//=============== CREATE UNITS ==============//
//===========================================//

function createUnit() {

  window[document.getElementById("newUnitName")] = {
    name: document.getElementById("newUnitName"),
    strength: document.getElementById("NewUnitStrength"),
    maxStrength : document.getElementById("NewUnitStrength"),
    armor: document.getElementById("NewUnitArmor"),
    gold: document.getElementById("NewUnitGold"),
    loot: {}
  };

  availableUnits.push(window[unitNameString]);
  console.log("Congratulations! " + window[unitNameString].name+ " was born!");

  return window[unitNameString];
}

//============== generate name ==============//

function generateName() {

  var name = nameArray[Math.floor(Math.random() * nameArray.length)];

  return name;
}

//=============== check units ===============//

function checkUnits() {

  for (var i = 0; i < availableUnits.length; i++) {
    console.log('');
    console.log(availableUnits[i].name);
    console.log(availableUnits[i]);
  }
  console.log('');
  console.log('make them fight to death with the deathMatch(unit1,unit2) function!');
}

//===========================================//
//================ COMBAT ===================//
//===========================================//

//======== check if units are valid =========//

function validateTargets(attacker, defender) {

  if (attacker.name === undefined) {
    console.log("invalid attacker");
    return false;

  } else if (defender.name === undefined) {
    console.log("invalid defender");
    return false;

  } else if ((attacker.strength <= 0) && (defender.strength <= 0)) {
    console.log("Undead battles not implemented yet. Pick two living units instead");
    return false;

  } else if (defender.strength <= 0) {
    console.log("defender is already dead!");
    return false;

  } else if (attacker.strength <= 0) {
    console.log("attacker is already dead!");
    return false;
  }
  return true;
}

//=============== hit check =================//

function checkHit(attacker, defender) {

  var hitRoll = roll(1, 6);

  if (hitRoll > defender.armor) {
    return true;
  }
  console.log(attacker.name + ' failed to hit ' + defender.name + '.');

  return false;
}

//============ damage calculator ============//

function checkDamage(attacker, defender) {

  var damage = roll(1, attacker.strength); // reintroduce armor later

  if (damage <= 0) {
    console.log(defender.name + " suffered no damage");
    console.log(defender.name + "'s current strenght is " + defender.strength);
    return false;
  }

  defender.strength -= damage;
  console.log(defender.name + ' suffered ' + damage + ' points of damage');
  console.log(defender.name + "'s current strenght is " + defender.strength);
  return true;
}

function checkForDeath(attacker, defender) {

  goldReward = 0;

  if ((defender.strength <= 0) && (attacker === window[heroName]) && (defender === window[heroName])) {
    console.log('You killed yourself. Why would you do that!?');
    return true;

  } else if ((defender.strength <= 0) && (attacker.name === defender.name)) {
    console.log(attacker.name + ' killed itself. What a dummy');
    return true;

  } else if (defender.strength <= 0) {
    reward(defender, attacker);
    console.log(defender.name + " died in combat");
    console.log(attacker.name + " got " + goldReward + " gold");
    return true;

  } else if (attacker.strength <= 0) {
    reward(attacker, attacker);
    console.log(attacker.name + " died in combat");
    console.log(defender.name + " got " + goldReward + " gold");
    return true;
  }

  return false;
}

//============== FIGHT ROUND ==============//

function fight(attacker, defender) {

  if (!validateTargets(attacker, defender)) { return false; }

  if (!checkHit(attacker, defender)) { return true; }

  if (!checkDamage(attacker, defender)) { return true; }

  if (!checkForDeath(attacker, defender)) { return true; }

  console.log("");

  return false;
}

//=============== DEATHMATCH ================//

function deathMatch(attacker, defender) {

  while ((attacker.strength > 0) && (defender.strength > 0)) {

    if (!fight(attacker, defender)) { return; }
    if (!fight(defender, attacker)) { return; }
  }

  return;
}

//================== reward =================//

function reward(giver, taker) {
  //write code to transfer objects from giver.loot to taker.loot
  goldReward = giver.gold;
  taker.gold += goldReward;
  giver.gold = 0;

  return;
}

//============= revive unit =================//

function revive(unit) {
  unit.strength = unit.maxStrength;
  return unit;
}

//===========================================//
//================== SHOP ===================//
//===========================================//

function shop() {

  if (shopVisits === 0) {
    console.log("Shopkeeper: Welcome to the shop, " + window[heroName].name + "!");
  }
  console.log("Shopkeeper: Type shopLoot to see a list of items.");
  console.log("Shopkeeper: Type buy(itemID) to purchase that item.");

  shopVisits++;
}

//=================== buy ==================//

function buy(itemID) {

  if (shop[itemID.name] === null) {
    return "Shopkeeper: I'm afraid I don't have a " + itemID.name;
  }

  if (window[heroName].gold <= itemID.cost) {
    return "Shopkeeper: I'm afraid you don't have enough money for that.";
  }

  var reply = prompt("Shopkeeper: " + itemID.name + "costs " + itemID.cost +
    " gold. Do you want it?", "type yes to buy, anything else to leave").toLowerCase();
  // test the above

  if (reply === "yes") {
    window[heroName].gold -= itemID.cost;
    window[heroName]['loot'][itemID.name]['amount']++; //only works for items that already exist (potions)
    return itemID.name + " added to your loot. You have " + window[heroName].gold + " gold left.";
  }

  return "Shopkeeper: Maybe next time, then.";
}

//=================== use ==================//

function use(itemID) {
  if( (window[heroName].loot[itemID.name] === null) || (window[heroName].loot[itemID.name].amount === 0) ){
    return "You don't have any " + itemID.name + "s with you.";
  }

    //for now let's go with potion

window[heroName].strength += itemID.power;
window[heroName].loot[itemID.name].amount --;
console.log("You drank a " + itemID.name + " and recovered " + itemID.power + " strength points.");
console.log(window[heroName].name + "'s current strength is " + window[heroName].strength);
}

//check kind of item and use accordingly. Maybe have a
//function inside each item that goes inside the use higher order function

//===========================================//
//============== GAME DATABASE ==============//
//===========================================//

//=================== UNITS =================//

var giant = {
  name: 'giant ' + generateName(),
  strength: 16,
  maxStrength: 16,
  armor: 2,
  gold: roll(6, 6),
  loot: {}
};

var orc = {
  name: 'orc ' + generateName(),
  strength: 6,
  maxStrength: 6,
  armor: 3,
  gold: roll(2, 4),
  loot: {}
};

var hobgoblin = {
  name: 'hobgoblin ' + generateName(),
  strength: 9,
  maxStrength: 9,
  armor: 6,
  gold: roll(2, 6),
  loot: {}
};

var direwolf = {
  name: 'direwolf ' + generateName(),
  strength: 7,
  maxStrength: 7,
  armor: 5,
  gold: roll(6, 6),
  loot: {}
};

var goblin = {
  name: 'goblin ' + generateName(),
  strength: 3,
  maxStrength: 3,
  attack: 6,
  armor: 1,
  gold: roll(1, 4),
  loot: {}
};

//===========================================//
//============== potion shop ================//
//===========================================//

  var shopLoot = {
    potion : {cost : 3, description : "increases strength by 8 points."}
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


var availableUnits = [goblin, orc, giant, direwolf, hobgoblin]; //move this somewhere else
createHero();

alert("Hello " + window[heroName].name + "! This is a hackable hack and slash!");
alert("Type help() to see the list of commands");
console.log("Hello " + window[heroName].name + "! This is a hackable hack and slash!");
console.log("Type help() to see the list of commands");

//===========================================//
//================ TO DO LIST ===============//
//===========================================//

//make a critical hit (ignores armor)
//fix endless loop if character deathmatches itself with less strength than armor
// test everything
// make final boss
// a unit reroll function
// expand shop and item usage HoF
// expand battle reward system
// fix ''s and ""s
