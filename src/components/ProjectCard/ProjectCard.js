import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
      <Card className="col-sm-4" style={{marginTop: "10px", marginBottom: "10px"}}>
        <CardImg top src={props.image} alt={props.alt} width="200" height="200"/>
        <CardBody>
          <CardTitle tag="h2">{props.name}</CardTitle>
          <br></br>
          <CardSubtitle tag="h4" className="mb-2">Project Type: {props.type}</CardSubtitle>
          <br></br>
          <CardSubtitle tag="h4" className="mb-2">Technology: {props.tech}</CardSubtitle>
          <br></br>
          <CardText>{props.description}</CardText>
          <br></br>
          <Button id="url" color="primary" onClick = {() => window.open(props.url,'_blank')}>Launch</Button>                  <Button id="github" color="success" onClick = {() => window.open(props.github,'_blank')}>GitHub Repo</Button>
        </CardBody>
      </Card>
  );
};

export default ProjectCard;