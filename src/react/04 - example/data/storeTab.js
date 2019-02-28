import {
	types,
	getParent,
} from 'mobx-state-tree'

import {
	dataItem,
} from './storeItem'

/**
* Tab - This is ONE item in a list. eg: 'robots'
*
*/
const tab = types.model({
	id: types.identifier,
	ref: types.reference(dataItem),
	selected: false,
	name: ''
})
	.actions((self) => {
		return {
			clicked() {
				getParent(self, 2).changeSelection(self)
			},

			select(state = true) {
				self.selected = state
			},
		}
	})

export {
	tab,
}
