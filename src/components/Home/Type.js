import React from "react";
import Typewriter from "typewriter-effect";
import siteConfig from "../../config/siteConfig";

function Type() {
  const { typewriter, features } = siteConfig;

  if (!features.typewriter || !typewriter.strings.length) {
    return <p className="hero-tagline">{siteConfig.personal.tagline}</p>;
  }

  return (
    <Typewriter
      options={{
        strings: typewriter.strings,
        autoStart: typewriter.autoStart,
        loop: typewriter.loop,
        deleteSpeed: typewriter.deleteSpeed,
      }}
    />
  );
}

export default Type;
