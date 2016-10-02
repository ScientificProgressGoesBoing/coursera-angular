(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/itemsComponent.template.html',
  bindings: {
    items: '<'
  }
});


})();
