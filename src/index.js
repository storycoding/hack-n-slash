//===========================================//
//============= VAR INITIATION ==============//
//===========================================//
var shopVisits = 0;
var goldReward = 0;
var units = {};
var items = {};
var heroName;
//================== names =================//

var names = [
  'Noob-Noob', 'Sik', 'Krak', 'Steven', 'Pablo', 'Courtney', 'Weimin',
  'Charles', 'Rick', 'Morty', 'Mom', 'Dad', 'Lebowski', 'Mickey', 'Marco'];

//=================== items =================//

items.potion = {
  name: 'potion',
  power: 8,
  cost: 3,
  effect: "Increases strength by 8 points"
};

//===========================================//
//============= GAME FUNCTIONS ==============//
//===========================================//


//========= list of all functions ===========//

function listFunctions() {
  console.log('help()');
  console.log('roll(numberOfDice,sides)');
  console.log('generateName()');
  console.log('checkUnits()');
  console.log('battle(unitA, unitB)');
  console.log('shop()');
  console.log('buy(itemID)');
  console.log('revive(unit)');
  console.log('createUnit(unitName, strength, armorValue, gold)');
}

//================== help ===================//

function help() {
 console.log("Type your hero's name to see your hero's stats and loot");
 console.log("Type checkUnits() to see the list of units");
 console.log("Type createUnit() to make your own beast");
 console.log("Type battle(first,second) to witness a battle do the death");
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

  while(heroName === undefined) {
    heroName = prompt("What is your name?", "hero");
  }
  

  var heroStrength = roll(4,4);

  units[heroName] = {
    name: heroName,
    strength: heroStrength,
    maxStrength : heroStrength,
    armor: 4,
    gold: roll(1, 6),
    loot: {potion : { amount : 1 }}
  };

  return units[heroName];
}

//===========================================//
//=============== CREATE UNITS ==============//
//===========================================//

function createUnit(unitName, strengthRoll, armorValue, goldRoll, loot) {

  units[unitName] = {
    name: unitName,
    strength: strengthRoll,
    maxStrength : strengthRoll,
    armor: armorValue,
    gold: goldRoll,
    loot: {}
  };

  console.log("Congratulations! " + units[unitName].name+ " was created!");

  return units[unitName];
}

//============== generate name ==============//

function generateName() {

  var name = names[Math.floor(Math.random() * names.length)];

  return name;
}

//=============== check units ===============//

function checkUnits() {

  console.log(units);
  console.log('');
  console.log('make them fight to death with the battle() function!');
  console.log('example: battle("direwolf" , "orc")');
}

//===========================================//
//================ COMBAT ===================//
//===========================================//

//=============== hit check =================//

function checkHit(first, second) {

  var hitRoll = roll(1, 6);

  if (hitRoll > second.armor) {
    return true;
  }
  console.log(first.name + ' failed to hit ' + second.name + '.');

  return false;
}

//============ damage calculator ============//

function checkDamage(first, second) {

  var damage = roll(1, first.strength); // reintroduce armor later

  if (damage <= 0) {
    console.log(second.name + " suffered no damage");
    console.log(second.name + "'s current strenght is " + second.strength);
    return false;
  }

  second.strength -= damage;
  console.log(second.name + ' suffered ' + damage + ' points of damage');
  console.log(second.name + "'s current strenght is " + second.strength);
  return true;
}

function checkForDeath(first, second) {

  goldReward = 0;

  if ((second.strength <= 0) && (first === units[heroName]) && (second === units[heroName])) {
    console.log('You killed yourself. Why would you do that!?');
    return true;

  } else if ((second.strength <= 0) && (first.name === second.name)) {
    console.log(first.name + ' killed itself. What a dummy');
    return true;

  } else if (second.strength <= 0) {
    reward(second, first);
    console.log(second.name + " died in combat");
    console.log(first.name + " got " + goldReward + " gold");
    return true;

  } else if (first.strength <= 0) {
    reward(first, first);
    console.log(first.name + " died in combat");
    console.log(second.name + " got " + goldReward + " gold");
    return true;
  }

  return false;
}

