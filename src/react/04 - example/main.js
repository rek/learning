import React, {useContext} from 'react'
import List from './common/list'

// import storeContext from './data/store'

export default ({
	storeContext
}) => {
	const store = useContext(storeContext)

	return (
		<List
			className='main'
			items={store.currentContent}
		/>
	)
}
