import React, { Component } from "react";
import project from "../../projects.json";
import ProjectCard from "../ProjectCard";
import "./Portfolio.css";
import { Row } from "reactstrap";

class Portfolio extends Component {
  state = {
    project: project,  
  };

  render() {
    return (
        <div className="container">
      <h1>My Projects</h1>
      <Row>
      {this.state.project.map(project => <ProjectCard
        key={project.id}
        id={project.id}
        image={project.image}
        alt={project.alt}
        name={project.name}
        url={project.url}
        github={project.github}
        tech={project.tech}
        description={project.description}
        type={project.type} />)}
      </Row>
      <br></br>
      <Row></Row>
      </div>
    )
      };
    }
    
    export default Portfolio;