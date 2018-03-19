import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimePicker.css';
import FontAwesome from 'react-fontawesome';
import Row from '../Row/Row';
import Col from '../Col/Col';

const UP_M = "UpM";
const DOWN_M = "DownM";
const DOWN_H = "DownH";
const UP_H = "UpH";
const CHANGEH = "CHANGEH";
const CHANGEM = "CHANGEM";

const initialState = {
    hour : 12,
    minute: 0
}


class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 12,
            minute: 0,
        }
    }

    onClick = (method, change = 0) => {
        const { minute, hour } = this.state;
        const { format } = this.props;
        if(isNaN(minute) || minute > 59) {
            this.setState({ ...initialState.minute });
            return;
        }


        if(isNaN(hour) || (hour + parseInt(change)) > 24) {
            this.setState({ ...initialState.hour });
            return;
        }

        if( format === 12 && (hour + change)=== 0) {
            this.setState({ hour: 12 });
            return;
        }

        switch(method) {
            case UP_H: {
                if(hour === 23 && format != 12 ) {
                    this.setState({ hour: 0});
                    break;
                }
                else if (hour === 24 && format === 12) {
                    this.setState({ hour: 1 });
                    break;
                }
                this.setState({ hour: hour + 1});
                break;
            }
            case UP_M: {
                if(minute === 59) {
                    this.setState({ minute: 0});
                    break;
                }
                this.setState({ minute: minute + 1}); 
                break;
            }
            case DOWN_H: {
                if(hour === 0) {
                    this.setState({ hour: 23});
                    break;
                }
                else if (format === 12 && hour === 1) {
                    this.setState( { hour: 24 });
                    break;
                }
                this.setState({ hour: hour - 1});
                break;
            }
            case DOWN_M:  {
                if(minute === 0) {
                    this.setState({ minute: 59});
                    break;
                }
                this.setState({ minute: minute - 1})
                break;
            }
            case CHANGEH: {
                this.setState({ hour: parseInt(change) });
                break;
            }
            case CHANGEM: {
                this.setState({ minute : parseInt(change) });
                break;
            }
            default: break;
        }
    }

    getMinute() {
        const { minute } = this.state;
        if(minute < 10) {
            return `0${minute}`;
        }
        return `${minute}`;
    }

    getHour() {
        let hour = this.state.hour;
        const { format } = this.props;
        if(format === 12 && hour >= 13) {
            hour -= 12;
        }
        if(hour < 10) {
            return `0${hour}`;
        }
        return `${hour}`;
    }

    handleSet() {
        const { format } = this.props;
        const { hour } = this.state;
        const { onTimePick } = this.props;
        let time = `${this.getHour()}:${this.getMinute()}`;
        if(format === 12) {
            if(hour >= 12 &&  hour != 24) {
                time += ' pm';
            }
            else {
                time += ' am';
            }
        }
        onTimePick(time);
    }

    render() {
        let hour = this.getHour();
        let minute = this.getMinute();
        const { format } = this.props;
        let amPm = (<div className={styles.ampm}></div>);
        if(format === 12) {
            if(this.state.hour >= 12 && this.state.hour != 24) {
                amPm = (
                    <div className={styles.ampm}>
                        <FontAwesome 
                            aria-hidden='false'
                            name='circle'
                            style={{color: 'red'}}
                        />
                    </div>
                );
            }
        }
        return (
            <div>
                <div className={styles.alarm}>
                    <div>
                        <div className={styles.leftup}>
                            <FontAwesome 
                                aria-hidden='false' 
                                name='angle-up' 
                                size="5x"
                                onClick={() => this.onClick(UP_H)}
                            />
                        </div>                    
                        <div className={styles.rightup}>
                            <FontAwesome 
                                aria-hidden='false' 
                                name='angle-up' 
                                size="5x"
                                onClick={() => this.onClick(UP_M)}
                            />
                        </div>
                    </div>
                    {amPm}
                    <div>
                        <div className={styles.container}>
                            <div className={styles.hournminutes}>
                                <p>{hour}:{minute}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.leftdown}>
                            <FontAwesome 
                                aria-hidden='false' 
                                name='angle-down' 
                                size="5x"
                                onClick={() => this.onClick(DOWN_H)}
                            />
                        </div>
                        <div className={styles.rightdown}>
                            <FontAwesome 
                                aria-hidden='false' 
                                name='angle-down' 
                                size="5x"
                                onClick={() => this.onClick(DOWN_M)}
                            />
                        </div>                        
                    </div>
                </div>   
                <button onClick={this.handleSet.bind(this)}>Set Time</button> 
            </div>
        );
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