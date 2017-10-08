var hello = function() {
    console.log("hello");
}
var combatButton = document.getElementById('fightButton');
combatButton.addEventListener("click", function(){hello()});
