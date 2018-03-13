import React from 'react';
import Proptypes from 'prop-types';
import styles from './Modal.css';

const Modal = ({color, children}) => {
    return(
        <div className={styles[`color-${color}`]}>
        {children}
        </div>
    );
};

Modal.propTypes = {
    color: Proptypes.oneOf([ 'small', 'medium', 'large' ]),
    children: Proptypes.node
};

Modal.defaultProps = {
    color: 'medium'
};
export default Modal;