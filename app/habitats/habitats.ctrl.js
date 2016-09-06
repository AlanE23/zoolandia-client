'use strict'

angular.module("Zoolandia")
  .controller('HabitatsCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
      $scope.title = "I'm the habitats page"
      $scope.apiRoot = null

      $http.get("http://localhost:8000")
        .then((res) => {
          $scope.apiRoot = res.data;
          $http.get(`${$scope.apiRoot.habitats}`)
            .then(res => {
              $scope.habitats = res.data
            })
        })

    }
  ]);
