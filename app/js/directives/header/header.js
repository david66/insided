'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('insidedApp')
	.directive('header',function(){
		return {
        templateUrl:'js/directives/header/header.html',
        restrict: 'E',
        replace: true,
    	}
	});


