import React from 'react'
import {Provider} from 'mobx-react'

const robots = {}

export default () => {
	return (
		<Provider store={robots}>
			<div>
				coming soon...
			</div>
		</Provider>
	)
}
