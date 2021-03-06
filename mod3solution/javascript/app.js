( function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService )
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems );
 
 
function FoundItems() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'narrow',
    bindToController: true
  };

  return ddo;
} 

function FoundItemsDirectiveController() {
  var narrow = this;

  narrow.isEmpty = function () {
    return narrow.found && narrow.found.length == 0;
  }
}

 
 
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchTerm = '';

  
  narrow.filterMenu = function (searchTerm){  
    if (narrow.searchTerm.trim().length == 0) { return narrow.found = [];}
    return MenuSearchService.getMatchedMenuItems(searchTerm)
    .then(              
            function (response){
                narrow.found = response;
            }
          );
  }
   
  // narrow.filterMenu(narrow.searchTerm);  //display items on startup


  narrow.removeItem = function (itemIndex) {
    narrow.found.splice(itemIndex, 1);
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
            var found = [];
            while (item = response.data.menu_items.shift()){
              if (item.description.toLowerCase().indexOf( searchTerm.toLowerCase() ) != -1){
                found.push(item);
              }     
            }   
            return found; 
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
