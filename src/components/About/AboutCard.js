import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import siteConfig from "../../config/siteConfig";

function AboutCard() {
  const { personal, about } = siteConfig;

  return (
    <Card className="quote-card-view glass-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {about.summary}
          </p>
          {about.hobbies.length > 0 && (
            <>
              <p className="hobbies-intro">{about.hobbiesHeading}</p>
              <ul>
                {about.hobbies.map((hobby) => (
                  <li className="about-activity" key={hobby}>
                    <ImPointRight /> {hobby}
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="quote-text">"{about.quote}"</p>
          <footer className="blockquote-footer">{about.quoteAuthor || personal.nickname}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
