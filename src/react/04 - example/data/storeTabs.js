import {
	uniqueId,
} from 'lodash'
import {
	types,
	getParent,
} from 'mobx-state-tree'

import {tab} from './storeTab'

let tabs = types.model({
	models: types.array(tab),
})
	.actions((self) => {
		return {
			deselectAll() {
				self.models.forEach((item) => item.select(false))
			},

			changeSelection(tab) {
				self.deselectAll()
				tab.select()

				console.log('self.models', self.models.length)
				// if (self.models) {
				// 	self.reset()
				// }

				self.parent.loadDataFor(self.target, tab.ref.id)
			},

			setup(data) {
				// this makes a copy of the data
				// in our 'de-normalized' form
				self.models = data.map((item) => {
					return {
						id: uniqueId(),
						ref: item.id,
						name: item.name
					}
				})
			},

			reset() {
				return self.models = []
			},

		}
	})

	.views((self) => {
		return {
			get all() {
				return self.models
			},

			get parent() {
				return getParent(self, 2)
			},
		}
	})

export {
	tabs,
}
