import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.css';
import Calendar from '../Calendar/Calendar';
import Modal from '../Modal/Modal';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            isModalOpen: false,
            currentDate: ''
        }
    }

    render() {
        const { locale, onDatePick } = this.props;
        const { isModalOpen, currentDate } = this.state;
        return (
            <div>
                <input 
                    type="text" 
                    onClick={() => this.setState({ isModalOpen: true })}
                    className={styles.input}
                    placeholder="Click me to get a date!"
                    value={currentDate}
                />
                <Modal 
                    isOpen={isModalOpen}
                    onClose={() => this.setState({ isModalOpen:false })}>
                    <Modal.Title>Pick a date!</Modal.Title>
                    <Modal.Body>
                        <Calendar 
                            locale={locale} 
                            onDatePick={onDatePick.bind(this)}
                            closeModal={(date) => this.setState({ isModalOpen: false, currentDate: date })}
                        />
                    </Modal.Body>
                </Modal>
            </div>
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