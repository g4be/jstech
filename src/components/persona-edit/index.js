
import angular from 'angular';

export class personaEdit {
	
	constructor($, $data) {
		
		$.persona = null;
		
		$.$on('editPersona', function(event, index) {
			$.persona = $data[index];
		});
		$.$on('showPersona', function() {
			$.persona = null;
		});
		
		$.show = function() { return $.persona !== null; }
		$.done = function() { $.persona = null; }
		
	}
	
	static get name() { return 'personaEdit'; }
	
	
	static create() {
		return {
			controller: ['$scope', '$data', personaEdit],
			template: require('./template.html')
		};
	}
	
}

