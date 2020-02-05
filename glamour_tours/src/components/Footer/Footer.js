import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './Footer.css';

const footer = (props) =>{

  return (
    <Col className="FooterMasterCol">
      <Row className="FooterRow1">
        <Col md="2" className="FooterCol">
          <p className="FooterBrand">Brand</p>
        </Col>

        <Col md="10" className="FooterCol">
        </Col>

      </Row>

      <Row className="FooterRow2">
        <Col md="10" className="FooterCol">
        </Col>

        <Col md="2" className="FooterCol">
          <ul className="FooterList1">
            <li>
            <p className="footerItemText">Home</p>
            </li>
            <li>
            <p className="footerItemText">Company</p>
            </li>
            <li>
            <p className="footerItemText">Services</p>
            </li>
            <li>
            <p className="footerItemText">Destinations</p>
            </li>
            <li>
            <p className="footerItemText">News</p>
            </li>
            <li>
            <p className="footerItemText">Gallery</p>
            </li>
            <li>
            <p className="footerItemText">Contact</p>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="FooterRow3">
        <p className="copyrightText">Copyright info black hack 2020</p>
      </Row>
    </Col>
  )
}

export default footer;
