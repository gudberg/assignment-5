import React from 'react';
import PropTypes from 'prop-types';


class CartoonNetworkSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://i.pinimg.com/originals/37/85/a2/3785a25aed66087ea2b9bda233344242.jpg',
                'http://images.fanpop.com/images/image_uploads/Billy---Mandy-cartoon-network-647538_300_291.jpg',
                'http://tbsila.cdn.turner.com/toonla/images/cnemea/content/390/downloadable/bedroom/uk/theyard-600x400.jpg',
                'http://moziru.com/images/cartoon-network-clipart-mandy-12.jpg',
                'http://moziru.com/images/cartoon-network-clipart-mandy-12.jpg',
                'https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_boop79w5/version/100022/width/600/height/400'
            ]
        };
    }

    add() {
        let index = 0;
        let loopThroughCharacters = this.state.images;
        var counter = loopThroughCharacters.length - 1;
        return function() {
            // When the last image is shown reset the counter else increment the counter.
            if(counter === loopThroughCharacters.length - 1) {
                counter = 0;
            } else {
                counter+=1;
            }
            return counter;
        }
    }

    render() {
        let loopThroughCharacters = this.state.images;
        setInterval(function() {
            

        }, interval * 1000);
        /*            <div>{loopThroughCharacters.map(function(image, imageIndex){
                return <img key={ imageIndex } src={ image } />
             }
            , this.props.interval)}</div> */
        return(
            <div></div>

        );
    }

};



export default CartoonNetworkSpinner;