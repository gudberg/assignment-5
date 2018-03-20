import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimePicker.css';
import AlarmClock from '../AlarmClock/AlarmClock';
import Modal from '../Modal/Modal';


class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            currentTime: ''
        }
    }
    render() {
        const { isModalOpen, currentTime } = this.state;
        const { onTimePick, format} = this.props;
        return (
            <div>
                <input 
                    type="text" 
                    onClick={() => this.setState({ isModalOpen: true })}
                    className={styles.input}
                    placeholder="Click me to get a time!"
                    value={currentTime}
                />
                <Modal 
                    isOpen={isModalOpen}
                    onClose={() => this.setState({ isModalOpen:false })}>
                    <Modal.Title>Pick a date!</Modal.Title>
                    <Modal.Body>
                        <AlarmClock 
                           onTimePick={onTimePick}
                           format={format}
                           closeModal={(time) => this.setState({ isModalOpen: false, currentTime: time })}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        )
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