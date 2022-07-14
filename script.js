'use strict';

let select = document.getElementById('select');
let fields = document.getElementById('fields');
let buttonFields = document.getElementById('buttonFields');
let getSum = document.getElementById('getSum');
let getMult = document.getElementById('getMult');
let result = document.getElementById('result');

getSum.addEventListener('click', function() {

	result.innerHTML = 'Here is your result: ';
	let elems = fields.querySelectorAll('input');
	let res = 0;
	for (let elem of elems) {
		res += Number(elem.value);
	}
	if (select.value == 'rectangle') {
		result.innerHTML = 'Here is your result: ' + res * 2;
	} else if (select.value == 'round') {
		result.innerHTML = 'Here is your result: ' + 2 * 3.14 * res;
	} else if (select.value == 'triangle') {
		result.innerHTML = 'Here is your result: ' + res;
	}

})

getMult.addEventListener('click', function() {

	let elems = fields.querySelectorAll('input');
	let res = 1;
	if (select.value == 'rectangle') {
		for (let elem of elems) {
		res *= Number(elem.value);
		} 
	} else if (select.value == 'round') {
		res = 3.14 * Number(elems[0].value)**2;
	}
	
	result.innerHTML = 'Here is your result: ' + res;

})


select.addEventListener('change', function() {

	addFields(select.value, fields);
	if (select.value == 'triangle') {
		getSum.value = 'Get perimeter';
		getMult.classList.add('hidden');
	} else if (select.value == 'round') {
		getMult.classList.remove('hidden');
		getSum.value = 'Circumference';
	} else if (select.value == 'rectangle') {
		getMult.classList.remove('hidden');
		getSum.value = 'Get perimeter';
	}

})


function addFields(type, parent) {

	parent.innerHTML = '';
	if (type == 'rectangle') {
		for (let i = 0; i < 2; i++) {
			let field = document.createElement('input');
			field.value = 0;
			parent.appendChild(field);
		}
	} else if (type == 'round') {
		let field = document.createElement('input');
		field.value = 0;
		parent.appendChild(field);
	} else if (type == 'triangle') {
		for (let i = 0; i < 3; i++) {
			let field = document.createElement('input');
			field.value = 0;
			parent.appendChild(field);
		}
	}

};
