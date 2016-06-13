/**
 * Kavita Hundal 
 *
 */

'use strict';

angular.module('dispatch').controller('loginController', ['$scope', '$location','AuthenticationService', function($scope) {
	var vm = this;
	vm.formDate = {};
	
	//function to process form
	vm.processForm = function(){
		alert("awesome!");
	}
	
	function login() {
        vm.dataLoading = true;
        AuthenticationService.Login(vm.username, vm.password, function (response) {
            
        	//if success, then set credentials (username and password)
        	if (response.success) {
                AuthenticationService.SetCredentials(vm.username, vm.password);
                $location.path('/');
                
            //if failure
            } else {
                FlashService.Error(response.message);
                vm.dataLoading = false;
            }
        });
    };
	
}]);