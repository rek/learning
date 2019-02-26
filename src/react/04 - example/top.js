import React from 'react'
import List from './common/list'

export default ({
	items = [],
}) => {
	return (
		<List
			className='top'
			items={items}
		/>
	)
}
