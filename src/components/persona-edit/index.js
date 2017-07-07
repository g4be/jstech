
import angular from 'angular';

export class personaEdit {
	
	constructor($scope, personaService) {
		this.$scope = $scope;
		this.personaService = personaService;
		
		this.$scope.persona = null;
	}
	
	$onInit() {
		let $ = this;
		$.$scope.$on('editPersona', function(event, index) {
			$.$scope.persona = $.personaService.get(index);
		});
		$.$scope.$on('showPersona', function() {
			$.$scope.persona = null;
		});
	}
	
	show() {
		return this.$scope.persona !== null;
	}
	done() {
		this.$scope.persona = null;
	}
	
	
	static get name() { return 'personaEdit'; }
	
	
	static create() {
		return {
			controller: ['$scope', 'personaService', personaEdit],
			template: require('./template.html')
		};
	}
	
}

