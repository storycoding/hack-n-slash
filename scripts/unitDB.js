//===========================================//
//======creating a unit (lexical space)======//
//===========================================//

var createUnit = function(name, str, arm) {
    window[name] = {
        name: name,
        strength: str,
        armor: arm
    }
    return window[name];
}

createUnit("Marco", 7, 7);
console.log(Marco);

delete(Marco); //sorry Marco!
console.log(Marco);
//object no longer exists - good!


// WHAT I NEED TO DO:
// transform this object into an html grid element
// do it inside of the createUnit function
