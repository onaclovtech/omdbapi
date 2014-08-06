/*
   omdbapi.js v0.0.1
   omdbapi angular service
   Written by Tyson Bailey
*/
  angular.module('video', []).factory('$video', ['$http',
      function($http) {
          return {
              search: function(api_key, query, page_limit) {
                  var method = 'JSONP';
                  var url = "http://www.omdbapi.com/?t=";
                  return $http({
                      method: method,
                      url: url + 
                          query +
                           '&callback=JSON_CALLBACK'
                  });
              }
          };
      }
  ]);
