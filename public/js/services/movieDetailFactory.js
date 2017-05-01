app.factory('movieDetailFactory', ['$http', function($http){
		      var movieDetail = {};
			  movieDetail.getMovies = function(movieTitle, page){
					 var url = 'http://www.omdbapi.com/?s='+ movieTitle+'&page='+page;
                     return $http.get(url);
			   };
			  movieDetail.getMovieDetail = function(movieId){
					 var url = 'http://www.omdbapi.com/?i='+ movieId + '&plot=full';
                     return $http.get(url);
			   }; 
			   
		      return movieDetail;
		}]);