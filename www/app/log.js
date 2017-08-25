angular
.module('app')
.controller('LogController', ['$scope', '$log', function($scope, $log) {  
  $scope.log = function(message) {
    $log.warning(message);
  }
}]);