import React from "react";
import { Button, Table } from 'reactstrap';
import "./Contact.css"

function Contact () {
  return (
    <div className = "container" >
        <Table id="contact-info" borderless>
        <tbody>
          <tr>
            <th scope="row">
              <h1>You can find me at these places:</h1>
            </th>
            </tr>
            <tr>
            <td>
              <Button color="warning" size="lg" onClick={() => window.open("https://www.linkedin.com/in/donnaengelberger/")}>LinkedIn</Button>
            </td>
            </tr>
            <tr>
            <td>
              <Button color="warning" size="lg" onClick={() => window.open("https://github.com/Dengelberger")}>GitHub</Button>
            </td>
            </tr>
            <tr>
            <td>
              <Button color="warning" size="lg" onClick={() => window.open("https://drive.google.com/file/d/131YvAQp6Kp3m_Ya3Bj3ruX-eWDFGeMDy/view?usp=sharing")}>Resume</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    )
  }
export default Contact;

