import React from 'react';
import Proptypes from 'prop-types';
import styles from './Carousel.css';
import CarouselSlideItem from '../CarouselSlideItem/CarouselSlideItem';
import FontAwesome from 'react-fontawesome';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currSlide: 0
        }
    }

    //Movements to both sides 
    backwards() {
        const { currSlide } = this.state;
        const { images } = this.props;
        if (currSlide > 0) {
            this.setState({
                currSlide: currSlide - 1
            })
        } else {
            this.setState({
                currSlide: images.length - 1 //In order to go to the last slide after having gone all the way down
            })
        }
    }

    forward() {
        const { currSlide } = this.state;
        const { images } = this.props;
        if ( currSlide < images.length - 1) {
            this.setState({
                currSlide: currSlide + 1
            })
        } else {
            this.setState({
                currSlide: 0 //In order to go backwards if it has reached the end
            })
        }
    }
    // Movement ends 

    render() {
        let imgArray = this.props.images;
        const { currSlide }= this.state
        const { size } = this.props;
        let fetchImages = imgArray.map((item, slideNumber) => {
            return (
                <CarouselSlideItem getSize={size} key={slideNumber} image={item} show={currSlide === slideNumber} />
            );
        });

        return (
            <div className={styles.slideShow}>
                <div className={styles.slider}>
                    {fetchImages}
                </div>
                <div className={styles.backwards} onClick={() => this.backwards()}>
                    <FontAwesome
                        aria-hidden='false'
                        name='arrow-circle-left'
                        size="3x"
                        onClick={() => this.forward()}
                    />
                </div>
                <div className={styles.next}>
                    <FontAwesome
                        aria-hidden='false'
                        name='arrow-circle-right'
                        size="3x"
                        onClick={() => this.forward()}
                    />
                </div>
            </div>
        );
    }
};


Carousel.propTypes = {
    size: Proptypes.oneOf(['small', 'medium', 'large']),
    images: Proptypes.array.isRequired
};


Carousel.defaultProps = {
    size: 'medium'
};

export default Carousel;