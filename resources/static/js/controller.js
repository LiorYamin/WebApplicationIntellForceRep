app.controller('usersController', function($scope) {
    $scope.headingTitle = "User List";
});

app.controller('rolesController', function($scope) {
    $scope.headingTitle = "Roles List";
});

app.controller('registerController', function($scope, regService) {
    $scope.headingTitle = "Register Form:";
    $scope.registerUser = function(){
    	var data = {
    			'id': $scope.id,
    			'firstName': $scope.firstName,
    			'lastName': $scope.lastName,
    			'email': $scope.email,
    			'phone': $scope.phone
    	}
    	regService.register(data);
    } 
});

app.controller('surveyController', function($scope, $location, surveyService, ngDialog) {
    
    var init = function(response){
    	surveyService.init().then(successResponse, errorResponse);
    	$scope.questionNumber = 0;
    }
    
    var successResponse = function(response){
    	$scope.questions = response.data;
    	$scope.numberOfQuestions = $scope.questions.length;
    	$scope.next();
    }
    
    var errorResponse = function(response){
    	alert("Something Went Wrong");
    }
    
    var initCheckBoxes = function(subjects){
    	angular.forEach(subjects, function(subscription, index) {
    		subscription.checked = false;
          });
    }
    
    $scope.next = function(response){
    	if ($scope.questionNumber == $scope.numberOfQuestions){
    		ngDialog.open({
    			template: '<h1 style="text-align: center;">Thank You For Taking The Survey</h1>',
    			plain: true,
    			className: 'ngdialog-theme-default',
    			closeByDocument: true,
    			showClose: false
    			});
    		$location.path("/");
    		
    	}else{
    		$scope.questionNumber = $scope.questionNumber + 1;
    		$scope.currentQuestion = $scope.questions[$scope.questionNumber - 1];
    		initCheckBoxes($scope.checkboxes);
    	}
    }
    
    $scope.updateSelection = function(position, entities) {
        angular.forEach($scope.checkboxes, function(subscription, index) {
          if (position != index) 
            subscription.checked = false;
        });
      }
    
    $scope.checkboxes = [{
        name: 'one',
      }, {
        name: 'three',
      }, {
        name: 'two',
      }, {
        name: 'four',
      }
    ]
    
    init();
});