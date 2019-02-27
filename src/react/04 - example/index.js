import React, {useContext} from 'react'

import Left from './left'
import Main from './main'
import Top from './top'
import Search from './search'

import {
	data1,
	data2,
	planets,
} from './data/data'

import store from './data/store'

const setupStores = async (storeContext) => {
	// fetch all data from the 'api'
	await storeContext.doNetworkCall([data1, data2], 'data')

	// get the data we want for our tabs
	const tabData = storeContext.filterData('tab')

	// and load the data into the ui store
	storeContext.ui.tabs.setup(tabData)

	await storeContext.doNetworkCall(planets, 'data')
	storeContext.loadDataFor('planet')
}

export default () => {

	// this is when my app initially loads
	// we can fetch data, then set it on the store context
	const storeContext = useContext(store)

	setupStores(storeContext)

	window.store = storeContext

	return (
		 <React.Fragment>
			<Search />

			<Top store={storeContext.ui.tabs} />

			<Left store={storeContext.ui.left} />

			{/*<Main />*/}
		</React.Fragment>
	)
}
