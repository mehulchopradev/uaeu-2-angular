var app = angular.module('namegenerator', []);
app.controller('namegeneratorCtrl', function($scope){
  $scope.friends = ['friend1 xyz', 'friend2 pqr'];
  $scope.firstName = 'mehul';
  $scope.lastName = 'chopra';
  $scope.addName = function () {
    var fullName = $scope.firstName + ' ' + $scope.lastName;
    $scope.friends.push(fullName);

    $scope.firstName = '';
    $scope.lastName = '';
  };
});
