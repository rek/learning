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
	className = 'awesome-input',
}) => {
	return (
		<div className={className}>
			<label>{label}</label>

			<input
				type={type}
				value={value}
				placeholder={placeholder}

				onBlur={handleBlur}
				onChange={returnValue(handleChange)}
			/>
		</div>
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
