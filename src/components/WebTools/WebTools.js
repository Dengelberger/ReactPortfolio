import React, { Component } from "react";
import webtool from "../../webtools.json";
import WebToolCard from "../WebToolCard";
import "./WebTools.css";
import { Row } from "reactstrap";

class WebTools extends Component {
  state = {
    webtool: webtool,  
  };

  render() {
    return (
        <div className="container">
      <h1>Web Development Tool Proficiencies:</h1>
      <Row className="places">
      {this.state.webtool.map(webtool => <WebToolCard
        key={webtool.id}
        id={webtool.id}
        image={webtool.image}
        alt={webtool.alt}
        name={webtool.name}/>)}
      </Row>
      <br></br>
      <Row></Row>
      </div>
    )
      };
    };
    
    export default WebTools;