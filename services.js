var coreApp = angular.module('CoreApp');


coreApp.service('DataService', function ($http) {
    this.name = 'DataService';
    return{
        getLusa: function () {
            $http.get('http://lusarealty.com/404.php')
                .then(
                    function (response) {
                        console.log(response);
                    },
                    function(err){
                        console.log('err:' + err)
                    }
                )
        },
        getVersion: function(){return '1'; }

    }

})

coreApp.factory('UserService', function($resource){
    this.name = 'RestService';
    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});

})

coreApp.factory('UserService', function($resource){
    this.name = 'RestService';
    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});

})