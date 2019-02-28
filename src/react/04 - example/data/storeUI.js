import {
	types,
} from 'mobx-state-tree'

import {generateTabsStore} from './storeTabs'
import {networkState} from './storeNetwork'
import {main} from './storeMain'

const ui = types.model({
	top: types.compose(types.model({
		target: 'left',
	}), generateTabsStore(), networkState),

	left: types.compose(types.model({
		target: 'main',
	}), generateTabsStore(), networkState),

	main,
})

export {
	ui,
}
