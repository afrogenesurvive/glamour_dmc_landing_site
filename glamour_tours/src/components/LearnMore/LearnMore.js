import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './LearnMore.css';

const learnMore = (props) =>{

  return (
    <Row className="HeaderRow">

      <Col lg={9} className="MainCol">
        learnMore
        <Button variant="danger" size="sm" onClick={props.onCloseLearnMore}>
          X
        </Button>
      </Col>

    </Row>
  )
}

export default learnMore;
