import React from 'react'
import {Provider} from 'mobx-react'

const robots = {}

export default ({
	items = [],
}) => {
    return (
        <ul className='main'>
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
}
