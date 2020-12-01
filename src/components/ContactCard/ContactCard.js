import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <Card className="col-sm-3" style={{ marginTop: "10px", marginBottom: "10px", paddingLeft: "10px"}}>
      <CardImg top src={props.image} alt={props.alt} width="200" height="240" />
      <CardBody>
        <br></br>
          <Button id="url" color="primary" style={{ align: "center"}} onClick={() => window.open(props.url, '_blank')}>Let's Go!
          </Button>
      </CardBody>
    </Card>
  );
};

export default ContactCard;