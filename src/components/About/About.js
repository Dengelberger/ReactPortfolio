import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "./About.css"

function About() {
  return (
    <Container className="main" style={{align: "center", width: "100%", height: "90%"}}>
      <Row style={{align: "center", width: "100%", height: "30%", marginLeft: "10px"}}>
      <Col xs="3">
      <img src="https://res.cloudinary.com/dofb2p06j/image/upload/v1604608955/MyBioPic_jaawj8.jpg" class="img-rounded" alt="My Photo" width="260" height="280"> 
      </img>
      </Col>
        <Col xs="auto"></Col>
        <Col xs="8">
        <h1 id="blurbTitle">About me:</h1>
         <br></br>   
          <p>
        I am a Full Stack Web Developer and a student in the University of Pennsylvania's LPS Coding Boot Camp Full Stack Flex Program. I bring with me a background in accounting and finance as well as 21 years of teaching mathematics. I seek to leverage my experience paired with new skills in full stack web development to create successful client-centric solutions.
      </p>
      </Col>
      </Row>
      <Table borderless>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td><img src="https://catalin.red/dist/uploads/2011/01/css3-html5-logo-initial.png" alt="HTML5 Logo" width="120" height="120"></img></td>
          <td><img src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-1.png" alt="CSS3 Logo" width="120" height="120"></img></td>
          <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/2000px-Javascript_badge.svg.png" alt="JavaScript Logo" width="120" height="120"></img></td>
          <td><img src="http://www.simpalm.com/wp-content/uploads/2017/08/nodejs-logo-1.png" alt="Node.js Logo" width="120" height="120"></img></td>
        </tr>
        <tr>
        <th scope="row"></th>
          <td><img src=" https://tse2.mm.bing.net/th?id=OIP.OGTfZcWspZaixDpzsB3tiQHaHU" alt="Express.js Logo" width="120" height="120"></img></td>
          <td><img src=" https://www.fyresite.com/wp-content/uploads/2019/11/1_XcE0wR1ZmWLFbdF2dE5WuA.png" alt="Sequelize Logo" width="120" height="120"></img></td>
          <td><img src="http://pngimg.com/uploads/github/github_PNG20.png" alt="GitHub Logo" width="120" height="120"></img></td>
          <td><img src="https://tse3.mm.bing.net/th?id=OIP.ksAWEcdOyQC1uVtPg10lIgAAAA" alt="Heroku Logo" width="120" height="120"></img></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td><img src="https://tse3.mm.bing.net/th?id=OIP.NudVvrRpz5DTK_861m0jeQHaHa" alt="MongoDB Logo" width="120" height="120"></img></td>
          <td><img src=" https://tse3.mm.bing.net/th?id=OIP.CijovGjf5XmCq05OMU1PGgHaFZ"alt="MySQL Logo" width="120" height="120"></img></td>
          <td><img src="http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png" alt="Bootstrap Logo" width="120" height="120"></img></td>
          <td><img src=" https://tse2.mm.bing.net/th?id=OIP.trb0oECMBCSr1kRPIYqj7AAAAA" alt="Trello Logo" width="120" height="120"></img></td>
        </tr>
      </tbody>
    </Table>
    </Container>
  )

}

export default About;