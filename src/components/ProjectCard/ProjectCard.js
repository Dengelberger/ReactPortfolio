import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProjectCard = (props) => {
  return (
      <Card className="col-sm-4" style={{marginTop: "10px", marginBottom: "10px"}}>
        <CardImg top src={props.image} alt={props.alt} />
        <CardBody>
          <CardTitle tag="h2">{props.name}</CardTitle>
          <CardSubtitle tag="h4" className="mb-2">Technology: {props.tech}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button id="url" color="primary" onClick = {() => window.open(props.url,'_blank')}>Launch</Button>                  <Button id="github" color="success" onClick = {() => window.open(props.github,'_blank')}>GitHub Repo</Button>
        </CardBody>
      </Card>
  );
};

export default ProjectCard;