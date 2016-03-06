// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

myApp.controller('index', function($scope, $http){
  $scope.dados= ['Pronto Atendimento Centro', 'Centro de Saúde Jardim Aurélia', 'Centro de Saúde Jardim Aeroporto', 'Pronto Atendimento Vila Padre Anchieta'];
  /**
  <!-- $http.get("http://187.110.34.152:4000/api/v1/health_cares/history").then(function(response){
          var myData = JSON.parse(response.data);
          //  console.log(response.data);
           console.log(myData);
         }, function(erro) {
           console.log(erro);
         }); -->
         */ 
});
