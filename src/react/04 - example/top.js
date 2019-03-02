// import React from 'react'

// export default ({
// 	items = [],
// 	handleClick,
// }) => {
// 	return (
// 		<ul className='left'>
// 			{items.map((item) => {
// 				return (
// 					<li
// 						key={item.id}
// 						onClick={handleClick(item)}
// 					>
// 						{item.name}
// 					</li>
// 				)
// 			})}
// 		</ul>
// 	)
// }

import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'

import List from './common/list'
import storeContext from './data/store'

const componentName = 'top'

export default observer(() => {
	// get the store we want from React context
	const rootStore = useContext(storeContext)

	// TEMP DEBUGGING - don't actually do this
	window.store = rootStore

	// this is when the app initially loads
	// we can fetch data, then set it on the store context
	// we could do this anywhere
	rootStore.loadDataFor(componentName, 'category')

	// get the store we want to watch
	const store = rootStore.ui[componentName]

	return (
		<List
			className={componentName}
			items={store.all}
			loading={store.isLoading}
		/>
	)
})
