import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

const Tab = ({children, title}) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
        );
}

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Tab;