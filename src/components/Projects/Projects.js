import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import siteConfig from "../../config/siteConfig";

function Projects() {
  const { portfolio, features } = siteConfig;

  if (!portfolio.enabled) return null;

  return (
    <Container fluid className="project-section">
      {features.particles && <Particle />}
      <Container>
        <p className="section-eyebrow">Portfolio</p>
        <h1 className="project-heading">
          {portfolio.title}{" "}
          <span className="purple-dot" aria-hidden="true" />
        </h1>
        <p className="section-subtitle">{portfolio.subtitle}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {portfolio.items.map((item) => (
            <Col md={6} lg={4} className="project-card" key={item.title}>
              <ProjectCard
                title={item.title}
                description={item.description}
                image={item.image}
                links={item.links}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
