import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import MainNavigation from './components/MainNavigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    test: "test state"
  };

  constructor(props) {
    super(props);
    this.args = "test prop"
  }

  componentDidMount() {
    console.log("It's Aliiive!!!");
  }

  render() {
    return (
      <div className="App">
        <div className="MainBgLayer">
        <MainNavigation />
           <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <p>
               Edit <code>src/App.js</code> and save to yuh mah.
             </p>
           </header>
           <Container className="MainContainer">
            <Row className="MainRow">
              <Col className="MainCol">1 of 3</Col>
              <Col className="MainCol">2 of 3</Col>
              <Col className="MainCol">3 of 3</Col>
            </Row>
            <Row className="MainFooterRow">
              <Col className="MainCol">Footer</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
