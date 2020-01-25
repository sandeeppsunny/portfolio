import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

function JumbotronComponent() {
  return (
    <div className="JumbotronComponent">
        <Jumbotron fluid className="bg-dark">
          <Container>
            <h1 className="text-white">Sandeep Sunny</h1>
            <p className="text-white">
              This is my portfolio v1
            </p>
          </Container>
        </Jumbotron>
    </div>
  );
}

export default JumbotronComponent;