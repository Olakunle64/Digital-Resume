import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import siteConfig from "../../config/siteConfig";
import { getHeroIllustration } from "../../utils/images";

function Home() {
  const navigate = useNavigate();
  const { personal, heroCtas, features } = siteConfig;
  const heroIllustration = getHeroIllustration(siteConfig);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {features.particles && <Particle />}
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={heroIllustration ? 7 : 10} className="home-header mx-auto">
              <p className="hero-eyebrow">Welcome to my digital resume</p>
              <h1 className="heading">
                {personal.greeting}{" "}
                <span className="wave" role="img" aria-label="wave">
                  {personal.wave}
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name gradient-text">{personal.name}</strong>
              </h1>

              <p className="hero-title">{personal.title}</p>

              <div className="typewriter-wrapper">
                <Type />
              </div>

              <div className="hero-cta-group">
                {heroCtas.map((cta) => (
                  <button
                    key={cta.label}
                    type="button"
                    onClick={() => navigate(cta.to)}
                    className={`btn ${
                      cta.variant === "outline" ? "hero-cta-outline" : "hero-cta-primary"
                    }`}
                  >
                    {cta.label}
                  </button>
                ))}
              </div>
            </Col>

            {heroIllustration && (
              <Col lg={5} className="hero-image-col">
                <div className="hero-image-glow">
                  <img
                    src={heroIllustration}
                    alt=""
                    className="img-fluid hero-image"
                    aria-hidden="true"
                  />
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
