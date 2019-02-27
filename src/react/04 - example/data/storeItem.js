import {
	types,
} from 'mobx-state-tree'

const childItem = types.model({
	id: types.identifier,
	name: '',
})

const dataItem = types.model({
	id: types.identifier,
	name: '',
	type: '',
	// children: types.array(childItem),
})

export {
	childItem,
	dataItem,
}
