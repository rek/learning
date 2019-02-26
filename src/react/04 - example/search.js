import React from 'react'

import SearchComponent from '../01 - controlled components/controlled'

export default ({
	items = [],
}) => {
	return (
		<SearchComponent
			className='search'
			label='Search (MobX)'
			placeholder='Name...'
			value=''
			handleChange={() => {}}
			handleBlur={() => {}}
		/>
	)
}
