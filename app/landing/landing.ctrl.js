'use strict'

angular.module("Zoolandia")
  .controller('LandingCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    function ($scope, $http, RootFactory) {
      $scope.title = "I'm the landing page"

      RootFactory.getApiRoot()
        .then(res => {
          $scope.apiRoot = res;
          return res;
        })

    }
  ]);
