import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./About.css"

function About() {
  return (
    <Container className="main" style={{align: "center", width: "100%", height: "90%"}}>
      <Row style={{align: "center", width: "100%", height: "90%", marginLeft: "10px"}}>
      <Col xs="3">
      <img src=".../../assets/MyBioPic2.jpg" class="img-rounded" alt="My Photo" width="240" height="260"> 
      </img>
      </Col>
        <Col xs="auto"></Col>
        <Col xs="8">
        <h1>About me:</h1>
         <br></br>   
          <p>
        I am a Full Stack Web Developer and a student in the University of Pennsylvania's LPS Coding Boot Camp Full Stack Flex Program. I bring with me a background in accounting and finance as well as 21 years of teaching mathematics. I seek to leverage my experience paired with new skills in full stack web development to create successful client-centric solutions.
      </p>
      </Col>
      </Row>
    </Container>
  )

}

export default About;