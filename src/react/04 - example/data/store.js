import {createContext} from 'react'
import {
	types,
	flow,
} from 'mobx-state-tree'

import {
	ui,
	tabs,
} from './storeUI'

import {
	dataItem,
} from './storeItem'

// console.log('tabs', tabs)

const networkState = types.optional(types.enumeration(['pending', 'done']), 'pending')


// main ROOT store
const store = types.model({
	// raw datas
	data: types.array(dataItem),
	dataNetworkState: networkState,

	// ui store!
	ui,
})
	.actions((self) => {
		return {
			doNetworkCall: flow(function*(fakeData, type) {
				// put our new data in the store
				self[type] = self[type].concat(fakeData)

				// this simulates some ajax
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						self.networkState = 'done'
						resolve(fakeData)
					}, 1000)
				})
			}),

			loadDataFor(type) {
				const planetData = self.filterData(type)
				console.log('planetData', planetData)
				self.ui.left.setup(planetData)
			},
		}
	})

	.views((self) => {
		return {
			get allData() {
				return self.data.map((item) => item.id)
			},

			filterData(type) {
				return self.data.filter((item) => item.type === type)
			},

			get currentChildren() {
				if (self.currentTab) {

				}

				return []
			},
		}
	})

export default createContext(store.create({
	// defaults:

	ui: {
		tabs: {
			models: []
		},
		left: {
			models: []
		}
	}
}))
