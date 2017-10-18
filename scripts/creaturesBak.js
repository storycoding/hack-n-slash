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


var attack = function() {
    alert("unit A attacks unit B");
}


var attackButton = document.getElementById('attack');
attackButton.addEventListener("click", function() {
    attack();
});



var movement = function() {

    //button onclick
        // detect if movement is possible
            // detect the current position
            // compare with desired position
                //check possible

        // if possible :
            // move unit to desired location
                //moveAI()
                //return

            // or movement()
};

var checkPath = function() {
    //tile references in html should match position in array
    //each unit in game has a position in the array
};

var chessboard = [
    ["00","01","02","03"], // [0][0] , [0][1] , [0][2] , [0][3]
    ["10","11","12","13"], // [1][0] , [1][1] , [1][2] , [1][3]
    ["20","21","22","23"], // [2][0] , [2][1] , [2][2] , [2][3]
    ["30","31","32","33"], // [3][0] , [3][1] , [3][2] , [3][3]
];

chessboard[2][2] = "hero" // initial position of hero

// match the array coordinates with the html grid

var color = "white";

var colorFlip = function() {

    if (color === "white") {
        color = "black";
        return "white";

    } else {
        color = "white";
        return "black";
    }
}

var createChessboard = function() {
    var body = document.getElementById("body");

    var chessboardElement = document.createElement("table");
    chessboard.id = "chessboard";

    for (var i = 0; i < chessboard.length; i++) {
        //creates the table row
        var tableRow = document.createElement("tr");
        tableRow.id = i;

        for (var j = 0; j < chessboard[i].length; j++) {
            //creates each tile
            var tile = document.createElement("button");
            tile.id = "" + i + j;
            tile.class = colorFlip(); //dunno why it's not working
            tile.innerHTML = "[" + i + "]" + "[" + j + "]";
            tableRow.appendChild(tile);
        }

        chessboardElement.appendChild(tableRow);
    }
    body.appendChild(chessboardElement)
    return JSON.stringify(chessboard);
}


//creating all grid elements


var logChessboard = function() {
    for (var i = 0; i < chessboard.length; i++) {
        for (var j = 0; j < chessboard[i].length; j++) {
            console.log("" + i + j);
        }
    }
    return JSON.stringify(chessboard);
}


var log fighters = function(unitA, unitB) {
   var unitA = units[unitA];
   var unitB = units[unitB];

   //ALTERNATIVELY use values from dropdown boxes
}

//create two dropdown inputs with all the creature var names in the battle screen

    //create a battle button
        //create a display battlers function that takes in two objects from units.
        //create two html elements that correspond to the creature var names (use bestiary as reference)

//create a tiny gif overlay as a chessboard piece

//turn all tiles into buttons
//define the tile background color in JS
//create a function that alerts the clicked tile's id
