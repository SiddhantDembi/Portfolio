import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhant Dembi </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            Currently pursuing my Bachelors in Engineering in Information Technology from Thadomal Shahani Engineering College.
            <br />
            Final year student at the University of Mumbai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Health and Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
