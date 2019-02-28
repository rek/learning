
import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'

import List from './common/list'
import storeContext from './data/store'

const componentName = 'top'

export default observer(() => {
	const rootStore = useContext(storeContext)

	// this is when my app initially loads
	// we can fetch data, then set it on the store context
	rootStore.loadDataFor('top', 'category')

	const store = rootStore.ui[componentName]

	return (
		<List
			className={componentName}
			items={store.all}
			loading={store.isLoading}
		/>
	)
})
