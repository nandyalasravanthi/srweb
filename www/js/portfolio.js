var skills = '<div class="col-sm-3"><img src="./img/%data%.png" alt="MySkills" class="img-responsive img-circle"></div>';
var skills_array = ['1','2','3','4','5','6','7','8','9'];
var skills_new = "";

for(var i=1;i<skills_array.length;i++){
  skills_new = skills.replace('%data%', skills_array[i]);
  $('.skills-section-images').append(skills_new);
}
var app = angular.module('applicationForm', []);
  app.controller('formctrl', ['$scope', function($scope){
	  $scope.bookClub = {
	    "background-color" : "lightgray",
		"font-size": "20px",
		"padding": "10px"
	 };
	 
	 $scope.onSubmit = function(){
	  $scope.msg = 'Hello '  +  $scope.user.username  +  '! you have successfully signed in.';
		angular.forEach($scope.registeredUsers, function(value, user) {
			if(value.uName == user.username && value.pswd == user.password) {
				$scope.msg = 'success';
			} else {
				$scope.msg = 'fail';
			}
		});
	 };
	 }]);
