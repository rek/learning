import React, {useState} from 'react'

import SearchComponent from '../01 - controlled components/controlled'

export default ({
	handleSearch,
}) => {
	const [search, updateSearch] = useState('')

	return (
		<SearchComponent
			label='Search (Hooks)'
			placeholder='Name...'
			value={search}
			handleChange={updateSearch}
			handleBlur={handleSearch}
		/>
	)
}
