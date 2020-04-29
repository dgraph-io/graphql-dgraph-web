import React  from 'react';
import {Accordion, Card} from "react-bootstrap" 

export default (props) => {
   return (
    <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Section 1
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
   <Card.Body>{props.children}</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="1">
        Section 2
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body>Section 2</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
   ) 
}