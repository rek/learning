import React from 'react'
import PropTypes from 'prop-types'

const ControlledSearch = ({
	value,
	handleChange,
	handleSearch,
	placeholder,
	label,
}) => {
	return (
		<React.Fragment>
			<label>Search</label>

			<input
				type='text'
				value={value}
				onChange={handleChange}
				onBlur={handleSearch}
				placeholder={placeholder}
			/>
		</React.Fragment>
    )
}

ControlledSearch.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default ControlledSearch
