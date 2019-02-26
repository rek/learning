import React, {useContext} from 'react'

import Left from './left'
import Main from './main'
import Top from './top'
import Search from './search'

import {data1, data2} from './data/data'
import storeContext from './data/store'

export default () => {

	// this is when my app initially loads
	// we can fetch data, then set it on the store context
	const store = useContext(storeContext)

	// this simulates some ajax
	setTimeout(() => {
		store.setTabs([data1, data2])
		store.ajaxComplete()
	}, 1000)

	window.store = store

	return (
		 <React.Fragment>
			<Search />

			<Top />

			<Left />

			<Main />
		</React.Fragment>
	)
}
