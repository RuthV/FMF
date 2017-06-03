angular.module("myapp", [])

.controller("FisrstController",function($scope,$http){
	$scope.posts = [];
	$http.get("http://services.groupkt.com/country/get/all")
	     .success(function(data){
	     	console.log(data.RestResponse.result);

	     	$scope.posts = data.RestResponse.result;

	     })
	     .error(function(err){

	     });


	  $http({
	    method: 'GET', 
	    url: 'equipo.json'
	  }).success(function(data, status, headers, config) {
	      $scope.datos=data;
	  }).error(function(data, status, headers, config) {
	  });
});
