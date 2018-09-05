/*
Theme Name: HUGE
Description: Creative Coming Soon Template
Author: SquirrelLabs
Author URI: https://themeforest.net/user/squirrellabs/portfolio?ref=SquirrelLab
Version: 1.0
License: https://themeforest.net/licenses/standard
*/

var makeWinHeight = function(){
	var vh = $(window).height();
	var projects = vh/2 + vh/4;
	var main = projects * 2;
	$('#scene, .layer.gradient, #canvas-basic').height(vh);
	$('#scene .col a, #scene .col').height(projects);
	$('.layer.main').height(main);
}
$(document).ready(function(){
	makeWinHeight();
});
$(window).resize(function(){
	makeWinHeight();
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var app = angular.module('huge', ['ngSanitize']);

app.controller('cardsController', function(){
    this.cards = cardlist;
});

var cardlist = [
    {
        image: 'images/portfolio/img2.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img3.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },

    {
        image: 'images/portfolio/img4.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img5.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img6.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },

    {
        image: 'images/portfolio/img7.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img8.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img9.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },

    {
        image: 'images/portfolio/img10.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img11.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img12.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },

    {
        image: 'images/portfolio/img13.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img14.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img15.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },

    {
        image: 'images/portfolio/img16.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img17.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img18.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },

    {
        image: 'images/portfolio/img19.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img20.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img21.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },

    {
        image: 'images/portfolio/img22.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img23.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    },
    {
        image: 'images/portfolio/img24.jpg',
        title: 'Project Title',
        url: 'project-details.html',
    }
];
