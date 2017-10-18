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
    ["00","01","02","03","04"], // [0][0] , [0][1] , [0][2] , [0][3]
    ["10","11","12","13","14"], // [1][0] , [1][1] , [1][2] , [1][3]
    ["20","21","22","23","24"], // [2][0] , [2][1] , [2][2] , [2][3]
    ["30","31","32","33","34"], // [3][0] , [3][1] , [3][2] , [3][3]
    ["40","41","42","43","44"], // [4][0] , [4][1] , [4][2] , [4][3]
];

chessboard[2][2] = "hero" // initial position of hero

// match the array coordinates with the html grid


var createChessboard = function() {
    var table = document.getElementById("chessboardTable");

    var chessboardElement = document.createElement("table");
    chessboard.id = "chessboard";

    for (var i = 0; i < chessboard.length; i++) {
        //creates the table row
        var tableRow = document.createElement("tr");
        tableRow.id = i;

        if (chessboard.length % 2 === 0) {
            colorFlip();
        }
        
        for (var j = 0; j < chessboard[i].length; j++) {
            //creates each tile
            var tile = document.createElement("td");
            //var tile = document.createElement("button");
            tile.className = colorFlip();
            tile.id = "" + i + j;
            //tile.height = 50px;
            //tile.width = 50px;
            
            //tile.innerHTML = "[" + i + "]" + "[" + j + "]";
            tableRow.appendChild(tile);
        }

        chessboardElement.appendChild(tableRow);
    }
    table.appendChild(chessboardElement)
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


var createGridButton = document.getElementById("createGridButton");
createGridButton.addEventListener("click", function() {
    createChessboard();
});