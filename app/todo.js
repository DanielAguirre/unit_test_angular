(function() {
	angular.module('todo',[])
		.controller('TodoController',function($scope){
			$scope.list = ["New York"];

			$scope.addItem = function(item){
				$scope.list.push(item);
			}
		})
}());
