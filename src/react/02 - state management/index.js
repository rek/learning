import React from 'react';
import {observer} from 'mobx-react';
import {types} from 'mobx-state-tree'

import SearchComponent from '../01 - controlled components/controlled'

// define store
const SearchModel = types
	.model({
		value: 'default',
	})
	.actions((self) => {
		return {
			updateSearch(value) {
				self.value = value;
			},
		}
	})

// create store instance
const search = SearchModel.create({
	// value: '',
})

class StateManagement extends React.Component {
	handleSearch = () => {
		console.log('Doing search:', search.value)
	}

	render() {
		return (
			<SearchComponent
				label='Search (MobX)'
				placeholder='Name...'
				value={search.value}
				handleChange={search.updateSearch}
				handleBlur={this.handleSearch}
			/>)
	}
}

export default observer(StateManagement)
