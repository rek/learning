import React from 'react'
import PropTypes from 'prop-types'

const Controlled = ({
    value,
    type = 'text',
    handleChange,
}) => {
    return (
        <input
            className='awesome-input'
            type={type}
            value={value}
            onChange={handleChange}
            placeholder='controlled'
        />
    )
}

Controlled.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default Controlled
