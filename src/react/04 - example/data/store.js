import {createContext} from 'react'
import {
	types,
	flow,
} from 'mobx-state-tree'

import {ui} from './storeUI'
import {dataItem} from './storeItem'

// main ROOT store
const store = types.model({
	// raw datas
	data: types.array(dataItem),

	// ui store!
	// this guy duplicates data from our main store when needed
	ui,
})
	.actions((self) => {
		return {
			/**
			* Load data
			*
			* eg:
			* 	store: "left"
			* 	type: "planet"
			*/
			loadDataFor: flow(function*(store, type) {
				let data = self.filterData(type)

				let currentStore = self.ui[store]

				if (data.length === 0) {
					// if there are existing models in the display
					// clear them out
					currentStore.reset()

					currentStore.networkStarted()

					let fetchedData

					if (currentStore.getCustomData) {
						fetchedData = currentStore.getCustomData(self, type)
					} else {
						console.log('Starting to fetch data for:', store, type)
						const fetching = yield import('./data')
						fetchedData = fetching[type]
						// console.log('Fake fetched data:', fetchedData)

						// put our new data in the store
						// note: this is pretty contrived, just a quick example
						self.data = self.data.concat(fetchedData)
					}

					// this simulates some ajax
					data = yield new Promise((resolve) => {
						setTimeout(() => {
							resolve(fetchedData)
						}, 1000)
					})

					currentStore.networkEnded()
				}

				currentStore.setup(data)
			}),
		}
	})

	.views((self) => {
		return {
			filterData(type) {
				return self.data.filter((item) => item.type === type)
			},

			getById(id) {
				return self.data.find((item) => item.id === id)
			},
		}
	})

export default createContext(store.create({
	// defaults:
	// (can avoid this by better type setups)
	ui: {
		top: {
			models: []
		},
		left: {
			models: []
		},
		main: {
			models: []
		}
	}
}))
