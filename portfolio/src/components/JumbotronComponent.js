import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './JumbotronComponent.css';
import Zoom from 'react-reveal/Zoom';

class JumbotronComponent extends Component {

  constructor() {
    super();
    this.state = {data: 'Sunny Sandeep'};
    console.log('Contructor is invoked');
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground() {
      if(this.state.data === 'Fuck you!') {
        this.setState({data: 'Sandeep Sunny'});
      } else {
        this.setState({data: 'Fuck you!'});
      }
      console.log("Fuck you!");
  }

  render() {
    return (
      <div className="JumbotronComponent-heading">
          <Jumbotron fluid className="JumbotronComponent">
            <Container>
              <Zoom>
                <h1 className="test-white" onMouseEnter={this.changeBackground}>{this.state.data}</h1>
              </Zoom>
              <p className="text-white">
                This is my portfolio v1
              </p>
            </Container>
          </Jumbotron>
      </div>
    );
  }
}


export default JumbotronComponent;