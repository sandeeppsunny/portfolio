import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardComponent.css";

function CardComponent() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      className="CardComponent"
    >
      <Card style={{ width: "100rem" }} className="CardComponent">
        {/*
                <Card.Img variant="top" src="assets/images/avatar-placeholder.png" />
        */}
        <Card.Body className="CardComponent">
          <Card.Title className="CardComponent-title"><b>ABOUT ME</b></Card.Title>
          <Card.Text className="CardComponent-text">
          I am Sandeep. I am pursuing my Master's degree in Computer Science at <b className="CardComponent-textblue">Arizona State University</b>. 
          Prior to joining ASU, I worked at <b className="CardComponent-textblue">VMware Inc.</b> as a Software Development Engineer for about three years. 
          At VMware, I developed features for a policy based storage management solution for cloud infrastructure administrators. 
          I enjoy solving problems with code and learning about and experimenting with new technologies. 
          Currently, I am working towards building my expertise in the field of <b className="CardComponent-textpink">Distributed Software Development and Data Science</b>.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
