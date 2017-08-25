(function () {
    'use strict';

    angular
        .module('app')
        .factory('ProductService', ProductService);

    ProductService.$inject = ['$http'];
    function ProductService($http) {
        var service = {};

        service.GetAll = GetAll;
        // service.GetById = GetById;
        // // service.GetByUsername = GetByUsername;
        // service.Create = Create;
        // service.Update = Update;
        // service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('http://discal.host22.com/api/discal/producto').then(handleSuccess, handleError('Error getting all products'));
        }

        // function GetById(id) {
        //     return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        // }

        // // function GetByUsername(username) {
        // //     return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        // // }

        // function Create(user) {
        //     return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        // }

        // function Update(user) {
        //     return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        // }

        // function Delete(id) {
        //     return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        // }

        // // private functions

        function handleSuccess(res) {
            return res;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
