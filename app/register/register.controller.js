/**
 * 
 */

'use strict';

angular.module('dispatch').controller('RegisterController', RegisterController);
 
    RegisterController.$inject = ['UserService', '$location', '$rootScope','$state','$scope'];
    function RegisterController($scope, $state, $location) {
    	
    	$scope.submitForm = function(){
    		
    	    // check to make sure the form is completely valid
    			console.log("hsdsad");
    			$scope.submitted = true;
    		
    	}
        
    }
 