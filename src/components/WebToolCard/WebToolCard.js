import React from "react";
import { Card, CardImg } from 'reactstrap';
import "./WebToolCard.css";

const WebToolCard = (props) => {
  return (
    <Card className="col-md-2" style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "20px", paddingLeft: "10px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "25px"}}>
      <CardImg top src={props.image} alt={props.alt} width="180" height="200" />
    </Card>
  );
};

export default WebToolCard;