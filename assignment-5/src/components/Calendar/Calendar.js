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
            month: init.getMonth() + 1,
            day: init.getDate(),
            error: ''
        }
    }

    populateDays(year, month, currentDay) {
        const thirtyFirst = [1, 3, 5, 7, 8, 10, 12];
        const thirty = [4, 6, 9, 11];
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
            if(day === currentDay - 1) {
                dayStyle += ` ${styles.selected}`
            }
            let rightDay = day + 1;
            return (
                <div 
                    onClick={() => this.setState({day: rightDay})}
                    className={dayStyle}
                    key={day}
                >{rightDay}</div>);
        });
        return daysPopulated;
    }

    handleMonth(change) {
        const { month, year } = this.state;
        if(change < 0 && month === 1) {
            this.setState({ 
                year: year - 1,
                month: months.length
            });            
        } else if(change > 0 && month === months.length ) {
            this.setState({
                year: year + 1,
                month: 1
            })
        } else {
            this.setState({ month: month + change });
        }
    }

    setDate() {
        const { year, month, day } = this.state;
        const { locale, onDatePick, closeModal } = this.props;
        let currentDate = new Date(year, month - 1, day);
        if ( isNaN( currentDate.getTime() ) || currentDate.getDate() !== day ) {  
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
                    <p>{months[month - 1]} {year}</p>
                    <FontAwesome 
                        className={styles.arrows}
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