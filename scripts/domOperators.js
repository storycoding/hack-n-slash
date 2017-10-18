

//================ OBJECT TO NODE ===============//


//works with bestiary, but not with battle. must break down this huge function
var objectToNode = function(object) {
    

    var wrapper = document.getElementById("wrapper");
    var node = document.createElement("div");
        node.className = "unit";

        //creating elements and assigning element values
        var portraitDiv = document.createElement("img");
        portraitDiv.className = "portrait";
        portraitDiv.src = raceLibrary[object.race].link;

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

        var raceNode = document.createTextNode(object.race);
        var nameNode = document.createTextNode(object.name);
        var strengthNode = document.createTextNode("STRENGTH: " + object.strength);
        var armorNode = document.createTextNode("ARMOR: " + object.armor);

        //appending the nodes in the right order
        raceDiv.appendChild(raceNode);
        nameDiv.appendChild(nameNode);
        strengthDiv.appendChild(strengthNode);
        armorDiv.appendChild(armorNode);

        statsDiv.appendChild(raceDiv);
        statsDiv.appendChild(nameDiv);
        statsDiv.appendChild(strengthDiv);
        statsDiv.appendChild(armorDiv);

        node.appendChild(portraitDiv);
        node.appendChild(statsDiv);

        //store the node in the object
        object.node = node;
        unitCount ++;

        return node;
};

//================ APPEND NODE ==============//

var appendNode = function(parentNode,childNode) {
parentNode.appendChild(childNode);
//console.log(childNode.value + "appended to " + parentNode.value + " //testing this");
}

//======== REMOVE ALL CHILD NODES ===========//

var removeAllChildren = function(node) {
    while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
    }
}

//====== ADD NODE FROM DROPDOWN MENU =======//

var objectFromDropDown = function(dropdownID) {

    var dropDown = document.getElementById(dropdownID);

    //alert("dropDown options = " + dropDown.options);
    //alert("dropDown selectedIndex = " + dropDown.selectedIndex);

    var objectRef = dropDown.options[dropDown.selectedIndex].value;
    //alert(objectRef);

    var object = unitLibrary[objectRef];

    return object;
}

//============== UPDATE DROPDOWN ============//

//HAD TO SPLIT FUNCTION INTO TWO BECAUSE I COULDN'T ADD THE STRING CONTENT TO THE HTML FUNCTION CALL
    //SUCH A NOOB

var updateDropDownA = function() {

    var parentNode = document.getElementById("unitA"); // wrong accessor
    removeAllChildren(parentNode);

    var object = objectFromDropDown("unitADropDown");
    //alert("object = " + JSON.stringify(object)); //all good!
    var childNode = objectToNode(object);

    appendNode(parentNode, childNode);

    //add the matching child node (object to )

    //change source of dropdown to match the created units object

    //make new childNode from object
        //append the new childNode to parentNode

};

var updateDropDownB = function() {

    var parentNode = document.getElementById("unitB"); // wrong accessor
    removeAllChildren(parentNode);

    var object = objectFromDropDown("unitBDropDown");
    var childNode = objectToNode(object);

    appendNode(parentNode, childNode);

    //add the matching child node (object to )

    //change source of dropdown to match the created units object

    //make new childNode from object
        //append the new childNode to parentNode

};


//one function for creating a battle message that is called on every battle round
//another function that transforms that message into a node and appends it to the battleLog

var attackLog = function() {

    var parentNode = document.getElementByClass("battleLog");

    var battleMessageNode = documment.createTextNode();

    battleMessage.innerHTML = battleMessage;
    var childNode = battleMessageNode;

    parentNode.appendChild(childNode);
    //creates a battle message
        //BASED ON WHICH ATTACKER - creates a paragraph element with that message
            //appends the paragraph to the battleLog div

    //wait 1 second in between messages

    //update unit display strengths

}

var updateElements = function() {
    //get all corresponding objectd
    //reset the element values accordingly
}

//===========================================//
//=============== WEB STORAGE ===============//
//===========================================//

//============= removeLocalNodes ============//
var removeLocalNodes = function() {
    localStorage.removeItem("nodes"); //testing
    return localStorage;
}

//===========================================//
//============= CREATE NEW RACE =============//
//===========================================//

// var generateRacePreset = function() {

//     var newRace = {};

//     var raceInput = document.getElementById("raceInput").value.toLowerCase();
    

//     var strengthMinInput = parseInt(document.getElementById("strengthMinInput").value);

//     var strengthMaxInput = parseInt(document.getElementById("strengthMaxInput").value);

//     var armorMinInput = parseInt(document.getElementById("armorMinInput").value);

//     var armorMaxInput = parseInt(document.getElementById("armorMaxInput").value);

//     if( (raceInput === undefined) ||
//         (strengthMinInput === undefined) || (strengthMaxInput === undefined) ||
//         (armorMinInput === undefined) || (armorMaxInput === undefined) ) {
//         alert("one of the fields was not filled in");
//         return;
//     }

//     raceLibrary[raceInput] = {
//         race : raceInput,
//         strength : [strengthMinInput,strengthMaxInput],
//         armor : [armorMinInput,armorMaxInput],
//         link: "gif/spectre.gif"
//     };

//     //DROPDOWN MENU NODE
//     var childNode = document.createElement("option");
//     childNode.value = raceInput;
//     childNode.innerHTML = raceInput;

//     var parentNode = document.getElementById("raceDropDown");

//     parentNode.appendChild(childNode);

//     console.log("New unit race created");
//     console.log(JSON.stringify(raceLibrary[raceInput]));
// }