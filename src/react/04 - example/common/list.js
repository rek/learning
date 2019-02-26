import React from 'react'

export default ({
	items = [],
	className,
}) => {
    return (
        <ul className={className}>
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
