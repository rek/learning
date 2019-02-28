import React from 'react'
import List from './common/list'
import {observer} from 'mobx-react-lite'

export default observer(({
	store,
}) => {
	return (
		<List
			className='top'
			items={store.all}
			loading={store.isLoading}
		/>
	)
})
