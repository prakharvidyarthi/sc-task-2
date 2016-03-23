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
sense_words = [];
nonsense_words = [];

myApp.controller('mainController',function($scope){


	angular.element(document).ready(function () {

		$('#content').find('p').remove();
		$("<p>Click on one of the two buttons to generate a random word.</p>").appendTo( '#content' );
			$('#display_word').css("height",$('#content').height());


		$('#nonsense').click(function(event){
			//generate random word

			$('#content').find('p').remove();
			new_word = create_gibberish(Math.floor(Math.random()*28.5)+1);
			$("<p>Word Generated : " + new_word + "</p>").appendTo( '#content' );
			words.push(new_word);
			nonsense_words.push(new_word);
			$('#display_word').css("height",$('#content').height());
	    });

	    $('#generate_button').click(function(event){

			new_word = create_word();

			//remove previous para and append new one
			$('#content').find('p').remove();
			$("<p>Word Generated : " + new_word + "</p>").appendTo( '#content' );
			words.push(new_word);
			sense_words.push(new_word);
			$('#display_word').css("height",$('#content').height());
	    });

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
	angular.element(document).ready(function () {
    	if(words.length==0){
    		$("<p>" + "No words to sort. Use the generator to create new words." + "</p>").appendTo( '#sort_show' );
    	}
    	else{
	    	sense_sorted = sense_words.sort();
	    	nonsense_sorted = nonsense_words.sort();
	    	$("<h2>Dictionary Words</h2><br>").appendTo('#sense_sorted');
	    	for(i=0;i<sense_sorted.length;i++){
				$("<p>" + sense_sorted[i] + "</p>").appendTo( '#sense_sorted' );
			}
			$("<h2>Senseless Words</h2><br>").appendTo('#nonsense_sorted');
			for(i=0;i<nonsense_sorted.length;i++){
				$("<p>" + nonsense_sorted[i] + "</p>").appendTo( '#nonsense_sorted' );
			}  
		}
  	});
});
