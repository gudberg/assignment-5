import React, { Component } from 'react';
import './App.css';
import NameCard from './components/NameCard/NameCard';
import Carousel from './components/Carousel/Carousel';
import Modal from './components/Modal/Modal';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }
    
  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="container">
        
        <button onClick={() => this.setState({ isModalOpen: true})}>Open Modal!</button>
        <Modal 
          isOpen={isModalOpen}
          onClose={() => this.setState({ isModalOpen:false })}>
          <Modal.Title>is title</Modal.Title>
          <Modal.Body>is Body</Modal.Body>
          <Modal.Footer>is Footer</Modal.Footer>
        </Modal>

        <NameCard 
          name="Nafn"
          email="Email"
          telephone="Simi"
          imageUrl="https://www.wikihow.com/images/6/61/Draw-a-Cartoon-Man-Step-15.jpg"
        />
      
        <Carousel 
          images={[
            'http://www.visir.is/i/622E8CBFB96B099C70174D1235590FF956447390CFBC30D2FFED237508B7E9E4_713x0.jpg',
            'http://www.visir.is/i/92928A068E9F92A390DF808A575136185E131045ECBEDAEC582EFC04D8D6899D_713x0.jpg',
            'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/17855110_10212686792633955_9078787707100677461_o.jpg?oh=d1fb663a2479044bf07bdb7b2acfc614&oe=5B433475',
            'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/20294477_10213868745609799_2697690918225896195_n.jpg?oh=5927473e14feb07ca8c6eae45b4d1693&oe=5B3A9E21'
          ]}
          size="medium" />
       </div>
      
    );
  }
}

export default App;
