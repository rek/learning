import React from 'react'
import {observer} from 'mobx-react-lite'

export default observer(({
	items = [],
	networkStatus = '',
	className,
}) => {
	console.log('networkStatus', networkStatus)
	console.log('items.length', items.length)
    return (
        <ul className={className}>
	        {/*
				if there are no models
				make sure we are not loading,
				before we show the empty field
	        */}
			{items.length === 0 &&
				(networkStatus === 'pending'
					? <li>Loading...</li>
					: <li>None</li>
				)
			}

	        {items.map((item) => {
	        	return (
	    	        <li
		    	        key={item.id}
	    	        	onClick={item.clicked}
    	        	>
	    	        	{item.name}
	    	        </li>
		        )
	        })}
        </ul>
    )
})