var app = angular.module('imdbMoviesApp',[]);
					 app.controller('movieDetailsController', ['$scope', '$window', 'movieDetailFactory', 
					                                           function($scope, $window, movieDetailFactory)
					                                          {
					 
					 $scope.movieTitle = "";
					 $scope.resultCount = 0;
					 $scope.showTotal = false;
					 var page = 1;
				
					 $window.onscroll = function(ev) {
						if ( $scope.reports 
								  && ($scope.resultCount > $scope.reports.length) 
								     && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
							
							$("#spinner").show();
							page += 1;	
							movieDetailFactory.getMovies($scope.movieTitle, page).then(
								  function(response){
									$("#spinner").hide();
									$scope.reports = $scope.reports.concat(response.data.Search);
								 },
								 function(error){
									console.log("inside the Error....");
								 }
							);
						}
					};
					
					$scope.getMovies = function(){
						 movieDetailFactory.getMovies($scope.movieTitle, page).then(
							  function(response){
								
								$scope.reports = response.data.Search;
								if($scope.reports){
									$scope.resultCount = parseInt(response.data.totalResults);									
								}else{
									$scope.resultCount = 0;
								}
								
								$scope.showTotal = true;
							 },
							 function(error){
								console.log("Error while fetching Movie List...");
							 }
					      );
					 };
					 
					 $scope.backToTop = function(){
						 $(window).scrollTop(0);
					 };
	 }]);