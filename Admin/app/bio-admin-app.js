var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.authors = "Faseeh Ahmed and Merriab Helebo";
}]);