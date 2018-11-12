var App = angular.module('App', []);

App.controller('contoladorDatos', function($scope, $http) {
  $http.get('datos.json')
       .then(function(res){
          $scope.equipo = res.data;                
        });
});