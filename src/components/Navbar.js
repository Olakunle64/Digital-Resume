import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import siteConfig from "../config/siteConfig";

const navIcons = {
  home: AiOutlineHome,
  about: AiOutlineUser,
  portfolio: AiOutlineFundProjectionScreen,
  resume: CgFileDocument,
  blog: ImBlog,
  contact: AiOutlineMail,
};

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { branding, navigation, externalLink, personal } = siteConfig;

  const nameParts = personal.shortName.trim().split(/\s+/);
  const initials =
    nameParts.length >= 2
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase()
      : personal.shortName.slice(0, 2).toUpperCase();

  function scrollHandler() {
    updateNavbar(window.scrollY >= 20);
  }

  window.addEventListener("scroll", scrollHandler);

  const navItems = navigation.map((item) => ({
    ...item,
    label: item.to === "/project" ? siteConfig.portfolio.navLabel : item.label,
  }));

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center brand-link">
          {branding.showLogo && branding.logo ? (
            <img src={branding.logo} className="img-fluid logo" alt={branding.siteName} />
          ) : (
            <span className="brand-initials" aria-hidden="true">
              {initials}
            </span>
          )}
          <span className="brand-text d-none d-md-inline">{personal.shortName.split(" ")[0]}</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item) => {
              const Icon = navIcons[item.icon] || AiOutlineHome;
              return (
                <Nav.Item key={item.to}>
                  <Nav.Link
                    as={Link}
                    to={item.to}
                    onClick={() => updateExpanded(false)}
                  >
                    <Icon style={{ marginBottom: "2px" }} /> {item.label}
                  </Nav.Link>
                </Nav.Item>
              );
            })}

            {externalLink.enabled && externalLink.url && (
              <Nav.Item>
                <Nav.Link href={externalLink.url} target="_blank" rel="noreferrer">
                  {navIcons[externalLink.icon] && (
                    <>
                      {React.createElement(navIcons[externalLink.icon], {
                        style: { marginBottom: "2px" },
                      })}{" "}
                    </>
                  )}
                  {externalLink.label}
                </Nav.Link>
              </Nav.Item>
            )}

            {personal.email && (
              <Nav.Item className="nav-cta">
                <Button
                  href={`mailto:${personal.email}`}
                  className="nav-contact-btn"
                >
                  Contact
                </Button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
