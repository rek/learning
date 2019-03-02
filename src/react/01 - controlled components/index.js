import React from 'react'

/**
* PROS:
* - Simple implementation, props are input and output only
*
* CONS:
* - Internal component has lots of complexity
*
*/
const Uncontrolled = () => {
	const handleBlur = (value) => {
		console.log('Final value:', value)
	}

	const UncontrolledComponent = React.lazy(() => import('./uncontrolled'))

	return (
		<React.Suspense fallback='Loading...'>
			<UncontrolledComponent
				handleBlur={handleBlur}
			/>
		</React.Suspense>
	)
}













































/**
* PROS:
* - Recommended by react team (generally)
* - Child component is presentational
* - More reusable
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

	handleChange = (value) => {
		this.setState({
			value,
		})
	}

	handleSearch = () => {
		console.log('Doing search:', this.state.value)
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
					handleBlur={this.handleSearch}
				/>
			</React.Suspense>
		)
	}
}





























/**
* Type 3: Controllable - NOT dealing with here
*
* PROS:
* - Most of best of both
*
* CONS:
* - More complex
*
*/



















































export default () => {
	return (
		<React.Fragment>
			<Uncontrolled />
			<Controlled />
		</React.Fragment>
	)
}











































// export each for testing
export {
	Controlled,
	Uncontrolled,
}
