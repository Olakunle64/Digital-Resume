import React from "react";
import { Col, Row } from "react-bootstrap";
import siteConfig from "../../config/siteConfig";
import { getIcon } from "../../config/iconMap";

function Toolstack() {
  const { tools } = siteConfig;

  if (!tools.enabled || !tools.items.length) return null;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.items.map((item) => {
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

export default Toolstack;
