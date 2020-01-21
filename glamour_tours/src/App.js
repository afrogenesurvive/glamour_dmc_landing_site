import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MainNavigation from './components/MainNavigation/MainNavigation';
import Company from './components/Company/Company';
import Services from './components/Services/Services';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Forms/ContactForm';

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
    footer: true,
    contactForm: false,
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


  openContactForm = () => {
    console.log(`
        opening contact form...
      `);
      this.setState({ contentOn: true, contactForm: true, hero: false })
  }

  closeContactForm = () => {
    console.log(`
        closing contact form...
      `);
      this.setState({ contentOn: false, contactForm: false })
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
              <Hero
                onOpenContactForm={this.openContactForm}
              />
            )}

            <Row className="MainRow">


              {this.state.contentOn === true && (
                <Col className="MainCol MainColContent">
                  {this.state.contactForm === true && (
                    <ContactForm
                      onCloseContactForm={this.closeContactForm}
                    />
                  )}
                  {this.state.contentItem === "company" && (
                    <Company />
                  )}

                  {this.state.contentItem === "services" && (
                    <Services />
                  )}
                </Col>
              )}

            </Row>

            {this.state.footer === true && (
              <Row className="MainFooterRow">
                <Footer />
              </Row>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
