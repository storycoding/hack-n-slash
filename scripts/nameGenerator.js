var nameArray = [
    'Andy','Janet','Phoebe','Kory','Aric','Nuno', 'Justin', 'Toby',
    'David', 'Walker', 'Hernandez','Bryan', 'Madison', 'Jeroen',
    'John','Muhammad','Wendell','Jaret','Mansfield','Shawn'];

var nameArray2 = [
    'Noob-Noob', 'Sik', 'Krak', 'Steven', 'Pablo', 'Courtney', 'Weimin',
    'Charles', 'Rick', 'Morty', 'Mom', 'Dad', 'Lebowski', 'Mickey', 'Marco'
];

var raceArray = [
    'goblin', 'orc', 'gnoll', 'skeleton', 'dragon', 'chicken',
    'demon', 'beholder', 'catfish', 'imp', 'knight', 'abomination'
];

  var generateName = function() {

    var name = nameArray[Math.floor(Math.random() * nameArray.length)];

    return name;
  }

var generateRace = function() {

    var race = raceArray[Math.floor(Math.random() * raceArray.length)];

    return race;
}

var generatePortraitLink = function(race) {

    link = "img/crawl/";

    if (raceArray.includes(race) ) {
        link += race;

    }else {
        link += "spectre";
    }

    link +=".png";
    return link;
}

var generateNumber = function() {
    var number = Math.floor(Math.random() * (10- 1)) + 1;

    return number;
}
