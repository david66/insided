'use strict';

angular.module('insidedApp')
	.directive('content',function(){
		return {
        templateUrl:'js/directives/content/content.html',
        restrict: 'E',
        replace: true,
    	}
	});


