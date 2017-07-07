
import angular from 'angular';

export class personaService {
	
	constructor($data) {
		this.data = $data;
	}
	
	static get name() { return 'personaService'; }
	
	get(id) {
		return this.data[id];
	}
	getList() {
		return this.data;
	}
	add() {
		return this.data.push({
			first_name: '',
			last_name: '',
			email: '',
			gender: 'other',
			html: ''
		}) - 1;
	}
	
	
	
	static create() {
		return ['$data', personaService];
	}
	
}

