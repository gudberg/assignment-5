import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimePicker.css';
import AlarmClock from '../AlarmClock/AlarmClock';

const initialState = {
    hour : 12,
    minute: 0
}


class TimePicker extends React.Component {
   render() {
       const { onTimePick, format} = this.props;
       return <AlarmClock onTimePick={onTimePick} format={format}/>
   }
}

TimePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.number
}

TimePicker.defaultProps = {
    format: 24
}

export default TimePicker;