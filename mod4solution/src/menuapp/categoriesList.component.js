(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menuapp/templates/categoriesListComponent.template.html',
  bindings: {
    categoryEntries: '<'
  }
});

})();
