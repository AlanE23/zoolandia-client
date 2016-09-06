'use strict'

angular.module('Zoolandia', ['ngRoute'])
  .factory('RootFactory', ($http, $timeout) => {
    let apiRoot = null;
    return {
      getApiRoot: () => {
        if (apiRoot !== null) {
          return $timeout().then(() => apiRoot)
        } else { // eslint-disable-line no-else-return
          return $http.get("http://localhost:8000")
            .then((res) => {
              apiRoot = res.data;
              return apiRoot;
            }
          )
        }
      }
    }
  })
