import React from "react";
import { Container, Row, Col } from "reactstrap";
import WebTools from "./../WebTools"
import "./About.css"

function About() {
  return (
    <Container fluid className="main" style={{ align: "center", width: "100%", height: "90%", borderRadius: "24px" }}>
      <Row style={{ align: "center", width: "100%", height: "30%", marginLeft: "10px" }}>
        <Col sm="3">
          <img src="https://res.cloudinary.com/dofb2p06j/image/upload/v1605283033/Donna_Engelberger_rahhli.jpg" className="img-rounded" alt="Donna Engelberger" width="260" height="280">
          </img>
        </Col>
        <Col sm="auto"></Col>
        <Col sm="8">
          <h1 id="blurbTitle">About me:</h1>
          <br></br>
          <p>
            I am a Full Stack Web Developer and a recent graduate of the University of Pennsylvania's LPS Coding Boot Camp Full Stack Flex Program. I seek to leverage my new web development skills paired with my rich background as a mathematics educator and a financial analyst  to create successful client-centric solutions.
      </p>
        </Col>
      </Row>
      <br></br>
      <Row>
        <WebTools />
        </Row>
    </Container>
  )

}

export default About;