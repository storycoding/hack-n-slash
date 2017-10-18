//===========================================//
//============== CREATE STATS ===============//
//===========================================//

var generateNumber = function(min,max) {
    var number = Math.floor(Math.random() * (max - min)) + min;

    return number;
};



var generateName = function() {

    var index = [Math.floor(Math.random() * nameArray.length)];
    var name = nameArray[index];

    nameArray.splice[index, 1];

    return name;
};



var generateRace = function() {

    var race = document.getElementById('raceDropDown');

    if (race.value === "random") {
        race = raceArray[Math.floor(Math.random() * raceArray.length)];

    } else {
        race = race.value;
    }

    return race;
};



var generateStrength = function(race) {

    var range = raceLibrary[race].strength;
    var min = range[0];
    var max = range[1];

    var strength = generateNumber(min,max);

    return strength;
};



var generateArmor = function(race) {

    var range = raceLibrary[race].armor;
    var min = range[0];
    var max = range[1];

    var armor = generateNumber(min,max);

    return armor;
};


//===========================================//
//================ CREATE UNIT ==============//
//===========================================//




var createUnit = function() {

    if (unitCount > 8) {
        alert("you can only have 9 units at a time.");
        return;
    }

    var race = generateRace();
    var name = generateName();
    var strength = generateStrength(race);
    var armor = generateArmor(race)


    var object = createUnitObject(race, name, strength, armor);
    var node = objectToNode(object);

    //what is wrapper in the battle.html context? null
    wrapper.appendChild(node);

    console.log(node);

    var raceName = "" + object.race + object.name;
    

    //stores node in nodes object library
    nodeLibrary[raceName] = node;

    console.log("Node created for " + object.race + object.name + ".");
    //return console log something
};



//============== CREATE OBJECT ==============//

var createUnitObject = function(race, name, strength, armor) {
    var unitVarName = "" + race + name;

    unitLibrary[unitVarName] = {
        race : race,
        name : name,
        strength : strength,
        armor : armor
    };
    return unitLibrary[unitVarName];
};

