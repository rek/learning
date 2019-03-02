import {
	uniqueId,
} from 'lodash'
import {
	types,
	getParent,
	destroy,
} from 'mobx-state-tree'

import {tab} from './storeTab'

const generateTabsStore = (
	modelType = tab,
) => {

	return types.model({
		models: types.array(modelType),
	})
		.actions((self) => {
			return {
				deselectAll() {
					self.models.forEach((item) => item.select(false))
				},

				/**
				* Handle the click from a child
				*
				* This changes the item selected
				*/
				handleClick(tab) {
					// remove current selections
					self.deselectAll()
					// select the one we just clicked
					tab.select()

					// and load it's data into the ui store
					// (this will also fetch if needed)
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

				delete(model) {
					console.log('Deleting:', model.name)
					destroy(model)
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
}

export {
	generateTabsStore,
}
