import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Calendar/Calendar';

class DatePicker extends React.Component {
    render() {
        return (
            <Calendar />
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