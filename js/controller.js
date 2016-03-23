var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.htm',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/history', {
                templateUrl : 'pages/history.htm',
                controller  : 'historyController'
            })

            // route for the contact page
            .when('/sort', {
                templateUrl : 'pages/sort.htm',
                controller  : 'sortController'
            });
    });

words = [];

myApp.controller('mainController',function($scope){


	angular.element(document).ready(function () {

		$('#content').find('p').remove();
		$("<p>Click on one of the two buttons to generate a random word.</p>").appendTo( '#content' );
			$('#display_word').css("height",$('#content').height());


		$('#nonsense').click(function(event){
			//generate random word

			$('#content').find('p').remove();
			new_word = create_word(Math.floor(Math.random()*28.5)+1);
			$("<p>Word Generated : " + new_word + "</p>").appendTo( '#content' );
			words.push(new_word);
			$('#display_word').css("height",$('#content').height());
	    });

	    $('#generate_button').click(function(event){

			//get English word from api
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "http://randomword.setgetgo.com/get.php", false);
			xhr.send();
			
			new_word = (xhr.responseText);

			//remove previous para and append new one
			$('#content').find('p').remove();
			$("<p>Word Generated : " + new_word + "</p>").appendTo( '#content' );
			words.push(new_word);
			$('#display_word').css("height",$('#content').height());
	    });

	    function create_word(length){
			var word = [];
			vowels = 'aeiou';
			consonants = 'bcdfghjklmnpqrstvwxyz';
			for(i=0;i<length;i++){
				if(Math.random()>0.5){
					word[i] = consonants[Math.floor(Math.random()*20.9)];
				}
				else{
					word[i] = vowels[Math.floor(Math.random()*4.9)];
				}
			}	
			return word.join('');
		}
	});

});


myApp.controller('historyController', function($scope) {
    
    angular.element(document).ready(function () {
    	if(words.length==0){
    		$("<p>" + "No words to show. Use the generator to create new words." + "</p>").appendTo( '#content_show' );
    	}
		for(i=0;i<words.length;i++){
			$("<p>" + words[i] + "</p>").appendTo( '#content_show' );
		}   	        
	});

});

myApp.controller('sortController', function($scope) {
    });
