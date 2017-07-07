
import angular from 'angular';

export class personaView {
	
	constructor($scope, $element, $compile, personaService) {
		this.$scope = $scope;
		this.$element = $element;
		this.$compile = $compile;
		this.personaService = personaService;
		
		this.$scope.persona = null;
	}
	
	$onInit() {
		let $ = this;
		$.$scope.$on('showPersona', function(event, index) {
			$.$scope.persona = $.personaService.get(index);
			hidePersona();
			$.$element.append($.$compile(`<div>${$.$scope.persona.html}</div>`)($.$scope));
		});

		$.$scope.$on('hidePersona', hidePersona);
		$.$scope.$on('editPersona', hidePersona);
		
		function hidePersona() { $.$element.html(''); }
	}
	
	
	static get name() { return 'personaView'; }
	
	
	static create() {
		return {
			controller: ['$scope', '$element', '$compile', 'personaService', personaView]
		};
	}
	
}

