import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './JumbotronComponent.css';

function JumbotronComponent() {
  return (
    <div className="JumbotronComponent-heading">
        <Jumbotron fluid className="JumbotronComponent">
          <Container>
            <h1 className="test-white">Sandeep Sunny</h1>
            <p className="text-white">
              This is my portfolio v1
            </p>
          </Container>
        </Jumbotron>
    </div>
  );
}

export default JumbotronComponent;