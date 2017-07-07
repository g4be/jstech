
import angular from 'angular';

export class personaList {
	
	constructor($scope, personaService, $rootScope) {
		this.$scope = $scope;
		this.personaService = personaService;
		this.$rootScope = $rootScope;
		
		this.$scope.records = this.personaService.getList();
	}
	
	$onInit() {}
	
	view(index) {
		this.$rootScope.$broadcast('showPersona', index);
	}
	new() {
		this.edit(null, this.personaService.add());
	}
	edit($event, index) {
		if ($event) $event.stopImmediatePropagation();
		this.$rootScope.$broadcast('editPersona', index);
	}
	
	
	static get name() { return 'personaList'; }
	
	
	static create() {
		return {
			controller: ['$scope', 'personaService', '$rootScope', personaList],
			template: require('./template.html')
		};
	}
	
}

