import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import siteConfig from "../../config/siteConfig";

function Github() {
  const { features, theme } = siteConfig;

  if (!features.githubCalendar || !features.githubUsername) return null;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <p className="section-eyebrow text-center">Activity</p>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Create</strong>
      </h1>
      <div className="github-calendar-wrapper">
        <GitHubCalendar
          username={features.githubUsername}
          blockSize={15}
          blockMargin={5}
          color={theme.primary}
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
