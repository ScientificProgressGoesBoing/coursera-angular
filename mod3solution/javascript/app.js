( function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService )
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchTerm = '';
  narrow.items = [];

  
  narrow.filterMenu = function (searchTerm){  
    return MenuSearchService.getMatchedMenuItems(searchTerm)
    .then(              
            function (response){
                narrow.items = response;
            }
          );
  }
   
  narrow.filterMenu(narrow.searchTerm);


  narrow.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
 
}//end controller


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  
  service.getMatchedMenuItems = function(searchTerm){ 
      var promise = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'      
      }).then(
          function (response){
            var item;
            var foundItems = [];
            while (item = response.data.menu_items.shift()){
              if (item.name.toLowerCase().indexOf(searchTerm) != -1){
                foundItems.push(item);
              }     
            }   
            return foundItems; 
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

  
  
  
})(); //end module
