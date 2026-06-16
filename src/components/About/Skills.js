import React from "react";
import { Col, Row } from "react-bootstrap";
import siteConfig from "../../config/siteConfig";
import { getIcon } from "../../config/iconMap";

function Skills() {
  const { skills } = siteConfig;

  if (!skills.enabled || !skills.items.length) return null;

  if (skills.display === "pills") {
    return (
      <div className="skills-pills-container">
        {skills.items.map((item) => (
          <span className="skill-pill" key={item.name}>
            {item.name}
          </span>
        ))}
      </div>
    );
  }

  return (
    <Row className="skills-grid" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.items.map((item) => {
        const Icon = item.icon ? getIcon(item.icon) : null;

        return (
          <Col xs={4} md={2} className="tech-icons" key={item.name}>
            {Icon ? <Icon /> : <span className="skill-icon-fallback">{item.name.charAt(0)}</span>}
            <span className="skill-name">{item.name}</span>
          </Col>
        );
      })}
    </Row>
  );
}

export default Skills;
