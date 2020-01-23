import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './Company.css';

const company = (props) =>{

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="CompanyMainRow">
        <Col sm={3} className="CompanyMenuCol">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className="contentMenuItem" eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="contentMenuItem" eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className="CompanyContentCol">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              Company 1
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              Company 2
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default company;
