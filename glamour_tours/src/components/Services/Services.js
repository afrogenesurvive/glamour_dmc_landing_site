import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './Services.css';

const services = (props) =>{

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row className="ServicesMainRow">
      <Col md={3} className="ServicesMenuCol Col1">
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link className="servicesContentMenuItem" eventKey="first">
            Tab 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="servicesContentMenuItem" eventKey="second">
            Tab 2
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>

      <Col md={9} className="ServicesContentCol Col2">
      <div className="ServicesContentDiv">
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <h1 className="servicesContentHeading">Services 1</h1>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <h1 className="servicesContentHeading">Services 2</h1>
          </Tab.Pane>
        </Tab.Content>
      </div>
      </Col>
    </Row>
    </Tab.Container>
  )
}

export default services;
