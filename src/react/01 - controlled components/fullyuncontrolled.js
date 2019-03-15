import React from 'react'
import PropTypes from 'prop-types'

class FullyUnControlled extends React.Component {
	static propTypes = {
		handleBlur: PropTypes.func.isRequired,
		type: PropTypes.string,
	}

	static defaultProps = {
		type: 'text',
	}

	constructor(props) {
		super(props);
		this.input = React.createRef()
	}
	handleBlur = () => {
		this.props.handleBlur(this.input.current.value)
	}

	render() {
		const {type} = this.props

		return (
			<React.Fragment>
				<label>Fully Un-Controlled:</label>
				<input
					className='awesome-input'
					type={type}
					onBlur={this.handleBlur}
					placeholder='Name...'
					ref={this.input}
				/>
			</React.Fragment>
		)
	}
}

export default FullyUnControlled
