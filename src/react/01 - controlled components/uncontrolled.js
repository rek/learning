import React from 'react'
import PropTypes from 'prop-types'

class UnControlled extends React.Component {
    propTypes = {
        value: PropTypes.string,
        handleBlur: PropTypes.func.isRequired,
        type: PropTypes.string,
    }

    state = {
        value: this.props.value,
    }

    static defaultProps = {
        type: 'text',
        value: '',
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleBlur = () => {
        this.props.handleBlur(this.state.value)
    }

    render() {
        const {
            value,
            type,
        } = this.state

        return (
            <React.Fragment>
                <label>Un-Controlled:</label>
                <input
                    className='awesome-input'
                    type={type}
                    value={value}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    placeholder='Name...'
                />
            </React.Fragment>
        )
    }
}

export default UnControlled
