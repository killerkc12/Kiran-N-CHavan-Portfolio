import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import { VscCode } from "react-icons/vsc";

function ProjectCards(props) {
  
  const tech1 = props.tech1
  const tech2 = props.tech2
  const tech3 = props.tech3
  const tech4 = props.tech4
  const tech5 = props.tech5

  return (
    <Card className="project-card-view">
      {
        props.imgPath ?
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        : ""
      }
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {
            tech1 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech1 
                }
              </Col>
                ) : ""
          }
          {
            tech2 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech2 
                }
              </Col>
                ) : ""
          }
          {
            tech3 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech3 
                }
              </Col>
                ) : ""
          }
          {
            tech4 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech4 
                }
              </Col>
                ) : ""
          }
          {
            tech5 ? (
              <Col xs={4} md={2} className="tech-project-icons">
                {
                    props.tech5
                }
              </Col>
                ) : ""
          }
        </Row>
        <Row style={{marginBottom:"50px"}}>
          <Col>
            <Button variant="primary" href={props.link} target="_blank">
              <BiLinkExternal /> &nbsp;
              {<VscCode/>}
            </Button>
          </Col>
          <Col>
            {
              props.isHosted ?
              (
                <Button variant="primary" href={props.isHosted} target="_blank">
                  <BiLinkExternal /> &nbsp;
                  {/* {"hosted Link"} */}
                </Button>
              ) : ""
            }
          </Col>
        </Row>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

