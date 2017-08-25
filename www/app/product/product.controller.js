(function () {
    'use strict';
        
    angular
        .module('app')
        .directive('selectWatcher', function ($timeout) {
            return {
                link: function (scope, element, attr) {
                    var last = attr.last;
                    if (last === "true") {
                        $timeout(function () {
                            //$(element).parent().selectpicker('val', 'any');
                            $('#productos').selectpicker('val', 'any');
                            //$(element).parent().selectpicker('refresh');
                            $('#productos').selectpicker('refresh');
                        });
                    }
                }
            };
        })
        .controller('ProductController', ProductController);
        

    ProductController.$inject = ['ProductService', '$rootScope','$log'];
    function ProductController(ProductService, $rootScope,$log) {
        var vm = this;

        vm.product = null;
        vm.allProducts = [];
        vm.status;
        
        initController();
        //loadDropdown();

        function initController() {            
          //  loadAllProducts();                                                
        }

        
        function loadAllProducts() {
            ProductService.GetAll()
                .then(function (products) {
                    vm.allProducts = products.data;
                    vm.status = products.status;
                    console.log(products);
                    console.log(products.status);
                    $log.log(vm.status);                     
                });
        }
        function loadDropdown(){
            $log.warn('in loadDropdown..........');
            $rootScope.subappID = 9;
            console.log($rootScope.subappID);
            $rootScope.subapplicationList = [{
                "ID":9,
                "DESCRIPCION": "a"
              },
              {
                "ID": 1,
                "DESCRIPCION": "b"
              },
              {
                "ID": 2,
                "DESCRIPCION": "c"
              },
              {
                "ID": 3,
                "DESCRIPCION": "d"
              },
              {
                "ID": 4,
                "DESCRIPCION": "e"
              },
              {
                "ID": 5,
                "DESCRIPCION": "f"
              },
              {
                "ID": 6,
                "DESCRIPCION": "g"
              },
              {
                "ID": 7,
                "DESCRIPCION": "h"
              },
              {
                "ID": 8,
                "DESCRIPCION": "i"
              }];
        }
        $rootScope.environment = '';
        $rootScope.environments = [{
            id: 1,
            tytul: '2232323'
          }, {
            id: 2,
            tytul: 'dfsdfdsfsdfdsfds'
          }, {
            id: 3,
            tytul: 'dgl jreklj erkjer r'
          }, {
            id: 4,
            tytul: 'dk,f sdkf jsdkj sdf kjs d'
          }];

    }
    
    require : {
        container: 'LogController' //Require a wizard component's controller which exist in its parent hierarchy.
     }

})();