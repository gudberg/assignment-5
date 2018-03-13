import React from 'react';
import Proptypes from 'prop-types';
import styles from './Modal.css';

const Carousel = ({color, images}) => {
    return(
        <div style={{ backgroundImage: `url(${images})` }} className={styles[`avatar-${size}`]}></div>
    );
};

Carousel.propTypes = {
    size: Proptypes.oneOf([ 'small', 'medium', 'large' ]),
    images: PropTypes.array.isRequired
};

Carousel.defaultProps = {
    size: 'medium'
};
export default Carousel;