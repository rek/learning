import React from 'react'
import PropTypes from 'prop-types'

const Controlled = ({
	value,
	type = 'text',
	handleBlur,
	handleChange,
}) => {
	return (
        <React.Fragment>
	        <label>Controlled:</label>
			<input
				className='awesome-input'
				type={type}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder='Name...'
			/>
        </React.Fragment>
	)
}

Controlled.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func,
	type: PropTypes.string,
}

export default Controlled
