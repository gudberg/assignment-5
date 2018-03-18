import React from 'react';
import Proptypes from 'prop-types';
import styles from '../Carousel/Carousel.css';

const CarouselSlideItem = ({getSize, image, show}) => {
    var classString;
    if(show) {
         classString = styles.show;
    }
    else {
         classString = styles.slide;
    }
    console.log(getSize);    
    return (
      <div className={classString}>
        <img className={styles[`slider-${getSize}`]} src={image} alt=""/>
      </div>    
    );
};

CarouselSlideItem.proptypes = { 
    getSize: Proptypes.array,
    image: Proptypes.string,
    show: Proptypes.bool.isRequired
};

export default CarouselSlideItem;