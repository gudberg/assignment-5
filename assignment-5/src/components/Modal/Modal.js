import React from 'react';
import styles from './Modal.css';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {

    return (
        <div className={`${styles.modalOverlay} ${isOpen ? '' : styles.hidden}`}>
            <div className={styles.modal}>
                <div className={styles.modalClose} onClick={onClose}><i className="fa fa-times"></i></div>
                {children}
            </div>
        </div>
    );
};


Modal.Title = ({ children }) => <div className={styles.modalTitle}>{children}</div>;
Modal.Body = ({ children }) => <div className={styles.modalBody}>{children}</div>;
Modal.Footer = ({ children }) => <div className={styles.modalFooter}>{children}</div>;


Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
};

Modal.defaultProps = {
    isOpen: false
}

export default Modal;