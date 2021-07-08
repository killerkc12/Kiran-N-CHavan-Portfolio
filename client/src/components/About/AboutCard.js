import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kiran N Chavan </span>
            from <span className="purple"> Pune, Maharashtra, India.</span>
            <br />I am pursuing <span className="purple">MCA</span> degree at <span className="purple">Pimpri Chinchwad College of Engineering Pune</span>.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
