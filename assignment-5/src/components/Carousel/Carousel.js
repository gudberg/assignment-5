import React from 'react';
import Proptypes from 'prop-types';
import styles from './Carousel.css';
import CarouselSlideItem from '../CarouselSlideItem/CarouselSlideItem';

class Carousel extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state = {
            currSlide : 0
        }
        this.forward= this.forward.bind(this);
        this.backwards= this.forward.bind(this);
    } 

    //Movements to both sides 
    backwards() {
        let getCurrSlide = this.state.currSlide;        
        if(getCurrSlide > 0) {
            this.setState({
                currSlide: getCurrSlide - 1
            })
        }
        else {
            this.setState({
                currSlide: getCurrSlide -1 //In order to go to the last slide after having gone all the way down
            })
        } 
    }

    forward() {
        let getCurrSlide = this.state.currSlide;
        if(getCurrSlide< this.props.images.length -1) {
            this.setState({
                currSlide: getCurrSlide + 1
            })
        }
        else {
            this.setState({
                currSlide: 0 //In order to go backwards if it has reached the end
            })
        } 
    }
 // Movement ends 

    render() {
        let imgArray = this.props.images;
        let currSlide = this.state.currSlide;
        var getThis = this;
       let fetchImages = imgArray.map((item, slideNumber) => {
            return(
                <CarouselSlideItem getSize = {getThis.props.size} image ={item} show= {getThis.state.currSlide === slideNumber} />
            );
        }); 

        return(
            <div className={styles.slideShow}>
                <a className={styles.next} onClick={this.backwards}>previous image</a>
                <div className={styles.slider}>
                     {fetchImages}
                 </div>
                <a className={styles.next} onClick={this.forward}>next image</a>
            </div>
        );
    }
};


Carousel.propTypes = {
    size: Proptypes.oneOf([ 'small', 'medium', 'large' ]),
    images: Proptypes.array.isRequired
};



export default Carousel;