angular
  .module('app')
  .controller('finalCtrl', ['$scope','$state', function($scope,$state) {
  	$scope.gotohome=function()
  	{
  		$state.go('welcome');
  	}

  	$scope.logout=function()
  	{
  		localStorage.clear();
  		alert("Successfully logged out");
      $state.go('welcome');
  	}

  }]);