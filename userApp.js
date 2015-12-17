var userApp = angular.module('UserApp',['CoreApp']);


userApp.controller('UserController', function($scope, DataService){

    $scope.version = DataService.getVersion();
})