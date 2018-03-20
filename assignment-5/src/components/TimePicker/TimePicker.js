import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimePicker.css';
import FontAwesome from 'react-fontawesome';

const initialState = {
    hour : 12,
    minute: 0
}


class TimePicker extends React.Component {
   
}

TimePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.number
}

TimePicker.defaultProps = {
    format: 24
}

export default TimePicker;