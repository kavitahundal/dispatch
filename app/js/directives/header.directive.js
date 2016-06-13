/**
 * Kavita Hundal 
 */

'use strict';

dispatch.directive('kavita', function () {
	console.log("JATTTT");

	return {
		scope:{user:'='}, 
		templateUrl:"main-page/header.html"
	}
});