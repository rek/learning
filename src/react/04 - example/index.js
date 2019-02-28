import React, {useContext} from 'react'

import Left from './left'
import Main from './main'
import Top from './top'
import Search from './search'

import storeContext from './data/store'

export default () => {

	// this is when my app initially loads
	// we can fetch data, then set it on the store context
	const store = useContext(storeContext)

	store.loadDataFor('top', 'tab')

	window.store = store

	return (
		<React.Fragment>
			<Search />

			<Top store={store.ui.top} />

			<Left store={store.ui.left} />

			<Main />
		</React.Fragment>
	)
}
