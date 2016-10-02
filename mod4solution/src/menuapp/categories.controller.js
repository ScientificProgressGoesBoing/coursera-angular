(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categoryEntries'];
function CategoriesController(categoryEntries) {
  var cat = this;
  cat.categoryEntries = categoryEntries;
}

})();
