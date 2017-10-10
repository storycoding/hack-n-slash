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
    
    createUnitNode(race, name, strength, armor);

    return createUnitObject(race, name, strength, armor);
};



//============== CREATE OBJECT ==============//

var createUnitObject = function(race, name, strength, armor) {
    var unitVarName = "" + race + name;

    units[unitVarName] = {
        race : race,
        name : name,
        strength : strength,
        armor : armor
    };
    console.log(JSON.stringify(units[unitVarName]));
};

//================ CREATE NODE ===============//

var createUnitNode = function(race, name, strength, armor) {
    
    var wrapper = document.getElementById("wrapper");
    var unit = document.createElement("div");

        unit.className = "unit";

        var portraitDiv = document.createElement("img");
        portraitDiv.className = "portrait";
        portraitDiv.src = raceLibrary[race].link;

        var statsDiv = document.createElement("div");
        statsDiv.className = "statsWindow";

        var nameDiv = document.createElement("div");
        nameDiv.className = "unitTitle";

         var raceDiv = document.createElement("div");
        raceDiv.className = "unitTitle";

        var strengthDiv = document.createElement("div");
        strengthDiv.className = "statsText";

        var armorDiv = document.createElement("div");
        armorDiv.className = "statsText";

        var raceNode = document.createTextNode(race);
        var nameNode = document.createTextNode(name);
        var strengthNode = document.createTextNode("STRENGTH: " + strength);
        var armorNode = document.createTextNode("ARMOR: " + armor);

        raceDiv.appendChild(raceNode);
        nameDiv.appendChild(nameNode);
        strengthDiv.appendChild(strengthNode);
        armorDiv.appendChild(armorNode);

        statsDiv.appendChild(raceDiv);
        statsDiv.appendChild(nameDiv);
        statsDiv.appendChild(strengthDiv);
        statsDiv.appendChild(armorDiv);

        unit.appendChild(portraitDiv);
        unit.appendChild(statsDiv);


    wrapper.appendChild(unit);
    console.log(unit);
    unitCount ++;

    console.log("Node created for " + race + name + ".");
};





//===========================================//
//================ CREATE RACE ==============//
//===========================================//

var generateRacePreset = function() {

    var newRace = {};

    var raceInput = document.getElementById("raceInput").value.toLowerCase();
    

    var strengthMinInput = parseInt(document.getElementById("strengthMinInput").value);

    var strengthMaxInput = parseInt(document.getElementById("strengthMaxInput").value);

    var armorMinInput = parseInt(document.getElementById("armorMinInput").value);

    var armorMaxInput = parseInt(document.getElementById("armorMaxInput").value);

    if( (raceInput === undefined) ||
        (strengthMinInput === undefined) || (strengthMaxInput === undefined) ||
        (armorMinInput === undefined) || (armorMaxInput === undefined) ) {
        alert("one of the fields was not filled in");
        return;
    }

    raceLibrary[raceInput] = {
        race : raceInput,
        strength : [strengthMinInput,strengthMaxInput],
        armor : [armorMinInput,armorMaxInput],
        link: "gif/spectre.gif"
    };

    //DROPDOWN MENU NODE
    var childNode = document.createElement("option");
    childNode.value = raceInput;
    childNode.innerHTML = raceInput;

    var parentNode = document.getElementById("raceDropDown");

    parentNode.appendChild(childNode);

    console.log("New unit race created");
    console.log(JSON.stringify(raceLibrary[raceInput]));
}