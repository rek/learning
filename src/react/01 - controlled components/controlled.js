import React from 'react'
import PropTypes from 'prop-types'

const returnValue = (handleChange) => (event) => handleChange(event.target.value)

const Controlled = ({
	value,
	handleChange,
	handleBlur,

	label = 'Controlled:',
	type = 'text',
	placeholder = 'Name...',
}) => {
	return (
        <React.Fragment>
	        <label>{label}</label>

			<input
				className='awesome-input'
				type={type}
				value={value}
				onChange={returnValue(handleChange)}
				onBlur={handleBlur}
				placeholder={placeholder}
			/>
        </React.Fragment>
	)
}

Controlled.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func,

	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
}

export default Controlled
