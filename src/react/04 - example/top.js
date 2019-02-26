import React, {useContext} from 'react'
import List from './common/list'

import storeContext from './data/store'

export default () => {
	const store = useContext(storeContext)

	return (
		<List
			className='top'
			items={store.tabs}
			networkStatus={store.networkState}
		/>
	)
}
