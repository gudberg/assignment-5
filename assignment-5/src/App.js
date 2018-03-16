import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Modal from './components/Modal/Modal';
import NameCard from './components/NameCard/NameCard';
import Row from './components/Row/Row';
import Col from './components/Col/Col';
import ProgressBar from './components/ProgressBar/ProgressBar';

class App extends Component {
  render() {
    return (
      
      <div className={styles.container}>
        <Modal color="small" > Modal texti </Modal>
        <Modal color="medium" > Modal texti </Modal>
        <Modal color="large" > Modal texti </Modal>

        <NameCard 
          name="Gudberg Sumarlidason"
          email="gudberg.sumarlidason@gmail.com"
          telephone="773-8843"
          imageUrl="http://www.visir.is/i/622E8CBFB96B099C70174D1235590FF956447390CFBC30D2FFED237508B7E9E4_713x0.jpg"
          />

        <Row>
            <Col size={12}>col</Col>
            <Col size={3}>ad</Col>
            <Col size={3}>asdfa</Col>
            <Col size={3}>asdf</Col>
            <Col size={4}>asdfasd</Col>
            <Col size={2}>asdfasdf</Col>
            <Col size={6}>asdfasdf</Col>
            <Col size={6}>asdfas</Col>
            <Col size={6}>asdfadsf</Col>
        </Row>
        <ProgressBar 
            progress={75}
            state={'warning'}
            striped={true}
            animated={true}
            />
      </div>
      
    );
  }
}

export default App;
