import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "./common/SocialLinks";
import siteConfig from "../config/siteConfig";

function Footer() {
  const { footer, social, personal } = siteConfig;
  const year = new Date().getFullYear();
  const copyrightName = footer.copyrightName || personal.nickname || personal.shortName;

  return (
    <Container fluid className="footer">
      <Row className="align-items-center justify-content-center">
        <Col md="6" className="footer-copywright">
          <h3>
            © {year} {copyrightName}. All rights reserved.
          </h3>
        </Col>
        <Col md="6" className="footer-body">
          {footer.showSocial && social.length > 0 && (
            <SocialLinks links={social} className="footer-icons" variant="footer" />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
