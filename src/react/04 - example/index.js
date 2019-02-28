import React from 'react'

import Left from './left'
import Main from './main'
import Top from './top'
import Search from './search'

export default () => {
	return (
		<React.Fragment>
			<Search />

			<Top />

			<Left />

			<Main />
		</React.Fragment>
	)
}
