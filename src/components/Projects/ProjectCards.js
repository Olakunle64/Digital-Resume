import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const linkIcons = {
  github: BsGithub,
  demo: CgWebsite,
  website: CgWebsite,
  link: BsLink45Deg,
};

function ProjectCards({ title, description, image, links = [] }) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="project-card-view glass-card">
      {image ? (
        <Card.Img variant="top" src={image} alt={title} className="project-card-img" />
      ) : (
        <div className="project-card-placeholder" aria-hidden="true">
          <span>{initials}</span>
        </div>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <div className="project-card-actions">
          {links.map((link) => {
            const Icon = linkIcons[link.type] || BsLink45Deg;
            return (
              <Button
                key={`${link.type}-${link.url}`}
                variant="primary"
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
              >
                <Icon /> &nbsp;{link.label}
              </Button>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
