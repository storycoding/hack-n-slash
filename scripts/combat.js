var rollDamage = function(unit) {
    return Math.floor(Math.random() * (unit.strength)) +1;
}

barbarian = {
    name : "barbarian",
    strength : 6,
    //armor : 2,
    //break : 1
}

paladin = {
    name : "paladin",
    strength : 6,
    //armor : 5,
    //break : 3
}

//=====================//

function attack(unitA, unitB) {

    var damage = rollDamage(unitA);
    unitB.strength -= damage;

    var attackLog = "" + unitA.name + " rolled " + damage + " damage. "
    + unitB.name + " has " + unitB.strength + " strength left."

    console.log(attackLog);
}

// function attack(unitA, unitB) {
//     var damage = unitA.strength - unitB.armor;
//
//     unitB.strength = unitB.strength - damage;
//
//     var attackLog = "" + unitA.name + " dealt " + damage + " damage. "
//     + unitB.name + " has " + unitB.strength + " strength left."
//
//     console.log(attackLog);
// }

function combat(first, second) {

    if (first.strength < 1) {
        console.log("" + first.name + " is dead. " + second.name + " is victorious.");
        delete(first);
        return;

    } else if (second.strenght < 1) {
        console.log("" + second.name + " is dead. " + first.name + " is victorious.");
        delete(second);
        return;

    } else {
        attack(first, second);
        [first, second] = [second, first];
        combat(first, second);
    }
}

combat(barbarian, paladin);
