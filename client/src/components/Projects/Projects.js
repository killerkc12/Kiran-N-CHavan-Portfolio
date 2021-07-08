import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiCss3, DiHtml5, DiJava, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiBootstrap, SiMongodb, SiMysql, SiPhp, SiPostgresql } from "react-icons/si";
import { Icon } from '@iconify/react';
import hibernateIcon from '@iconify-icons/simple-icons/hibernate';
import expressIcon from '@iconify-icons/simple-icons/express';

function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath= {false}
              isHosted={false}
              title="Online Admission System"
              tech1 = {<SiPhp/>}
              tech2 = {<SiMysql/>}
              tech3 = {<DiHtml5/>}
              tech4 = {<DiCss3/>}
              tech5 = {<SiBootstrap/>}
              description="Admin will manage all industry courses and users.
              ▪ User can apply for more than one courses and manage their details"
              link="https://github.com/killerkc12/Online-Admission-System-PHP-MYSQL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={false}
              isHosted={false}
              title="To-Do App"
              tech1 = {<DiJava/>}
              tech2 = {<Icon icon={hibernateIcon} />}
              tech3 = {<SiPostgresql/>}
              tech4 = {<DiHtml5/>}
              tech5 = {<DiCss3/>}
              description="The user could manage him to do things."
              link="https://github.com/killerkc12/ToDoApp-JAVA-Servlet-Hibernate-Webapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={false}
              isHosted="https://insta-clone-mern-app.herokuapp.com"
              title="Instagram Clone Web App"
              tech1 = {<DiReact/>}
              tech2 = {<DiNodejsSmall/>}
              tech3 = {<Icon icon={expressIcon} />}
              tech4 = {<SiMongodb/>}
              description="Simple Instagram Clone where users register, log in manage their profile and make the posts."
              link="https://github.com/killerkc12/insta-clone-MERN"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
