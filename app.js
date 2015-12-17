var coreApp = angular.module('CoreApp',['ngResource']);

//coreApp.config(['$resourceProvider', function($resourceProvider) {
//    // Don't strip trailing slashes from calculated URLs
//    $resourceProvider.defaults.stripTrailingSlashes = false;
//}]);

//coreApp.config(function ($compileProvider) {
//    $compileProvider.debugInfoEnabled(false);
//});

coreApp.controller('MainController', function($scope, DataService, UserService, $sce){
    this.controllerName = 'MainController';
    $scope.appVersion = 1.5;
    $scope.name = 'SysAdmin';
    $scope.currentUserId = 0;

    $scope.css = '<style> content{ width: 100%;}</style>';

    console.log(DataService.name);

    $scope.getData = function(){
        DataService.getLusa()
    }

    $scope.showUsers =function(){
        $scope.users = UserService.query();

    }

    $scope.getResult = function(){
        return 10;
    }

    $scope.showUser = function(){
        var q =  UserService.get({user : $scope.currentUserId}).$promise
        .then(
            function(data){
                $scope.currentUser = data;
            },
            function(err){
                $scope.message = err.status;
            }
        )
    }

    $scope.restApiProvider = function(){


    }

    $scope.sendHello = function(){
        $scope.$broadcast('HelloEvent', {name: $scope.name });
    }

})

coreApp.controller('UserController', function($scope){
    $scope.userVersion = '2.0';
    $scope.controllerName = 'UserController';
    $scope.name = 'Ivan 3';
    $scope.$on('HelloEvent', function(event, data){
        console.log(data);
    })
})


coreApp.directive('userInfo', function(){
    return{
        templateUrl: 'templates/userInfo.html',
        replace: false,
        transclude:true,
        scope: {
            name: "=myName"
        },
        link: function (scope, element, attributes) {
            var x = scope.name;
        }
    }
})