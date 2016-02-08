// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'starter.shopscontroller',
  'starter.productscontroller',
  'starter.services'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider, $httpProvider)
{
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Request-Width"];
    $httpProvider.defaults.headers.post["Content-type"] = "application/x-www-form-urlencoded; charset=UTF-8";

    $stateProvider
      .state("shops", {
          url: "/",
          templateUrl: "templates/shops/index.html",
          controller: "shopsCtrl",
          cache: false
      })
      .state("addShops", {
          url: "/shops/add",
          templateUrl: "templates/shops/add.html",
          controller: "shopsCtrl"
      })
      .state("shop-detail", {
          url: "/shops/:id",
          templateUrl: "templates/shops/detail.html",
          controller: "shopsCtrl",
          cache: false
      })
      .state("addProducts", {
          url: "/product/add",
          templateUrl: "templates/products/add.html",
          controller: "productsCtrl"
      })
      .state("product-detail", {
          url: "/product/:id",
          templateUrl: "templates/products/detail.html",
          controller: "productsCtrl",
          cache: false
      })


      $urlRouterProvider.otherwise("/");
})
.constant('baseUrl', 'http://localhost:8080/ShopJava/api/')