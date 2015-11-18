 var controllers= angular.module('dabbble.controllers', []);

 controllers.controller('AppCtrl', function($scope){


$scope.name="Module";


$scope.updateOnClick=function(){ $scope.name="vivek";}


})



controllers.controller('APICtrl',function($scope,$http){

$scope.list;
$http.jsonp('http://jsonplaceholder.typicode.com/posts/1?callback=JSON_CALLBACK').then(function(data){

$scope.list=data.data;
	console.log(data);
})})




 /*function AppCtrl($scope) {
        $scope.name="vivek";
       
        $scope.updateName=function(){

$scope.name="Button from function";


        }
    }*/