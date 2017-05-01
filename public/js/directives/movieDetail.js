app.directive('movieDetail', ['movieDetailFactory', function(movieDetailFactory){
		
		return {
	        restrict: 'E',
	        templateUrl: 'views/movieDetail.html',
	        scope: {
	        	movieId: '@'
	        },
	        link: function(scope, element, attr){	
	        	
                  //scope.detail_btn_text = "Show Details";
				  scope.getMovieDetail = function(){
					 
					  $(".movie-detail").hide();
					 
					  if($("#"+scope.movieId+"_btn").attr("value") == "Show Details") {
						   movieDetailFactory.getMovieDetail(scope.movieId).then(
								function(response){
									scope.detail = response.data;
									$("#"+scope.movieId+"_section").show();
									$(".detail_button").attr("value", "Show Details");
									$("#"+scope.movieId+"_btn").attr("value", "Hide Details");
								 },
								 function(error){
									console.log("inside the Error....");
								 }
						  );
					  }else{
						  $("#"+scope.movieId+"_section").hide();
						  $("#"+scope.movieId+"_btn").attr("value", "Show Details");
					  }
				 };
	        	
	        }
	    };

}]);
