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

export default observer(() => {
	const rootStore = useContext(storeContext)

	return (
		<List
			className={'left'}
			items={rootStore.ui.left.all}
			loading={rootStore.ui.left.isLoading}
		/>
	)
})
