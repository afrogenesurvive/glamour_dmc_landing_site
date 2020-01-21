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
      <Col lg={9} className="MainCol">
        Hero Text
      </Col>
      <Col lg={3} className="MainCol">
        Hero Image
      </Col>
      <Button variant="danger" size="sm" onClick={props.onOpenContactForm}>
        Contact Us
      </Button>
    </Row>
  )
}

export default hero;
