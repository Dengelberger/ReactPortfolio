import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <Card className="col-sm-2" style={{ marginTop: "10px", marginBottom: "10px" }}>
      <CardImg top src={props.image} alt={props.alt} width="200" height="200" />
      <CardBody>
        <CardTitle tag="h2">{props.name}</CardTitle>
        <br></br>
        <Button id="url" color="primary" onClick={() => window.open(props.url, '_blank')}>Let's Go!
          </Button>                  
        </CardBody>
      </Card>
  );
};

export default ContactCard;