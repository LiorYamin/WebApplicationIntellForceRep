app.service('regService', function($location, $http){
	this.register = function(data){
    	return $http.post("/lioryamin/register", data).then(successResponse, errorResponse);
    }
	    
    var successResponse = function(response){
    	$location.path("/survey");
    }
    
    var errorResponse = function(response){
    	alert("Something Went Wrong");
    }
});

app.service('surveyService', function($http, $location){
	this.init = function(){
		return $http.get("/lioryamin/survey");
	}
});