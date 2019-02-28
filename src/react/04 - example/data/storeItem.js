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
	children: types.optional(types.array(childItem), []),
})

export {
	childItem,
	dataItem,
}
