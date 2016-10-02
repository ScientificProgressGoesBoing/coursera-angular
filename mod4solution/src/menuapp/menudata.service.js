(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function(){
      var promise = $http({
        method: 'GET',
        url: (ApiBasePath + '/categories.json')
      }).then(
          function (response){
            return response.data;
          }
      )
        .catch(
            function (error) {
              console.log("Something went terribly wrong.");
            }
       );
      return promise;
  }


  service.getItemsByCategory = function(categoryShortName){
      var categoryUrl = ApiBasePath + '/menu_items.json?category=' + categoryShortName.trim();
      var promise = $http({
        method: 'GET',
        url: categoryUrl
      }).then(
          function (response){
            return response.data.menu_items;
          }
      )
        .catch(
            function (error) {
              console.log("Something went terribly wrong.");
            }
       );
      return promise;
  }


} //end service

})();
