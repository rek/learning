
const category = [{
	id: 'robot',
	name: 'Robots',
	type: 'category',
}, {
	id: 'planet',
	name: 'Planets',
	type: 'category',
}]

const planet = [{
	id: '1',
	name: 'Mercury',
	type: 'planet',
	children: [],
}, {
	id: '2',
	name: 'Venus',
	type: 'planet',
	children: [],
}, {
	id: '3',
	name: 'Earth',
	type: 'planet',
	children: [{
		id: 'p-3-1',
		name: 'Luna',
	}],
}, {
	id: '4',
	name: 'Mars',
	type: 'planet',
	children: [{
		id: 'p-4-1',
		name: 'deimos',
	}, {
		id: 'p-4-2',
		name: 'phobos',
	}],
}, {
	id: '5',
	name: 'Jupiter',
	type: 'planet',
	children: [{
		id: 'p-5-1',
		name: 'Ganymede',
	}, {
		id: 'p-5-2',
		name: 'Calisto',
	}, {
		id: 'p-5-3',
		name: 'Io',
	}, {
		id: 'p-5-4',
		name: 'Europa',
	}],
}, {
	id: '6',
	name: 'Saturn',
	type: 'planet',
	children: [{
		id: 'p-6-1',
		name: 'Titian',
	}, {
		id: 'p-6-2',
		name: 'Rhea',
	}]
}]

const robot = [{
	id: 'r-1',
	name: 'Scythe',
	type: 'robot',
	children: [{
		id: 'c-1-1',
		name: 'Obuqtron',
	}],
}, {
	id: 'r-2',
	name: 'Not robots',
	type: 'robot',
	children: [{
		id: 'c-2-1',
		name: 'James',
	}, {
		id: 'c-2-2',
		name: 'Jimmy',
	}, {
		id: 'c-2-3',
		name: 'Bill',
	}],
}, {
	id: 'r-3',
	name: 'Cylinder',
	type: 'robot',
	children: [{
		id: 'c-3-1',
		name: 'Tinker',
	}, {
		id: 'c-3-1',
		name: 'Tachikomas',
	}, {
		id: 'c-3-1',
		name: 'Awesom-O',
	}],
}]

export {
	category,
	planet,
	robot,
}
