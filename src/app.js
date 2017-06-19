import angular from 'angular';

import { personaList } from './components/persona-list';
import { personaEdit } from './components/persona-edit';
import { personaView } from './components/persona-view';


const persona = angular.module('persona', []);

persona.factory('$data', function() {
	let arr = [{
		first_name: 'Gabor',
		last_name: 'Kruppai',
		email: 'persona@personamail.com',
		gender: 'male',
		html: '<b>Email: </b><span>{{ persona.email }}</span>'
	}, {
		first_name: 'Jakab',
		last_name: 'Kovács',
		email: 'user@domain.tld',
		gender: 'male',
		html: '<b>Name: </b><span>{{ persona.first_name }} {{ persona.last_name }}</span>'
	}, {
		first_name: 'Eszter',
		last_name: 'Teszter',
		email: 'tester@domain.tld',
		gender: 'female',
		html: '<b>Email: </b><span>{{ persona.email }}</span>'
	}];
	return arr;
});


persona.component(personaList.name, personaList.create());
persona.component(personaEdit.name, personaEdit.create());
persona.component(personaView.name, personaView.create());

