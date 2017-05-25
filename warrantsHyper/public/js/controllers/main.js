angular.module('warrantController', [])
// md5 = require('js-md5')

	// inject the Warrant service factory into our controller
	.controller('mainController', ['$scope','$http','Warrants', function($scope, $http, Warrants) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
        Warrants.get()
			.success(function(data) {
				$scope.warrants = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createWarrant = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.fileHASH != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
                Warrants.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.warrants = data; // assign our new list of todos
					});
			}
		};

        $scope.createWarrantFile = function(binaryFile) {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if (binaryFile != undefined) {
                $scope.loading = true;

                // var hash = md5(binaryFile);

                $scope.formData.file=binaryFile
                // $scope.formData.fileHASH=hash


                // call the create function from our service (returns a promise object)
                Warrants.create($scope.formData)

                // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.warrants = data; // assign our new list of todos
                    });
            }
        };


		// Update ==================================================================
		// update a warrant after checking it
		$scope.validateWarrant = function(id) {
			$scope.loading = true;

			Warrants.put(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.warrants = data; // assign our new list of todos
				});
		};

        $scope.removeWarrant = function(id) {
            $scope.loading = true;

            Warrants.delete(id)
            // if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.loading = false;
                    $scope.warrants = data; // assign our new list of todos
                });
        };
	}]);