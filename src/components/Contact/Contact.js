import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import "./Contact.css"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }
  onSubjectChange(event) {
    this.setState({ subject: event.target.value })
  }
  onMsgChange(event) {
    this.setState({ message: event.target.value })
  }

  submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
      }
    })
}
resetForm(){
    this.setState({name: '', email: '',subject:'', message: ''})
}

render () {
  return(
    <div className = "container" >
      <Form className="contactForm">
        <h1>Please complete this form to send a message to my e-mail.</h1>
        <FormGroup>
          <Label for="contactName">Name</Label>
          <Input type="textarea" name="name" id="contactName" placeholder="name" 
          required value={this.state.name} onChange={this.onNameChange.bind(this)}/>
        </FormGroup>
        <FormGroup>
          <Label for="contactEmail">Email</Label>
          <Input type="email" name="email" id="contactEmail" placeholder="email"  
          required value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
        </FormGroup>
        <FormGroup>
          <Label for="contactSubject">Subject</Label>
          <Input type="textarea" name="subject" id="contactSubject" placeholder="subject"
           required value={this.state.subject} onChange={this.onSubjectChange.bind(this)}/>
        </FormGroup>
        <FormGroup>
          <Label for="contactMessage">Message Area</Label>
          <Input type="textarea" name="message" id="contactMessage" 
           required value={this.state.message} onChange={this.onMsgChange.bind(this)}/>
        </FormGroup>
        <Button color="success" onSubmit={this.submitEmail.bind(this)} method="POST">Submit</Button>
      </Form>
    </div>
  )
  }
}

export default Contact;

