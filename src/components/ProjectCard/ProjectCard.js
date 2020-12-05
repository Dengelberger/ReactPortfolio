import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
      <Card className="col-md-4" style={{marginTop: "10px", marginBottom: "10px", borderRadius: "25px"}}>
        <CardImg top src={props.image} alt={props.alt} width="200" height="200"/>
        <CardBody>
          <CardTitle tag="h3">{props.name}</CardTitle>
          <br></br>
          <CardSubtitle tag="h4" className="mb-2">Project Type: {props.type}</CardSubtitle>
          <br></br>
          <CardSubtitle tag="h4" className="mb-2">Technology: {props.tech}</CardSubtitle>
          <br></br>
          <CardText>{props.description}</CardText>
          <br></br>
          <CardText align="center">
          <Button id="url" color="primary" onClick = {() => window.open(props.url,'_blank')}>Launch</Button>                  <Button id="github" color="success" onClick = {() => window.open(props.github,'_blank')}>GitHub Repo</Button>
          </CardText>
        </CardBody>
      </Card>
  );
};

export default ProjectCard;