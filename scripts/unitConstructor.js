//===========================================//
//===========using a constructor=============//
//===========================================//

var Unit = function(name, strength, armor) {

    //name is a property, not the var name
    this.name = name;
    this.strength = strength;
    this.armor = armor;
}

// requires 2 inputs for the same name (more prone to error)
var Marco = new Unit("Marco", 3, 3);
delete (Marco); // outputs false

//elements in the var space can't be deleted.

Marco = new Unit("Marco", 3, 3);
delete (Marco); // outputs true

//however, I still prefer using createUnit() because it avoids name repetition

//===========================================//
//===========ignore this for now=============//
//===========================================//

// Unit creation Log for createUnit()
var creationLog = "" + name + " was born with " + str + " strenght, " + arm + " armor.";
//use as return value of function instead of the object itself

//constructor log function
this.displayStats = function() {

    var statsText = ("Unit name: " + this.name + "\n" +
    "Strength: " + this.strength + "\n" +
    "Armor: " + this.armor);

    console.log(statsText);
}
