import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './AccordionComponent.css';

function AccordionComponent() {
  return (
    <div className="AccordionComponent">
      <Accordion defaultActiveKey="0">
        <Card className="AccordionComponent" text="white">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="dark" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="AccordionComponent" text="white">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="dark" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;