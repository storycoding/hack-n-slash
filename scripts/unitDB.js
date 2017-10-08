//===========================================//
//======creating a unit (lexical space)======//
//===========================================//


//HANDLE EXCEPTIONS:

//CREATE UNIT
    //IF NOTHING IS ENTERED, MAKE A RANDOM ONE
        //ALSO DISPLAY EXCEPTION MESSAGE
    //IF UNIT ALREADY EXISTS

    //IF NAME EXISTS IN DATABASE, USE AN IMAGE

var unitCount = 0;

var createUnit = function(name, str, arm) {

    window[name] = {
        name: name,
        strength: str,
        armor: arm
    };
    console.log(JSON.stringify(window[name]));
};

var createUnitNode = function() {

    if (unitCount > 5) {
        alert("you can only have 5 units at this time.");
        return;
    }


var race = "";
var varName = "";

    //name exception handler
    var nam = document.getElementById('nameInput');
    if (nam.value === "race") {
        race = generateRace();
        varName = race;
        nam = race;
        nam += " ";
        var randomName = generateName();
        varName += randomName;
        nam += randomName;

    } else {
        race = nam;
        varName = race;
        var randomName = generateName();
        varName += randomName;
        nam = "" + race + " " + randomName;
    }

    if (window[varName] !== undefined) {
        console.log("unit already exists");
        return;
    }

    //stats exception handler
    var pow = document.getElementById('powerInput');
    if (pow.value === "power") {
        pow = generateNumber();
    } else {
    pow = pow.value;
    }

    var arm = document.getElementById('armorInput');
    if (arm.value === "armor") {
        arm = generateNumber();
    } else {
    arm = arm.value;
    }

    createUnit(varName, pow, arm);

    var wrapper = document.getElementById("wrapper");
    var unit = document.createElement("div");

        unit.className = "unit";

        var portraitDiv = document.createElement("img");
        portraitDiv.className = "portrait";
        portraitDiv.src = generatePortraitLink(race);

        //if height > 64px
            //portraitDiv.style.height = "64px";

        //if width > 48px
            //portraitDiv.style.width = "48px";

        var statsDiv = document.createElement("div");
        statsDiv.className = "statsWindow";

        var nameDiv = document.createElement("div");
        nameDiv.className = "name";

        var powerDiv = document.createElement("div");
        powerDiv.className = "statsText";

        var armorDiv = document.createElement("div");
        armorDiv.className = "statsText";


        var name = document.createTextNode(nam);
        var power = document.createTextNode("POWER: " + pow);
        var armor = document.createTextNode("ARMOR: " + arm);


        nameDiv.appendChild(name);
        powerDiv.appendChild(power);
        armorDiv.appendChild(armor);

        statsDiv.appendChild(nameDiv);
        statsDiv.appendChild(powerDiv);
        statsDiv.appendChild(armorDiv);

        unit.appendChild(portraitDiv);
        unit.appendChild(statsDiv);


    wrapper.appendChild(unit);
    console.log(unit);
    unitCount ++;
};

// createUnit("Marco", 7, 7);
// console.log(JSON.stringify(Marco));

//delete(Marco); //sorry Marco!
// console.log(Marco);
//object no longer exists - good!


// WHAT I NEED TO DO:
// transform this object into an html grid element
// do it inside of the createUnit function

var unitMakerButton = document.getElementById('unitMaker');
console.log(unitMakerButton);
unitMakerButton.addEventListener("click", function(){
    createUnitNode();
});



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
