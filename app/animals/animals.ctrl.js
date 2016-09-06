'use strict'

angular.module("Zoolandia")
  .controller('AnimalsCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
      $scope.title = "I'm the animals page"
      $scope.apiRoot = null

      $http.get("http://localhost:8000")
        .then((res) => {
          $scope.apiRoot = res.data;
          $http.get(`${$scope.apiRoot.animals}`)
            .then(res => {
              $scope.animals = res.data
            })
        })

    }
  ]);
