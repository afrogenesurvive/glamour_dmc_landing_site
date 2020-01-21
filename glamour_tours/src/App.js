import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MainNavigation from './components/MainNavigation/MainNavigation';
import Company from './components/Company/Company';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    test: "test state",
    contentOn: false,
    subMenuOn: false,
    mainMenuItem: null,
    subMenuItem: null,
    contentItem: null,
    hero: true,
    loading: false,
  };

  constructor(props) {
    super(props);
    this.test = "test prop"
  }

  componentDidMount() {
    console.log("It's Aliiive!!!");
  }

  mainMenuSelect = (args) => {
    console.log(`
      NavBar Item Selected..
      ${JSON.stringify(args)}
      `);

      this.setState({
        subMenuOn: true,
        contentOn: true,
        subMenuItem: args,
        contentItem: args,
        hero: false })
  }

  returnHome = () => {
    console.log(`
      returning home...
      `);

      this.setState({
        subMenuOn: false,
        contentOn: false,
        hero: true
      })
  }

  render() {
    return (
      <div className="App">
        <div className="MainBgLayer">
        <MainNavigation
          onMainMenuSelect={this.mainMenuSelect}
          onReturnHome={this.returnHome}
        />
          <div className="MainDiv">
            {this.state.hero === true && (
            <Row className="HeaderRow">
              <Col lg={9} className="MainCol">
                Hero Image
              </Col>
              <Col lg={3} className="MainCol">
                Hero Text
              </Col>
            </Row>
            )}

            <Row className="MainRow">


              {this.state.contentOn === true && (
                <Col className="MainCol MainColContent">
                  {this.state.contentItem === "company" && (
                    <Company />
                  )}
                  {this.state.contentItem === "services" && (
                    <p>Services Content</p>
                  )}
                </Col>
              )}

            </Row>

            <Row className="MainFooterRow">
              <Col className="MainCol FooterCol">Footer</Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
