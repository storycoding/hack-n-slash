//===========================================//
//================GAME DATABASE==============//
//===========================================//

var unitCount = 0;

var units = {};


//===========================================//
//=============== UNIT TYPES ================//
//===========================================//

var raceLibrary = {
    "skeleton" : {
        "race" : "skeleton",
        "strength" : [1,3],
        "armor" : [1,3],
    },
    "knight" : {
        "race" : "knight",
        "strength" : [3,5],
        "armor" : [3,5],
    },
    "dragon" : {
        "race" : "dragon",
        "strength" : [5,9],
        "armor" : [5,9],
    },
}

var raceArray = Object.keys(raceLibrary);

//===========================================//
//=============== UNIT NAMES ================//
//===========================================//

var nameArray = [
    'Andy','Janet','Phoebe','Kory','Aric','Nuno', 'Justin', 'Toby',
    'David', 'Walker', 'Hernandez','Bryan', 'Madison', 'Jeroen',
    'John','Muhammad','Wendell','Jaret','Mansfield','Shawn',

    'Noob-Noob', 'Sik', 'Krak', 'Steven', 'Pablo', 'Courtney', 'Weimin',
    'Charles', 'Rick', 'Morty', 'Mom', 'Dad', 'Lebowski', 'Mickey', 'Marco'
    ];




// var misc races = [
//     'goblin', 'orc', 'gnoll', 'skeleton', 'dragon', 'chicken',
//     'demon', 'beholder', 'catfish', 'imp', 'knight', 'abomination'
// ];

//string version of element
// var wrapper = "";
// wrapper += "<div class='portrait'>";
// wrapper += "<img src='img/knightX2.png' alt='knightX2.png'></div>";
// wrapper += "<div class='statsWindow'>";
// wrapper += "<div id='knight' class='name'>knight</div>";
// wrapper += "<div class='statsText'>POWER: 5</div>";
// wrapper += "<div class='statsText'>ARMOR: 5</div>";
// wrapper += "</div>";
// document.write("<div class='unit'>" + wrapper + "</div>");
