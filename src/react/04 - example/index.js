import React from 'react'

import Left from './left'
import Main from './main'
import Top from './top'
import Search from './search'
import robots from './data'

export default () => {
	return (
		 <React.Fragment>
			<Search
				items={robots}
			/>

			<Top
				items={robots}
			/>

			<Left
				items={robots}
			/>

			<Main
				items={robots[1].children}
			/>
		 </React.Fragment>
	)
}
