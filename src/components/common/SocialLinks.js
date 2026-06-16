import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
  AiFillFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaTiktok, FaBehance, FaDribbble } from "react-icons/fa";

const platformIcons = {
  github: AiFillGithub,
  twitter: AiOutlineTwitter,
  linkedin: FaLinkedinIn,
  instagram: AiFillInstagram,
  email: AiOutlineMail,
  facebook: AiFillFacebook,
  youtube: AiOutlineYoutube,
  tiktok: FaTiktok,
  behance: FaBehance,
  dribbble: FaDribbble,
};

function SocialLinks({ links, className = "home-about-social-links", variant = "home" }) {
  const iconClass =
    variant === "footer" ? "footer-social-icon" : "icon-colour home-social-icons";

  return (
    <ul className={className}>
      {links.map((link) => {
        const Icon = platformIcons[link.platform];
        if (!Icon) return null;

        const href =
          link.platform === "email" && !link.url.startsWith("mailto:")
            ? `mailto:${link.url}`
            : link.url;

        return (
          <li className="social-icons" key={link.platform}>
            <a
              href={href}
              target={link.platform === "email" ? "_self" : "_blank"}
              rel="noreferrer"
              className={iconClass}
              aria-label={link.platform}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
