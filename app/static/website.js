/*/
/* This file contains all the logic required in the web application.
/*
/* Author: Fredrik Omstedt
/* Date: 2018-10-16
/*/
var NUMBER_OF_IMAGES = 5;
var CURRENT_IMAGE = 0;

//Main function
$(document).ready(function() {
    initiateTop();
    initiateAboutMe();
    initiateCV();
    initiateContactMe();
    initiateFooter();
});

function initiateTop() {
    $("#about-me-btn").click(function() {
        $('html,body').animate({
            scrollTop: $("#about-me").offset().top - parseInt($("#about-me").css("margin-top"))/4},
        'slow');
    });

    $("#cv-btn").click(function() {
        $('html,body').animate({
            scrollTop: $("#cv").offset().top - parseInt($("#cv").css("margin-top"))/4},
        'slow');
    });

    $("#portfolio-btn").click(function() {
        $('html,body').animate({
            scrollTop: $("#portfolio").offset().top - parseInt($("#portfolio").css("margin-top"))/4},
        'slow');
    });

    $("#contact-me-btn").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact-me").offset().top - parseInt($("#contact-me").css("margin-top"))/4},
        'slow');
    });

    document.addEventListener('scroll', function() {
        var y = $(this).scrollTop();
        var aboutMe = $("#about-me").offset().top - parseInt($("#about-me").css("margin-top"));
        var cv = $("#cv").offset().top - parseInt($("#cv").css("margin-top"));
        var portfolio = $("#portfolio").offset().top - parseInt($("#portfolio").css("margin-top"));
        var contactMe = $("#contact-me").offset().top - parseInt($("#contact-me").css("margin-top"));

        if(y < aboutMe) {
            $('body').css('background-image', 'url("/static/pictures/background-0.jpg")');
        } else if(y < cv) {
            $('body').css('background-image', 'url("/static/pictures/background-1.jpg")');
        } else if(y < portfolio) {
            $('body').css('background-image', 'url("/static/pictures/background-2.jpg")');
        } else if(y < contactMe) {
            $('body').css('background-image', 'url("/static/pictures/background-3.jpg")');
        } else if(y >= contactMe) {
            $('body').css('background-image', 'url("/static/pictures/background-0.jpg")');
        }
    });
}

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
    var aboutMeText = "Hi, I'm Fredrik! I'm a " + age + " year old guy from" +
     " Sweden, currently living in Stockholm, a place I've lived all my life." +
     " \n \n Growing up with my parents, my brother and a vast array of pets, " +
     "I've always had a passion for video games. I got my first GameBoy at 5 " +
     "and since then, I've been hooked. Countless hours have been spent on " +
     "games such as Runescape, World of Warcraft, Pokémon, Jak and Daxter, " +
     "Guitar Hero, and so on... At around 11 years old, I also realized how " +
     "fun it is to make games, which in turn led me to start programming. " +
     "It is definitely one of the cornerstones of who I am.\n \n " +
     "Another important part in my life is music. At 8 years old, I got a guitar as a " +
     "christmas present, and I immediately started playing. I started taking " +
     "lessons, and only found it more and more enjoying. After a few years, I " +
     "decided to get an electric guitar, and from there on out my love for rock " +
     "and metal music evolved. Currently, I listen to a lot of Metallica, Five " +
     "Finger Death Punch and Alter Bridge, often while jamming along on my Explorer.\n \n" +
     "Even though the topics above are really important to me, there is nothing " +
     "I love more than golf. It is truly a sport that I can't get enough of, " +
     "whether I am out playing, watching a major, or grinding on the putting green. " +
     "I started playing when I was about 9, but got really into it when I was 15. " +
     "I am now a single handicap, working my way down towards playing scratch.\n\n" +
     "When I started studying at KTH, I realized how fun it can be to take part " +
     "in the student life and all its activities. During the years I've studied, " +
     "I've helped new students get accustomed to KTH during their first weeks, " +
     "helped create fun parties and pubs for other students, and more! It has " +
     "been a great experience that has resulted in lots of personal growth, and " +
     "a bunch of new friends.";
    $("#about-me-text").text(aboutMeText);
    startAboutMeImageFades();
}

function startAboutMeImageFades() {
    setInterval(function() {
        $("#about-me-image").fadeOut(500, function() {
            CURRENT_IMAGE = (CURRENT_IMAGE + 1) % NUMBER_OF_IMAGES;
            $("#about-me-image").attr('src', '/static/pictures/about-me-' + CURRENT_IMAGE + '.jpg');
            $("#about-me-image").fadeIn(500);
        });
    }, 10000);
}

function initiateCV() {
    $("#download-cv-button").on("click", function() {
        window.print();
    });
}

function initiateContactMe() {
    $("#contact-button").on("click", function() {
        if($("#contact-name").val() === "") {
            $("#contact-response").text("Please specify your name.");
            return;
        } else if($("#contact-email").val() === "") {
            $("#contact-response").text("Please specify your email address.");
            return;
        } else if($("#contact-message").val() === "") {
            $("#contact-response").text("Please write a message.");
            return;
        }

        $.ajax({
    		url: '/send_message',
    		contentType: 'application/json',
    		method: 'post',
    		data: JSON.stringify({
                'name': $("#contact-name").val(),
                'email': $("#contact-email").val(),
                'message': $("#contact-message").val()
            }),
            success: function(response) {
                $("#contact-response").text("Your message was sent!");
            },
            error: function(response) {
                $("#contact-response").text("Something went wrong, please try again.");
            }
	   });
       var btn = $(this);
       btn.prop('disabled', true);
       window.setTimeout(function() {
           btn.prop('disabled', false);
       }, 5000);
    });
}

function initiateFooter() {
    $("#back-to-top-button").click(function() {
        $('html,body').animate({
            scrollTop: 0},
        'slow');
    });
}
