import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';
import NameCard from './components/NameCard/NameCard';

class App extends Component {
  render() {
    return (
      
      <div className="container ">
        <Modal color="small" > Modal texti </Modal>
        <Modal color="medium" > Modal texti </Modal>
        <Modal color="large" > Modal texti </Modal>

        <NameCard 
          name="Gudberg Sumarlidason"
          email="gudberg.sumarlidason@gmail.com"
          telephone="773-8843"
          imageUrl="http://www.visir.is/i/622E8CBFB96B099C70174D1235590FF956447390CFBC30D2FFED237508B7E9E4_713x0.jpg"
          />
      </div>
      
    );
  }
}

export default App;
