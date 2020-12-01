import React, { Component } from "react";
import contact from "../../contacts.json";
import ContactCard from "../ContactCard";
import "./Contact.css";
import { Row } from "reactstrap";

class Contact extends Component {
  state = {
    contact: contact,  
  };

  render() {
    return (
        <div className="container">
      <h1>Find me at these locations:</h1>
      <Row className="places">
      {this.state.contact.map(contact => <ContactCard
        key={contact.id}
        id={contact.id}
        image={contact.image}
        alt={contact.alt}
        name={contact.name}
        url={contact.url}/>)}
      </Row>
      <br></br>
      <Row></Row>
      </div>
    )
      };
    };
    
    export default Contact;