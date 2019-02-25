import React from 'react'

/**
* PROS:
* -
*
* CONS:
* -
*
*/
const ControlledComponent = React.lazy(() => import('./controlled'))
class Controlled extends React.Component {
	state = {
		value: '',
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value,
		})
	}

	handleBlur = () => {
		console.log('Final value:', this.state.value)
	}

	render() {
		const {
			value,
		} = this.state

		return (
			<React.Suspense fallback='Loading...'>
				<ControlledComponent
					value={value}
					handleChange={this.handleChange}
					handleBlur={this.handleBlur}
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
const UncontrolledComponent = React.lazy(() => import('./uncontrolled'))
class Uncontrolled extends React.Component {
	handleBlur = (value) => {
		console.log('Final value:', value)
	}

	render() {

		return (
			<React.Suspense fallback='Loading...'>
				<UncontrolledComponent
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
			<Controlled />
			<Uncontrolled />
		</React.Fragment>
	)
}

