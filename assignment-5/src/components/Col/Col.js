import React from 'react';
import PropTypes from 'prop-types';
import styles from './Col.css';

const Col = ({size, children}) => {
    return <div className={`${styles[`col-${size}`]}`}>{children}</div>
}

Col.propTypes = {
    size: PropTypes.number
}

Col.defaultProps = {
    size: 1
}

export default Col;