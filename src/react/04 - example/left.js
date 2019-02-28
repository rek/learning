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

import React from 'react'
import List from './common/list'
import {observer} from 'mobx-react-lite'

export default observer(({
	store,
}) => {
	return (
		<List
			className='left'
			items={store.all}
			loading={store.isLoading}
		/>
	)
})
