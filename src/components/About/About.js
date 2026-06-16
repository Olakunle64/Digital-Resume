import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Skills from "./Skills";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import siteConfig from "../../config/siteConfig";
import { getAboutImage, getInitials } from "../../utils/images";

function About() {
  const { personal, skills, tools, features } = siteConfig;
  const aboutImageSrc = getAboutImage(siteConfig);
  const initials = getInitials(siteConfig);

  return (
    <Container fluid className="about-section">
      {features.particles && <Particle />}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="section-eyebrow">Profile</p>
            <h1 className="section-heading">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <div className="about-image-frame">
              {aboutImageSrc ? (
                <img
                  src={aboutImageSrc}
                  alt={`About ${personal.shortName}`}
                  className="img-fluid about-profile-photo"
                />
              ) : (
                <div className="about-photo-placeholder">
                  <span className="about-photo-initials">{initials}</span>
                  <p className="about-photo-pending">Photo coming soon</p>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {skills.enabled && (
          <>
            <p className="section-eyebrow text-center">Expertise</p>
            <h1 className="project-heading text-center">
              {skills.title.split(" ").length > 1 ? (
                <>
                  {skills.title.replace(/Skillset|Skills?$/i, "").trim()}{" "}
                  <strong className="purple">
                    {skills.title.match(/Skillset|Skills?$/i)?.[0] || "Skills"}
                  </strong>
                </>
              ) : (
                <strong className="purple">{skills.title}</strong>
              )}
            </h1>
            <Skills />
          </>
        )}

        {tools.enabled && (
          <>
            <p className="section-eyebrow text-center">Toolkit</p>
            <h1 className="project-heading text-center">
              <strong className="purple">{tools.title}</strong>
            </h1>
            <Toolstack />
          </>
        )}

        <Github />
      </Container>
    </Container>
  );
}

export default About;
