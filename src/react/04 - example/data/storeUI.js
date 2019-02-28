import {
	types,
} from 'mobx-state-tree'

import {tabs} from './storeTabs'
import {networkState} from './storeNetwork'

const ui = types.model({
	top: types.compose(types.model({
		target: 'left',
	}), tabs, networkState),

	left: types.compose(types.model({
		target: 'main',
	}), tabs, networkState),

	main: types.compose(types.model({
		something: '',
	}), tabs, networkState),
})

export {
	ui,
}
