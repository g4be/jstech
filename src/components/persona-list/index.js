
import angular from 'angular';

export class personaList {
	
	constructor($, $data, $rootScope) {
		
		$.records = $data;
		
		$.view = function(index) {
			$rootScope.$broadcast('showPersona', index);
		};
		$.edit = function($event, index) {
			if ($event) $event.stopImmediatePropagation();
			$rootScope.$broadcast('editPersona', index);
		};
		$.new = function() {
			$data.push({
				first_name: '',
				last_name: '',
				email: '',
				gender: 'other',
				html: ''
			});
			$.edit(null, $data.length-1);
		};
		
	}
	
	static get name() { return 'personaList'; }
	
	
	static create() {
		return {
			controller: ['$scope', '$data', '$rootScope', personaList],
			template: require('./template.html')
		};
	}
	
}

