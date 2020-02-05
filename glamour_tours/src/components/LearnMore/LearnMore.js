import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './LearnMore.css';

const learnMore = (props) =>{

  return (
    <Row className="LearnMoreRow">
      <Col className="CompanyMenuCol">
        <h1 className="learnMoreHeading">Learn More</h1>
        <Button variant="danger" size="sm" onClick={props.onCloseLearnMore}>
          Close
        </Button>
      </Col>
    </Row>
  )
}

export default learnMore;
