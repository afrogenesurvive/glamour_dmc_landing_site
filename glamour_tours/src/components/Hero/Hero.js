import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

import './Hero.css';

const hero = (props) =>{

  return (
    <Row className="HeaderRow">

      <Col lg={9} className="HeroCol TextCol">
        <h1 className="heroHeading">Glamour Tours</h1>
        <p className="heroText">The Mango is now ripe...</p>
      </Col>

      <Col lg={3} className="HeroCol ImageCol">
        <p className="heroText">Hero Image</p>
      </Col>


      <div className="ctaBox">
        <Button variant="primary" className="HeroButton" onClick={props.onOpenContactForm}>
          Contact Us
        </Button>

        <Button variant="primary" className="HeroButton" onClick={props.onOpenLearnMore}>
          Learn More
        </Button>
      </div>

    </Row>
  )
}

export default hero;
