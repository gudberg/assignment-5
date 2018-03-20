import React from 'react';
import styles from './Calendar.css';

const months = ['january', 'febuary', 'march', 'april', 'may', 'june', 
    'july', 'august', 'september', 'october', 'november', 'december'];

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            what: 1,
        }
    }

    handleClickTitle(what) {
        this.setState({ what });
    }

    render () {
        const { what } = this.state;
        const {day, month, year} = {day: 1, month: 2, year: 3};
        console.log(what);
        let body = null;
        if(what === day) {
            body = <div>This is day</div>
        } else if( what === month) {
            body = <div>This is month</div>
        } else if(what === year) {
            body = <div>This is year</div>
        }
        return (
            <div className={styles.body}>
                <div>
                    <div className={styles.title} onClick={() => this.handleClickTitle(1)}>Day</div>
                    <div className={styles.title} onClick={() => this.handleClickTitle(2)}>Month</div>
                    <div className={styles.title} onClick={() => this.handleClickTitle(3)}>Year</div>
                </div>
                <div>
                    {body}
                </div>
            </div>
        );
    }
}

export default Calendar;