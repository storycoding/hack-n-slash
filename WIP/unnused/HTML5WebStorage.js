//W3Schools HTML5 web storage tutorial

//web storage units (OBJECTS)

window.localStorage //no expiry date

window.sessionStorage //expires with tab closure


//store
localStorage.setItem("lastname","Smith");
//or
localStorage.lastname = "Smith";



//retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//or
document.getElementById("result").innerHTML = localStorage.lastname;

//remove one item
localStorage.removeItem();

//remove all items
localStorage.clear();

//IT IS ADVISED TO USE THE WEB STORAGE API (SetItem, getItem, removeItem, key, length)