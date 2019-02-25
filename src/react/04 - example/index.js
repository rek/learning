import React from 'react'
import {Provider} from 'mobx-react'

import Left from './left'
import Main from './main'

const robots = [{
	id: '1',
	name: 'tset',
	children: [{
		id: 'c-1-1',
		name: 'tset',
	}],
}, {
	id: '2',
	name: 'eee',
	children: [{
		id: 'c-2-1',
		name: 'James',
	}, {
		id: 'c-2-2',
		name: 'Jimmy',
	}, {
		id: 'c-2-3',
		name: 'Bill',
	}, {
		id: 'c-2-4',
		name: 'Bill',
	}, {
		id: 'c-2-5',
		name: 'Bill',
	}, {
		id: 'c-2-6',
		name: 'Bill',
	}],
}]

export default () => {
    return (
	     <React.Fragment>
	        <Left
	        	items={robots}
	    	/>

	        <Main
	        	items={robots[1].children}
	    	/>
	     </React.Fragment>
    )
}
