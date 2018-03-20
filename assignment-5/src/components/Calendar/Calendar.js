import React from 'react';
import styles from './Calendar.css';
import FontAwesome from 'react-fontawesome';

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        const init = new Date();
        this.state = {
            year: init.getFullYear(),
            month: init.getMonth(),
            day: init.getDay(),
            error: ''
        }
    }

    populateDays(year, month, currentDay) {
        const thirtyFirst = [0, 2, 4, 6, 7, 9, 11];
        const thirty = [3, 5, 8, 10];
        let days = 0;
        if(thirtyFirst.includes(month)) {
            days = 31;
        } else if(thirty.includes(month)) {
            days = 30;
        } else {
            if(!(year % 4) && year % 100 !== 0) {
                days = 29;
            } else if(!(year % 100) && !(year % 400)) {
                days = 29;
            } else {
                days = 28;
            }
        }
        let daysArray = [...Array(days).keys()];
        let daysPopulated =  daysArray.map(day => {
            let dayStyle =`${styles.day}`;
            if(day === currentDay) {
                dayStyle += ` ${styles.selected}`
            }
            return (
                <div 
                    onClick={() => this.setState({day})}
                    className={dayStyle}
                    key={day}
                >{day + 1}</div>);
        });
        return daysPopulated;
    }

    handleMonth(change) {
        const { month, year } = this.state;
        if(change < 0 && month === 0) {
            this.setState({ 
                year: year - 1,
                month: months.length - 1
            });            
        } else if(change > 0 && month === months.length - 1) {
            this.setState({
                year: year + 1,
                month: 0
            })
        } else {
            this.setState({ month: month + change });
        }
    }

    setDate() {
        const { year, month, day } = this.state;
        const { locale, onDatePick, closeModal } = this.props;
        let currentDate = new Date(year, month + 1, day + 1);
        if ( isNaN( currentDate.getTime() ) ) {  
            this.setState({ error: 'Date is invalid '});
            return;
          }
          else {
            currentDate = currentDate.toLocaleString(locale);
          }
        onDatePick(currentDate);
        closeModal(currentDate);
    }

    render () {
        const {day, month, year, error} = this.state;
        return (
            <div className={styles.body}>
                <div className={styles.title}>
                    <FontAwesome 
                        className={styles.arrows}
                        aria-hidden='false' 
                        name='angle-left' 
                        onClick={() => this.handleMonth(-1)}
                    />
                    <p>{months[month]} {year}</p>
                    <FontAwesome 
                        className={styles.arrows}s
                        aria-hidden='false' 
                        name='angle-right' 
                        onClick={() => this.handleMonth(1)}
                    />
                </div>
                <div>
                    {this.populateDays(year, month, day)}
                </div>
                <div className={styles.button}>
                    <button onClick={() => this.setDate()}>It's a date!</button>
                </div>
                <div>
                    {error}
                </div>
            </div>
        );
    }
}

export default Calendar;