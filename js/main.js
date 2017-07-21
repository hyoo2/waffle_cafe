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
/* 
// photo carousel on home page
var carousel = (function() {
    var box = document.querySelector('.carouselBox');
    var next = box.querySelector('.next');
    var prev = box.querySelector('.prev');

    var items = box.querySelectorAll('#carouselContent li');
    var counter = 0;
    var amount = items.length;
    var current = items[0];

    //console.log(current);

    box.classList.add('active');

    function navigate(direction) {
        current.classList.remove('current');
        //console.log(current);
        counter = counter + direction;
        
        if (direction === -1 && counter < 0) {
            counter = amount - 1;
        }
        
        if (direction === 1 && !items[counter]) {
            counter = 0;
        }

        current = items[counter];
        current.classList.add('current');
     }

    next.addEventListener('click', function(ev) {
        navigate(1);
    });

    prev.addEventListener('click', function(ev) {
        navigate(-1);
    });

    navigate(0);
})(); */