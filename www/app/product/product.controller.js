(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['ProductService', '$rootScope'];
    function ProductController(ProductService, $rootScope) {
        var vm = this;

        vm.product = null;
        vm.allProducts = [];
        vm.status;
        
        initController();

        function initController() {            
            loadAllProducts();
        }

        
        function loadAllProducts() {
            ProductService.GetAll()
                .then(function (products) {
                    vm.allProducts = products.data;
                    vm.status = products.status;
                    console.log(products);
                });
        }

    }

})();