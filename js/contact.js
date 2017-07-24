"use strict"

// map
function initMap() {
    // UW coordinates - fake address for Waffle Cafe
    var waffleCafe = {
        lat: 47.6,
        lng: -122.3
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: waffleCafe
    });

    var marker = new google.maps.Marker({
        position: waffleCafe,
        map: map,
        icon: '../images/yellow-dot.png'
    });
}