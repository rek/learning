import React, {useContext, useState} from 'react'
import {observer} from 'mobx-react-lite'

import storeContext from './data/store'

const componentName = 'main'

export default observer(() => {
	const rootStore = useContext(storeContext)
	const store = rootStore.ui[componentName]

	return (
		<ul className='main'>
			{/*
				if there are no models
				make sure we are not loading,
				before we show the empty field
			*/}
			{store.all.length === 0 &&
				(store.isLoading
					? <li>Loading...</li>
					: ''
				)
			}

			{store.all.map((item) => {
				return (
					<CustomLi item={item} key={item.id} />
				)
			})}
		</ul>
	)
})

const CustomLi = ({item}) => {
	const [clicks, setClick] = useState(0)

	const handleClick = () => {
		setClick(clicks + 1)

		if (clicks === 2) {
			item.clicked()
			setClick(0)
		}
	}

	return (
		<li
			onClick={handleClick}
			className={item.selected ? 'on' : ''}
		>
			{item.displayName}
		</li>
	)
}
