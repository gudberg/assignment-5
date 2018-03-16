import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.css';

const ProgressBar = ({ progress, striped, animated, state}) => {
    let barStyle = `${styles[`prog-${state}`]}`;
    if(striped) {
        barStyle += ` ${styles.striped}`
    }
    if(animated) {
        console.log("animatEe!!");
        barStyle += ` ${styles.animate}`
    }
    console.log(barStyle);
    const style = {
        width: `${progress}%`
    }
    return (
        <div className={styles.block}>
            <div style={style} className={barStyle}></div>
        </div>
    );
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