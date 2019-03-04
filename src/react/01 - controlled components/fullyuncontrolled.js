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

	handleBlur = () => {
		this.props.handleBlur(this.input.value)
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
					ref={(el) => {
						this.input = el
					}}
				/>
			</React.Fragment>
		)
	}
}

export default FullyUnControlled
