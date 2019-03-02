import {
	types,
	getParentOfType,
} from 'mobx-state-tree'

import {generateTabsStore} from './storeTabs'
import {networkState} from './storeNetwork'
import {dataItem} from './storeItem'

const mainTab = types.model({
	clicks: 0,
	id: types.identifier,
	ref: types.reference(dataItem),
	selected: false,
	name: '',
})
	.actions((self) => {
		return {
			clicked() {
				self.clicks++

				if (self.clicks === 5) {
					getParentOfType(self, main).delete(self)
				}
			},
		}
	})

	.views((self) => {
		return {
			get displayName() {
				return self.clicks === 0
					? self.name
					: `${self.name} - ${self.clicks}`
			},
		}
	})

const main = types.compose(
	types.model({
		something_else: '',
	}),
	generateTabsStore(mainTab),
	networkState,
)
	.actions((self) => {
		return {
			getCustomData(stores, id) {
				return stores.getById(id).children || []
			},
		}
	})

export {
	main,
}
