(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'menuItems' is injected through state's resolve
ItemsController.$inject = ['menuItems', 'currentCategory']
function ItemsController(menuItems, currentCategory) {
  var it = this;
  it.items = menuItems;
  it.currentCategory = currentCategory;

} //end controller

})();
