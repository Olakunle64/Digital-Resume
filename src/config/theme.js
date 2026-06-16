import siteConfig from "./siteConfig";

export function applyTheme() {
  const { theme } = siteConfig;
  const root = document.documentElement;

  root.style.setProperty("--imp-text-color", theme.primary);
  root.style.setProperty("--primary-light", theme.primaryLight);
  root.style.setProperty("--primary-dark", theme.primaryDark);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--bg-start", theme.backgroundStart);
  root.style.setProperty("--bg-end", theme.backgroundEnd);
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--surface-border", theme.surfaceBorder);
  root.style.setProperty("--text-muted", theme.textMuted);
  root.style.setProperty("--particle-color", theme.particleColor);
  root.style.setProperty("--gradient-text", theme.gradientText);
  root.style.setProperty(
    "--section-background-color",
    `linear-gradient(160deg, ${theme.backgroundStart}ee 0%, ${theme.backgroundEnd}f5 100%)`
  );
  root.style.setProperty(
    "--image-gradient",
    `linear-gradient(160deg, ${theme.backgroundStart}cc 0%, ${theme.backgroundEnd}e8 100%)`
  );
  root.style.setProperty("--scrollbar-track", theme.backgroundEnd);
  root.style.setProperty("--scrollbar-thumb", `${theme.primary}cc`);
  root.style.setProperty("--scrollbar-thumb-hover", theme.primaryLight);
  root.style.setProperty("--navbar-glow", `${theme.primaryDark}2e`);
  root.style.setProperty("--card-shadow", `${theme.primaryDark}75`);
  root.style.setProperty("--card-shadow-hover", `${theme.primary}90`);
  root.style.setProperty("--btn-primary-bg", theme.primaryDark);
  root.style.setProperty("--btn-primary-hover", theme.primary);
  root.style.setProperty("--timeline-border", theme.primary);
  root.style.setProperty("--social-icon-bg", theme.primaryDark);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", theme.backgroundStart);
  }
}
