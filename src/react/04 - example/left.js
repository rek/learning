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

export default ({
	store,
}) => {
	return (
		<List
			className='left'
			items={store.all}
			isLoaded
		/>
	)
}
