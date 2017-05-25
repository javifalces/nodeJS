angular.module('warrantService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Warrants', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/warrants');
			},
			create : function(warrantData) {
				return $http.post('/api/warrants', warrantData);
			},
			put : function(id) {
				return $http.put('/api/warrants/' + id);
			},
            delete : function(id) {
                return $http.delete('/api/warrants/' + id);
            }
		}
	}]);