
const data1 = {
	id: 'robots',
	name: 'Robots'
}

const data2 = {
	id: 'planets',
	name: 'Planets',
}

const planets = [{
	id: '1',
	name: 'Mercury',
	children: [],
}, {
	id: '2',
	name: 'Venus',
	children: [],
}, {
	id: '3',
	name: 'Earth',
	children: [{
		id: 'p-3-1',
		name: 'Luna',
	}],
}, {
	id: '4',
	name: 'Mars',
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
	children: [{
		id: 'p-6-1',
		name: 'Titian',
	}, {
		id: 'p-6-2',
		name: 'Rhea',
	}]
}]

const robots = [{
	id: '1',
	name: 'Scythe',
	children: [{
		id: 'c-1-1',
		name: 'Obuqtron',
	}],
}, {
	id: '2',
	name: 'Cylinder',
	children: [{
		id: 'c-2-1',
		name: 'James',
	}, {
		id: 'c-2-2',
		name: 'Jimmy',
	}, {
		id: 'c-2-3',
		name: 'Bill',
	}, {
		id: 'c-2-4',
		name: 'Tinker',
	}, {
		id: 'c-2-5',
		name: 'Tachikomas',
	}, {
		id: 'c-2-6',
		name: 'Awesom-O',
	}],
}]

export {
	data1,
	data2,

	planets,
	robots,
}
