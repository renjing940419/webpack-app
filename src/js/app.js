// console.log(require('./people.js'));
const people = require('./people.js');
let $ = require('jquery');
// require('../css/style.css');

$.each(people,function(key, value) {
	$('body').append('<h1>' + people[key].name + '</h1>');
});
