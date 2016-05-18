angular
  .module('app')
  .controller('welcomeCtrl', ['$scope','$state', function($scope,$state) {
  	$scope.clear=function()
  	{
  		localStorage.clear();
  	}
  }]);