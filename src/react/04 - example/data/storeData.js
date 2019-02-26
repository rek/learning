import {createContext} from 'react'
import {types} from 'mobx-state-tree'

const tab = types.model({
	id: '',
	name: '',
})
	.actions((self) => {
		return {
			updateSearch(value) {
				self.value = value
			},
		}
	})

const store = types.model({
	tabs: types.array(tab),
	networkState: types.optional(types.enumeration(['pending', 'done']), 'pending'),
	currentTab: types.maybe(types.safeReference(tab)),
})
	.actions((self) => {
		return {
			ajaxComplete() {
				self.networkState = 'done'
			},

			setTabs(value) {
				self.tabs = value
			},
		}
	})

	.views((self) => {
		return {
			get currentChildren() {
				if (self.currentTab) {

				}

				return []
			},
		}
	})



export default createContext(store.create())
