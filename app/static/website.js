/*/
/* This file contains all the logic required in the web application.
/*
/* Author: Fredrik Omstedt
/* Date: 2018-10-16
/*/
var NUMBER_OF_IMAGES = 2;
var CURRENT_IMAGE = 0;

//Main function
$(document).ready(function() {
    initiateAboutMe();
});

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function initiateAboutMe() {
    //Get my current age
    var age = getAge('1997-03-16');
    //Show text about me
    var aboutMeText = "Hi, I'm Fredrik! I'm a " + age + " year old guy from Sweden, currently living in Stockholm. "
    $("#about-me-text").text(aboutMeText);
    startAboutMeImageFades();
}

function startAboutMeImageFades() {
    setInterval(function() {
        $("#about-me-image").fadeOut(500, function() {
            CURRENT_IMAGE = (CURRENT_IMAGE + 1) % NUMBER_OF_IMAGES;
            console.log('/static/pictures/about-me-' + CURRENT_IMAGE + '.jpg');
            $("#about-me-image").attr('src', '/static/pictures/about-me-' + CURRENT_IMAGE + '.jpg');
            $("#about-me-image").fadeIn(500);
        });
    }, 5000);
}
