import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './JumbotronComponent.css';
import Zoom from 'react-reveal/Zoom';

class JumbotronComponent extends Component {

  constructor() {
    super();
    this.state = {data: 'JumbotronComponent-heading1', hover: 'false'};
    this.toggleColor = this.toggleColor.bind(this);
    this.stopToggle = this.stopToggle.bind(this);
    this.sleep = this.sleep.bind(this);
  }

  // sleep time expects milliseconds
  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


  toggleColor() {
    this.setState({data: 'JumbotronComponent-heading2', hover: 'true'}, () => {
      console.log("setState completed", this.state.hover);
      // Usage!
      this.sleep(200).then(() => {
        // Do something after the sleep!
        this.setState({data: 'JumbotronComponent-heading1', hover: 'false'});
      });
    });
  }

  stopToggle() {
    console.log('blocking');
    this.setState({data: 'JumbotronComponent-heading1', hover: 'false'})
  }

  render() {
    return (
      <div className="JumbotronComponent-heading1">
          <Jumbotron fluid className="JumbotronComponent">
            <Container>
              <Zoom>
                <h1 className={this.state.data} onMouseEnter={this.toggleColor} onMouseLeave={this.stopToggle}>Sandeep Sunny</h1>
              </Zoom>
              <p className="JumbotronComponent-heading1">
                Computer Man
              </p>
            </Container>
          </Jumbotron>
      </div>
    );
  }
}


export default JumbotronComponent;