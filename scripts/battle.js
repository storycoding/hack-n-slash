var creatures = {
    dragon : {
        strength : 18,
        armor : 12,
        break : 2
    },
    chimaera : {
        strength : 24,
        armor : 6,
        break : 4

    }
}

var getFighters = function() {
  unitA = document.getElementById("unitADropDown");
  unitB = document.getElementById("unitBDropDown");
}

var attack = function(unitA, unitB) {

  //get unitA and unitB from dropdown

  damageA = unitA.strength;

  damageB = unitB.strength;

  unitA.strength -= damageB;
  unitB.strength -= damageA;

  attackMessage = "" + unitA.race + " " + unitA.name + " and " + unitB.race + " " + unitB.name + " took a swing at each other."
  return attackMessage;

}





var pickFighters = function(unitA, unitB) {
    //ALTERNATIVELY use values from dropdown boxes

   var parentA = document.getElementById("unitA");
   var parentB = document.getElementById("unitB");

   parentA.appendChild(unitA.node);
   parentB.appendChild(unitB.node);

   //create exceptions and return values
}


//BATTLE UNIT SELECTOR SHOULD AUTOMATICALLY UPDATE THE CORRESPONDING BATTLER

//pickFighters(units.dragonJohn, units.gryphonCharles);

//create two dropdown inputs with all the creature var names in the battle screen

    //create a battle button
        //create a display battlers function that takes in two objects from units.
        //create two html elements that correspond to the creature var names (use bestiary as reference)

//create a tiny gif overlay as a chessboard piece

//turn all tiles into buttons
//define the tile background color in JS
//create a function that alerts the clicked tile's id
