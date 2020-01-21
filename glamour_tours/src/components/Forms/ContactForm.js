import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

import './Forms.css';

const contactForm = (props) =>{

  return (
    <Row className="ContactFormRow">
      <Col className="CompanyMenuCol">
        <p>Conact Form</p>
        <Button variant="danger" size="sm" onClick={props.onCloseContactForm}>
          X
        </Button>
      </Col>
    </Row>
  )
}

export default contactForm;
