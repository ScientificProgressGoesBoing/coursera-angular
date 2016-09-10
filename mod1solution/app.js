(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
  $scope.items = "";
  $scope.message = "";

  $scope.calculateMessage = function() {
    if ( $scope.items.trim().length == 0 )
      $scope.message = "Please enter data first";
    else {
    var arr = $scope.items.trim().split( "," );
    arr = arr.clean("");
    var numberOfItems = arr.length;
    if (numberOfItems <= 3) { $scope.message = "Enjoy!"; }
    else { $scope.message = "Too much!"; }
  }}

  Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
  };

};


})();
