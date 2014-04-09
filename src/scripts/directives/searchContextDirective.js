'use strict';

angular.module('angularjsDE-module-seed')
  .directive('searchContext', function ($http) {
    return {
      controller: function () {
        var model = this.model = {version:0};
        this.performUpdate = function () {
          $http.get('src/data/data.json')
            .then(function (response) {
              model.data = response.data;
              console.log(model.version++);
            })
        };
        this.performUpdate();
      }
    };
  });