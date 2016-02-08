angular.module('starter.productscontroller', [])

.controller("productsCtrl", function($scope, Products, $state, $stateParams, $ionicPopup, $http, baseUrl)
{

    $scope.initProductDetail = function(){

        Products.get({id: $stateParams.id}).$promise.then(
          function(res){
              $scope.product = res;
          },
          function(error){
              console.log(error);
          }
        )

    }


    $scope.initAddProducts = function(){

        $scope.product = {};

        $http.get(baseUrl +'shops')
                .success(function (data) {
                    $scope.shops = data;
                })
                .error(function (err, status) {
                    $scope.shops = [];
                });

        $scope.save = function(product){
            // Products.save().$promise.then(
            //   function(res){
            //     $scope.showAlert("Información","Creación exitosa");
            //     $scope.product = {};
            //     //$state.go("shops");
            //   },
            //   function(error){
            //       console.log(error);
            //   }
            // )
            $http.get(baseUrl +'products/add/'+product.name+'/'+product.description+'/'+product.price+'/'+product.shop)
                .success(function (data) {
                    $scope.showAlert("Información","Creación exitosa");
                    $scope.product = {};
                })
                .error(function (err, status) {
                    console.log(error);
                });
        }


        $scope.showAlert = function(title, template){
            var alertPopup = $ionicPopup.alert({
              title: title,
              template: template,
              scope: $scope,
              buttons: [
                {
                  text: "Aceptar",
                  type: "button-positive",
                  onTap: function(e)
                  {
                      ///
                  }
                }
              ]
            })

            alertPopup.then(function(res)
            {
                console.log("Alert cerrado");
            });
        }

    }

})