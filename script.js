console.log('Array.prototype.*');

function creation() {
	let arrayWithInitSize = new Array(4); //create an array for 4 elements (reserve memory for 4 elements)
	let arrayWithOneValue = new Array('5'); //create array for 1 element (element - 5)
	let arrayWithPreset = new Array(5, 6); //create an array for 2 elements (5, 6)
	let arrayWithInitValue = Array.of(4); // array of only 4
	let simpleWayArray = ['a', 'b', 'c']; // clasical method of creating an array

	console.log('\nCreation:');
	console.log('arrayWithInitSize:', arrayWithInitSize); //4empty items
	console.log('arrayWithOneValue:', arrayWithOneValue); //['5']
	console.log('arrayWithPreset:', arrayWithPreset); //[5, 6]
	console.log('arrayWithInitValue', arrayWithInitValue); //[4]
	console.log('simpleWayArray:', simpleWayArray); //['a', 'b', 'c'] 
}

creation();

function howToAddRemove() {
	console.log('\nHow to Add & Remove:');

	let array = [];
	console.log('[Init]:', array);

	array.push(1); // adds elements to the end of array
	array.push(4, 5, 6, 7);
	console.log('[After push]:', array);

	array.unshift(1, 2); // adds elements to the start of array
	array.unshift(3);
	console.log('[After unshift]:', array);

	elem = array.pop(); // deletes elements from the end of array
	console.log('[After pop]:', array);

	array.shift(); // removes elements from the start of array
	console.log('[After shift]:', array);
}

howToAddRemove();

function modifyArray() {
	console.log('\nModify Array:');

	let array = [1, 2, 3, 4, 5];
	console.log('[Init]:', array);

	array.fill('a'); // fills entire array with 'a'
	console.log('\n[After fill(a)]:', array);

	array.fill('b', 2); // fills entire array with 'b' starting from second element
	console.log('[After fill(b, 2)]:', array);

	array.fill('c', 2, 4); // fills array with 'c' from second to 4th elements
	console.log('[After fill(c, 2, 4)]:', array);

	let reversed = array.reverse();
	console.log('\n[After reverse, reversed]:', reversed);
	console.log('[After reverse, original array]:', array);

	array = [4, 2, 1, 3];
	console.log('\n[Init before sort]:', array);
	let sorted = array.sort();
	console.log('[After sort, sorted]:', sorted);
	console.log('[After sort, original array]:', array);

	console.log('\nOK, but...');

	array = [40, 231, 1000, 3];
	console.log('\n[Init before sort]:', array);
	console.log('WTF?', array.sort());

	console.log('Set comparator', array.sort((a, b) => a - b));
}

modifyArray();

function workWithSplice() {
	console.log('\nWork with Splice:');
	
	let array = [2, 3, 4, 5, 6];
	console.log('\n[Init]:', array);

	console.log('[splice(2)]:', array.splice(2));
	console.log('[After splice(2)]:', array);

	array = [2, 3, 4, 5, 6];
	console.log('\n[Init]:', array);
	console.log('[splice(2, 2)]:', array.splice(2, 2));
	console.log('[After splice(2, 2)]:', array);

	array = [2, 3, 4, 5, 6];
	console.log('\n[Init]:', array);
	console.log('[splice(2, 0, `new`, `item`)]:', array.splice(2, 0, 'new', 'item'));
	console.log('[After splice(2, 0, "new", "item")]:', array);
}

workWithSplice();

function search() {
	console.log('\nSearch');

	let array = [2, 8, 3, NaN, 4];
	console.log('[Init]:', array);

	console.log('\n[.indexof(2)]', array.indexOf(2)); //returns the position of element (if not found returns -1)
	console.log('[.indexof(NaN)]', array.indexOf(NaN));

	console.log('\n[.includes(2)]', array.includes(2));
	console.log('[.includes(NaN)]', array.includes(NaN));

	console.log('\n[.find( четный )]',
	array.find( item => !(item & 1) )
	);

	console.log('[.find( ? )]', array.find( item => false ));

	console.log('\n[.findIndex( четный )]',
	array.findIndex( item => !(item & 1))
	);
	console.log('[.findIndex( ? )]',
	array.findIndex( item => false)
	);
}

search();