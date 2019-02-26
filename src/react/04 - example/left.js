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
import List from './common/list'

import storeContext from './data/store'

export default () => {
	const store = useContext(storeContext)

	return (
		<List
			className='left'
			items={store.currentChildren}
			networkStatus={store.networkState}
		/>
	)
}
