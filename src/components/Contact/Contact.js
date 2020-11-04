import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Contact.css"

function Contact() {
  return (
    <div className="container">
    <Form className="contactForm">
      <h1>Please complete this form to send a message to my e-mail.</h1>
      <FormGroup>
        <Label for="contactEmail">Email</Label>
        <Input type="email" name="email" id="contactEmail" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="contactPassword">Password</Label>
        <Input type="password" name="password" id="contactPassword" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Label for="contactText">Text Area</Label>
        <Input type="textarea" name="text" id="contactText" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  )

}

export default Contact;

