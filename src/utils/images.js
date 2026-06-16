/**
 * Hero never uses the client's headshot — only career illustrations or nothing.
 * About page uses the client's photo when available; null if pending.
 */
export function getHeroIllustration(config) {
  const { personal, images } = config;

  if (images?.heroDisplay === "none") {
    return null;
  }

  if (images?.heroDisplay === "illustration") {
    return images.heroIllustration || personal.heroImage || null;
  }

  return null;
}

export function getAboutImage(config) {
  const { personal, images } = config;

  if (!personal.avatar) {
    return null;
  }

  if (images?.aboutDisplay === "illustration" && images.aboutIllustration) {
    return images.aboutIllustration;
  }

  if (images?.aboutDisplay === "illustration" && personal.aboutImage) {
    return personal.aboutImage;
  }

  return personal.avatar;
}

export function getInitials(config) {
  const parts = config.personal.shortName.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return config.personal.shortName.slice(0, 2).toUpperCase();
}
