import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.css';

class ProgressBar extends React.Component {
    componentDidMount() {
        this.interval = setInterval(this.keepTheLoopGoing.bind(this), 10);
    }

    keepTheLoopGoing() {
        const { progress } = this.props;
        const { currentProgress } = this.state;
        if(progress > currentProgress) {
            this.setState({ currentProgress: currentProgress + 1});
        } else {
            clearInterval(this.interval);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            currentProgress: 0,
        }
    }

    render() {
        const { currentProgress } = this.state;
        const { progress, striped, animated, state } = this.props; 
        let barStyle = `${styles[`prog-${state}`]}`;
        if(striped) {
            barStyle += ` ${styles.striped}`
        }
        let style = {};
        if(animated) {
            style = {
                width: `${currentProgress}%`
            }
        } else {
            style = {
                width: `${progress}%`
            }
        }
        return (
            <div className={styles.block}>
                <div style={style} className={barStyle}></div>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    state: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired
}

ProgressBar.defaultProps = {
    striped: false,
    animated: false
}

export default ProgressBar;