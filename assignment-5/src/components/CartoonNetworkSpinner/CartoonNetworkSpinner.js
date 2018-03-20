import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartoonNetworkSpinner.css';

class CartoonNetworkSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,   
            images: [
                'https://i.pinimg.com/originals/37/85/a2/3785a25aed66087ea2b9bda233344242.jpg',
                'http://images.fanpop.com/images/image_uploads/Billy---Mandy-cartoon-network-647538_300_291.jpg',
                'http://tbsila.cdn.turner.com/toonla/images/cnemea/content/390/downloadable/bedroom/uk/theyard-600x400.jpg',
                'http://moziru.com/images/cartoon-network-clipart-mandy-12.jpg',
                'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_boop79w5/version/100022/width/600/height/400'
            ]
        };
    }

    keepTheLoopGoing() {
        const { timer, images } = this.state;    
        if(timer < images.length - 1) {
            this.setState({
                timer: timer + 1
            })            
        }
        else {
            this.setState({
                timer: 0 //In order to go backwards if it has reached the end
            })
        }   
    }
        
     componentDidMount() {
         this.interval = setInterval(this.keepTheLoopGoing.bind(this), this.props.interval * 1000);
     }
     
    render() {
        const { images, timer } = this.state
        return(
            <div className={styles.onImages}>
            <img className={styles.changingImages} alt="Something went wrong!" src={images[timer]} />
          </div>
    
        );
    }

};

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number
}

CartoonNetworkSpinner.defaultProps = {
    interval: 3
}




export default CartoonNetworkSpinner;