//============== FIGHT ROUND ==============//

function fight(first, second) {

  if (!checkHit(first, second)) { return true; }

  if (!checkDamage(first, second)) { return true; }

  if (!checkForDeath(first, second)) { return true; }

  console.log("");

  return false;
}

//=============== BATTLE ================//

function battle(first, second) {

  if(!units[first]) {
      return "one of the units you've picked is already dead!";
    }

  if(!units[second]) {
      return "one of the units you've picked is already dead!";
    }

  if(units[second].strength < 1 && units[first].strength < 1) {
      return "undead battles are not yet a thing. Try living units, or run revive(unitName) and try again.";
    }


  if(units[first].strength < 1) {
      return "the first unit you chose is already dead!";
    }

  if(units[second].strength < 1) {
      return "the second unit you chose is already dead!";
    }

  while ((units[first].strength > 0) && (units[second].strength > 0)) {

    if (!fight(units[first], units[second])) { return; }
    if (!fight(units[second], units[first])) { return; }
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
    console.log("Shopkeeper: Welcome to the shop, " + units[heroName].name + "!");
  }
  console.log("Shopkeeper: Type shopLoot to see a list of items.");
  console.log("Shopkeeper: Type buy('itemName') to purchase that item.");

  shopVisits++;
}

//=================== buy ==================//

function buy(itemID) {

  if (shop[itemID.name] === null) {
    return "Shopkeeper: I'm afraid I don't have a " + itemID.name;
  }

  if (units[heroName].gold <= itemID.cost) {
    return "Shopkeeper: I'm afraid you don't have enough money for that.";
  }

  var reply = prompt("Shopkeeper: " + itemID.name + "costs " + itemID.cost +
    " gold. Do you want it?", "type yes to buy, anything else to leave").toLowerCase();
  // test the above

  if (reply === "yes") {
    units[heroName].gold -= itemID.cost;
    units[heroName]['loot'][itemID.name]['amount']++; //only works for items that already exist (potions)
    return itemID.name + " added to your loot. You have " + units[heroName].gold + " gold left.";
  }

  return "Shopkeeper: Maybe next time, then.";
}

//=================== use ==================//

function use(itemID) {
  if( (units[heroName].loot[itemID.name] === null) || (units[heroName].loot[itemID.name].amount === 0) ){
    return "You don't have any " + itemID.name + "s with you.";
  }

    //for now let's go with potion

units[heroName].strength += itemID.power;
units[heroName].loot[itemID.name].amount --;
console.log("You drank a " + itemID.name + " and recovered " + itemID.power + " strength points.");
console.log(units[heroName].name + "'s current strength is " + units[heroName].strength);
}

//check kind of item and use accordingly. Maybe have a
//function inside each item that goes inside the use higher order function

//===========================================//
//============== GAME DATABASE ==============//
//===========================================//

//=================== UNITS =================//

units.giant = {
  name: 'giant',
  strength: 16,
  maxStrength: 16,
  armor: 2,
  gold: roll(6, 6),
  loot: {}
};

units.orc = {
  name: 'orc',
  strength: 6,
  maxStrength: 6,
  armor: 3,
  gold: roll(2, 4),
  loot: {}
};

units.hobgoblin = {
  name: 'hobgoblin',
  strength: 9,
  maxStrength: 9,
  armor: 6,
  gold: roll(2, 6),
  loot: {}
};

units.direwolf = {
  name: 'direwolf',
  strength: 7,
  maxStrength: 7,
  armor: 5,
  gold: roll(6, 6),
  loot: {}
};

units.goblin = {
  name: 'goblin',
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

createHero();

alert("Hello " + units[heroName].name + "! This is a hackable hack and slash!");
alert("Type help() to see the list of commands");
console.log("Hello " + units[heroName].name + "! This is a hackable hack and slash!");
console.log("Type help() to see the list of commands");