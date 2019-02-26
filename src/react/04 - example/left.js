import React from 'react'

export default ({
	items = [],
}) => {
	return (
		<ul className='left'>
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
