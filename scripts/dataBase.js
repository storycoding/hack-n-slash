//===========================================//
//================GAME DATABASE==============//
//===========================================//

var unitCount = 0;

var units = {};


//===========================================//
//=============== UNIT TYPES ================//
//===========================================//

var raceLibrary = {

    "zombie" : {
        race : "zombie",
        strength : [1,1],
        armor : [1,1],
        link: "gif/zombie.gif"
    },
    "goblin" : {
        race : "goblin",
        strength : [1,2],
        armor : [1,2],
        link: "gif/goblin.gif"
    },
    "skeleton" : {
        race : "skeleton",
        strength : [2,3],
        armor : [1,3],
        link: "gif/skeleton.gif"
    },
    "satyr" : {
        race : "satyr",
        strength : [3,5],
        armor : [1,3],
        link: "gif/satyr.gif"
    },
    "knight" : {
        race : "knight",
        strength : [2,5],
        armor : [3,5],
        link: "gif/knight.gif"
    },
     "octopus" : {
        race : "octopus",
        strength : [4,8],
        armor : [1,2],
        link: "gif/octopus.gif"
    },
    "dragon" : {
        race : "dragon",
        strength : [5,9],
        armor : [5,9],
        link: "gif/dragon.gif"
    },
    "gryphon" : {
        race : "gryphon",
        strength : [8,13],
        armor : [3,4],
        link: "gif/gryphon.gif"
    },

}

var raceArray = Object.keys(raceLibrary);

//===========================================//
//=============== UNIT NAMES ================//
//===========================================//

var nameArray = [
    'Andy','Janet','Phoebe','Kory','Aric','Nuno', 'Justin', 'Toby',
    'David', 'Walker', 'Hernandez','Bryan', 'Madison', 'Jeroen',
    'John','Muhammad','Wendell','Jaret','Tim','Shawn',

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
