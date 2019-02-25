import React from 'react'
import {observer} from 'mobx-react'
import {types} from 'mobx-state-tree'

import SearchComponent from './search'

const SearchModel = types.model('SearchModel', {
	value: '',
})
	.actions((self) => {
		return {
			updateSearch(event) {
				self.value = event.target ? event.target.value : event
			},
		}
	})

class StateManagement extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true
		}
	}

	search = SearchModel.create({
		value: '',
	})

	handleSearch = () => {
		console.log('Doing search:', this.search.value)
	}

	render() {
		return (
			<SearchComponent
				label='Search'
				placeholder='Name...'
				value={this.search.value}
				handleChange={this.search.updateSearch}
				handleSearch={this.handleSearch}
			/>
		)
	}
}

export default observer(StateManagement)
