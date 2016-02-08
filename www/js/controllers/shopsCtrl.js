angular.module('starter.shopscontroller', [])

.controller("shopsCtrl", function($scope, Shops, $state, $stateParams, $http, $window, baseUrl)
{
    $scope.initShops = function(){

        Shops.query().$promise.then(
          function(res){
              $scope.shops = res;
          },
          function(error){
              console.log(error);
          }
        )

        $scope.remove = function(shopId){

          $http.get(baseUrl +'shops/'+shopId+'/delete')
              .success(function (data) {
                  $window.location.reload();
              })
              .error(function (err, status) {
                  console.log("error");
              });

        }

    }

    $scope.initAddShops = function(){
        $scope.save = function(shop){
            // Shops.save().$promise.then(
            //   function(res){
            //       $state.go("shops");
            //   },
            //   function(error){
            //       console.log(error);
            //   }
            // )
            $http.get(baseUrl +'shops/add/'+shop.name+'/'+shop.location)
                .success(function (data) {
                    $state.go("shops");
                })
                .error(function (err, status) {
                    console.log(error);
                });
        }
    }

    $scope.initShopDetail = function(){
        Shops.get({id: $stateParams.id}).$promise.then(
          function(res){
              $scope.shop = res;
          },
          function(error){
              console.log(error);
          }
        )

        $scope.remove = function(productId){


          $http.get(baseUrl +'products/'+productId+'/delete')
              .success(function (data) {
                  $state.go("shops");
              })
              .error(function (err, status) {
                  console.log("error");
              });

        }

    }

})