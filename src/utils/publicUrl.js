/**
 * Base path for GitHub Pages project sites (from package.json "homepage").
 * Empty string on localhost — "/Resume" (or similar) in production builds.
 */
export const publicUrl = process.env.PUBLIC_URL || "";

export function assetUrl(path) {
  const base = publicUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
