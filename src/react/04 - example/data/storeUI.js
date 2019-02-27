import {
	uniqueId,
} from 'lodash'
import {
	types,
	getParent,
} from 'mobx-state-tree'

import {
	dataItem,
} from './storeItem'

const tabModel = types.model({
	id: types.identifier,
	ref: types.reference(dataItem),
	selected: false,
	name: ''
})
	.actions((self) => {
		return {
			clicked() {
				getParent(self, 2).deselectAll()
				self.select()
			},

			select(state = true) {
				self.selected = state
			},
		}
	})

const tabs = types.model({
	models: types.array(tabModel),
	isLoaded: false,
})
	.actions((self) => {
		return {
			deselectAll() {
				self.models.forEach((item) => item.select(false))
			},

			setup(data) {
				self.models = data.map((item) => {
					return {
						id: uniqueId(),
						ref: item.id,
						name: item.name
					}
				})
				self.isLoaded = true
			},

			handleClick: (item) => () => {
				self.selectItem(item.id)

			},

			selectItem(item) {
				self.selected = item
			},
		}
	})

	.views((self) => {
		return {
			get all() {
				return self.models
			},
		}
	})

const left = types.model({
	models: types.array(types.reference(dataItem)),
})
	.actions((self) => {
		return {
			setup(data) {
				self.models = data
			},
		}
	})

	.views((self) => {
		return {
			get all() {
				return self.models
			},
		}
	})

const ui = types.model({
	tabs,
	selectedTab: 'planets',
	left,
})

export {
	ui,
}
