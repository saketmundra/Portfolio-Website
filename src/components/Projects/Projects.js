import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import codeschool from "../../Assets/Projects/codeschool.png";
import cointrade from "../../Assets/Projects/cointrade.png";

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
              imgPath={codeschool}
              isBlog={false}
              title="CodeTube "
              description="A Video streaming platform which provides Coding related content for amateur developers to learn programming. Developed the frontend with Redux/React Styled Components and created REST API’s for Videos, Users and JWT
              authentication."
              ghLink="https://github.com/saketmundra/CodeTube-Backend"
              demoLink="https://codetubee.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cointrade}
              isBlog={false}
              title="Coin Trade India"
              description="Web App which provides the realtime stats news of cryptocurrencies. Used with Coinranking and Bing News API to fetch realtime information regarding cryptocurrency. Implemented graphs to visualize the growth of crypto over years"
              ghLink="https://github.com/saketmundra/cryptoapp"
              demoLink="https://cointradeindia.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Edu-Board"
              description="A web application for drawing and teaching students with realtime working and editing. Students can access features like Download, Notes and live changes between users through Socket-io."
              ghLink="https://github.com/saketmundra/Edu-Board"
              demoLink=""              
            />
          </Col>c
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
