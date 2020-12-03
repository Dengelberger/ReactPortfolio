import React from "react";
import { Card, CardImg, CardTitle } from 'reactstrap';
import "./WebToolCard.css";

const WebToolCard = (props) => {
  return (
    <Card className="col-md-3" style={{ marginTop: "10px", marginBottom: "10px", paddingLeft: "10px", paddingTop: "20px"}}>
      <CardImg top src={props.image} alt={props.alt} width="180" height="200" />
    </Card>
  );
};

export default WebToolCard;