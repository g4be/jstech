
import angular from 'angular';

export class personaView {
	
	constructor($, $element, $compile, $data) {
		
		$.persona = null;
		
		$.$on('showPersona', function(event, index) {
			$.persona = $data[index];
			hidePersona();
			$element.append($compile(`<div>${$.persona.html}</div>`)($));
		});
		
		function hidePersona() { $element.html(''); }
		$.$on('hidePersona', hidePersona);
		$.$on('editPersona', hidePersona);
		
	}
	
	static get name() { return 'personaView'; }
	
	
	static create() {
		return {
			controller: ['$scope', '$element', '$compile', '$data', personaView]
		};
	}
	
}

