"use strict";

// responsive global nav bar --> sidebar menu with button
function myFunction() {
    var x = document.getElementById("myNavBar");

    var y = x.className;
    console.log(y);
    console.log(x.c);
    
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}