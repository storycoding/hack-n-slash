var generateNumber = function(min,max) {
    var number = Math.floor(Math.random() * (max - min)) + min;

    return number;
};



var generateName = function() {

    var index = [Math.floor(Math.random() * nameArray.length)];
    var name = nameArray[index];

    nameArray.splice[index, 1]

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