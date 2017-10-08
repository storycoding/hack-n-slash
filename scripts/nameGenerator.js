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

  function generateName() {

    var name = nameArray[Math.floor(Math.random() * nameArray.length)];

    return name;
  }

function generateRace() {

    var race = raceArray[Math.floor(Math.random() * raceArray.length)];

    return race;
}

function generatePortraitLink(race) {
    link = "img/crawl/";
        link += race;
        link +=".png";
        return link;
}

function generateNumber() {
    var number = Math.floor(Math.random() * (10- 1)) + 1;

    return number;
}
