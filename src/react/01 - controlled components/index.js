import React from 'react'

/**
* PROS:
* -
*
* CONS:
* -
*
*/
class Controlled extends React.Component {
	state = {
		value: '',
	}
	
	render() {
		const {
			value,
		} = this.state

		const Component = React.lazy(() => import('./controlled'))

		return (
			<React.Suspense fallback='Loading...'>
				<Component
					value={value}
					handleChange={this.handleChange}
				/>
			</React.Suspense>
		)
	}
}

/**
* PROS:
* - Simple implementation, props are input and output only
*
* CONS:
* - Internal component has lots of complexity
*
*/
class Uncontrolled extends React.Component {
	handleBlur = (value) => {
		console.log('Final value:', value)
	}

	render() {
		const Component = React.lazy(() => import('./uncontrolled'))

		return (
			<React.Suspense fallback='Loading...'>
				<Component
					value='INITIAL VALUE'
					handleBlur={this.handleBlur}
				/>
			</React.Suspense>
		)
	}
}

// export each for testing
export {
	Controlled,
	Uncontrolled,
}


export default () => {
	return (
		<React.Fragment>
			<label>Controlled:</label>
			<Controlled />

			<label>Un-Controlled:</label>
			<Uncontrolled />
		</React.Fragment>
	)
}

