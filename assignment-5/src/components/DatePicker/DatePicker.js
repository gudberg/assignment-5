import React from 'react';
import PropTypes from 'prop-types';

class DatePicker extends React.Component {
    render() {
        return (
            <input type="date"/>
        );
    }
}

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string
}

DatePicker.defaultProps = {
    locale: 'is-IS'
}

export default DatePicker;