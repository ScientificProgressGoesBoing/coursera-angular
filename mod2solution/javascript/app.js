(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;  
  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
 
  toBuy.moveItem = function (itemIndex) {
     ShoppingListCheckOffService.moveItem(itemIndex);
  };

}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;
  
  // Hardcoded start settings
  service.item1 = new Object();
  service.item1.name = 'Tomatoes';
  service.item1.quantity = 10;
  service.item2 = new Object();
  service.item2.name = 'Running Shoes';
  service.item2.quantity = 1;
  service.item3 = new Object();
  service.item3.name = 'Water';
  service.item4 = new Object();
  service.item4.name = 'Oranges';
  service.item4.quantity = 5;
  service.item5 = new Object();
  service.item5.name = 'Book';
  service.item5.quantity = 1;

  // List of shopping items
  service.itemsToBuy = [ service.item1, service.item2  ];
  service.itemsBought = [];



  service.moveItem = function (itemIndex) {
    service.itemsBought.push( service.itemsToBuy[ itemIndex ] );
    service.itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return service.itemsToBuy;
  };
  
  service.getItemsBought = function () {
    return service.itemsBought;
  };
}

})();
