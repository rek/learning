import React from 'react'
import {observer} from 'mobx-react-lite'

export default observer(({
	items = [],
	isLoaded = false,
	className,
}) => {
    return (
        <ul className={className}>
	        {/*
				if there are no models
				make sure we are not loading,
				before we show the empty field
	        */}
			{items.length === 0 &&
				(isLoaded
					? <li>None</li>
					: <li>Loading...</li>
				)
			}

	        {items.map((item) => {
	        	return (
	    	        <li
		    	        key={item.id}
	    	        	onClick={item.clicked}
	    	        	className={item.selected ? 'on' : ''}
    	        	>
	    	        	{item.name}
	    	        </li>
		        )
	        })}
        </ul>
    )
})
