//Client Side script for Rigley's Test Subject-facing view
//Writen in Angular JS by Mike Meaney in San Diego, CA USA (2015)

var rigView = angular.module('rigView', ['ui.bootstrap']); // Yee App of cause and purpose
//var server = "http://localhost:3000"
var server = "http://rigley-meaneymiked.rhcloud.com/"
rigView.controller('intakeController', function($scope, $http){
	//The object for storing the PID info
	$scope.PID = {
		text: null
	}

	//Array of all Rig objects
	$scope.Rigs = [];
	//Populate the Rigs array
	 function updateRigs(){
		$http.get(server+'/status').
			success(function(response){
				$scope.Rigs = response;
				console.log($scope.Rigs);
		});
	}
	updateRigs();

	//Save the rig selected
	$scope.selectedRig = {ID : ''};

	//The Rig Status
	$scope.rigStatus = "";
	setInterval(function(){
				$http.get(server+'/status').
					success(function(response){
						//$scope.rigStatus = response;
						angular.forEach(response, function(value, key){
							//console.log(key);
							console.log(value.ID);
							console.log(value.State);
							$scope.rigStatus = value.State;
						})

					})
	}, 1000);

	//Function for submiting the PID to the server which creates the TestData Object on the
	//Server
	$scope.submit = function(){
		console.log($scope.PID.text);
		console.log($scope.selectedRig.ID);

		//Insert function to data route to create new Test Data object on server
		$http.get(server+'/RigView/?PID='+$scope.PID.text+"&rig="+
			$scope.selectedRig.ID).
			success(function(data,status,headers,config){
				//Don't know how to..
			
			}).error(function(data,status,headers,config){
				//..use this bit.
			});
			
			//Clear the Text Field
			$scope.PID.text = '';	


	}
	
});

