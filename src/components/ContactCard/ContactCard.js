import React from "react";
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <Card className="col-md-3" style={{ marginTop: "10px", marginBottom: "10px", paddingLeft: "10px"}}>
      <CardImg top src={props.image} alt={props.alt} width="200" height="240" />
      <CardBody align="center">
        <br></br>
          <Button id="url" color="primary" align="center" onClick={() => window.open(props.url, '_blank')}>{props.name}
          </Button>
      </CardBody>
    </Card>
  );
};

export default ContactCard;