import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "../common/SocialLinks";
import siteConfig from "../../config/siteConfig";

function Home2() {
  const { intro, social } = siteConfig;

  return (
    <Container fluid className="home-about-section" id="about-preview">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="home-about-description">
            <p className="section-eyebrow">About</p>
            <h1 className="section-heading">
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <div className="home-about-body">
              {intro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2 className="social-heading">{intro.socialHeading}</h2>
            <p>{intro.socialSubtext}</p>
            <SocialLinks links={social} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
