/**
 * Digital Resume Template — Site Configuration
 * Personalized for: Ata Nabawi
 *
 * Client files (deployed via public/ — see GitHub Pages setup):
 *   public/client/avatar.jpg
 *   public/client/resume.pdf
 *
 * Deploy: update package.json "homepage" if repo name differs, then npm run deploy
 */

import agribusinessHero from "../Assets/careers/agribusiness-education.svg";
import { assetUrl } from "../utils/publicUrl";

const siteConfig = {
  theme: {
    primary: "#22c55e",
    primaryLight: "#86efac",
    primaryDark: "#15803d",
    accent: "#ca8a04",
    backgroundStart: "#0c120e",
    backgroundEnd: "#121a14",
    surface: "rgba(255, 255, 255, 0.04)",
    surfaceBorder: "rgba(34, 197, 94, 0.28)",
    textMuted: "#94a3b8",
    particleColor: "#22c55e",
    gradientText: "linear-gradient(135deg, #86efac 0%, #22c55e 50%, #ca8a04 100%)",
  },

  branding: {
    showLogo: false,
    logo: null,
    siteName: "Ata Nabawi",
    siteUrl: "https://olakunle64.github.io/Resume",
    pageTitle: "Ata Nabawi | Digital Resume",
    metaDescription:
      "MBA candidate in Food & Agribusiness Finance at UC Davis — educator, entrepreneur, and leader in sustainable agriculture, ESG finance, and community impact.",
    ogImage: "",
  },

  personal: {
    greeting: "Hi There!",
    wave: "👋🏻",
    name: "ATA NABAWI",
    shortName: "Ata Nabawi",
    nickname: "Ata",
    title: "MBA Candidate — Food & Agribusiness Finance, UC Davis",
    location: "Davis, California, USA",
    avatar: assetUrl("/client/avatar.jpg"),
    heroImage: null,
    aboutImage: null,
    email: "amnabawi@ucdavis.edu",
    phone: "(714) 305-7357",
    tagline:
      "Bridging agriculture, education, and finance to build sustainable enterprises and empower the next generation.",
  },

  typewriter: {
    strings: [
      "Agribusiness Finance Professional",
      "Agriculture Educator",
      "ESG & Sustainable Finance Strategist",
      "Entrepreneur & Founder",
      "Grant & Program Leader",
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
  },

  navigation: [
    { to: "/", label: "Home", icon: "home" },
    { to: "/about", label: "About", icon: "about" },
    { to: "/project", label: "Experience", icon: "portfolio" },
    { to: "/resume", label: "Resume", icon: "resume" },
  ],

  externalLink: {
    enabled: false,
    url: "",
    label: "Blog",
    icon: "blog",
  },

  images: {
    heroDisplay: "illustration",
    heroIllustration: agribusinessHero,
    aboutDisplay: "photo",
    gradientBackgroundOnly: true,
  },

  heroCtas: [
    { label: "View Resume", to: "/resume", variant: "primary" },
    { label: "My Experience", to: "/project", variant: "outline" },
  ],

  intro: {
    heading: "LET ME INTRODUCE MYSELF",
    paragraphs: [
      "I am a mission-driven leader at the intersection of agriculture, education, and finance — currently pursuing an MBA in Food & Agribusiness Finance at UC Davis.",
      "Over 15+ years, I have founded and scaled impact-driven organizations, taught in public and charter schools, and secured millions in grant funding for agricultural and educational programs.",
      "From building a closed-loop farm system at Coachella Valley High School to founding Prism Organic Juicery and Simply Bee Farms, I bring hands-on operational experience paired with financial modeling, strategic partnerships, and ESG-minded thinking.",
      "I believe education and sustainable enterprise are among the greatest change agents — and I am committed to helping people, communities, and businesses grow with purpose.",
    ],
    socialHeading: "FIND ME ON",
    socialSubtext: "Feel free to connect — I'd love to hear from you.",
  },

  about: {
    heading: "Know Who I'M",
    summary:
      "Hi Everyone, I am Ata Nabawi from Davis, California. I am an MBA candidate at UC Davis Graduate School of Management with a focus on Food & Agribusiness Finance, and a forward-thinking agriculture educator and entrepreneur with experience bridging public, private, and nonprofit sectors.",
    hobbiesHeading: "Apart from work, some other activities that I love to do!",
    hobbies: [
      "Marathon Running",
      "Beekeeping",
      "World Cuisine",
      "Community Leadership",
    ],
    quote:
      "When we invest in people, believe in them, and refuse to give up on them, they rise.",
    quoteAuthor: "Ata",
    currentRole: "MBA Candidate — Food & Agribusiness Finance, UC Davis",
    education:
      "MBA, Food & Agribusiness Finance, UC Davis GSM (Expected 2027) · B.A. Macro-World History, UC Santa Cruz (2007)",
  },

  skills: {
    enabled: true,
    title: "Core Competencies",
    items: [
      { name: "Financial Modeling" },
      { name: "Valuation & Investment Analysis" },
      { name: "ESG & Sustainable Finance" },
      { name: "Grant Writing & Management" },
      { name: "P&L & Budget Management" },
      { name: "Agriculture Education" },
      { name: "Strategic Partnerships" },
      { name: "Fund Development" },
      { name: "Project Management" },
      { name: "Classroom & Program Leadership" },
      { name: "Carbon Credit Economics" },
      { name: "Operations & Supply Chain" },
      { name: "Stakeholder Engagement" },
      { name: "Public Speaking" },
    ],
    display: "pills",
  },

  tools: {
    enabled: true,
    title: "Tools & Software",
    items: [
      { name: "Excel", icon: "SiMicrosoftoffice" },
      { name: "Google Workspace", icon: "SiGoogle" },
      { name: "PowerPoint", icon: "SiMicrosoftoffice" },
      { name: "Airtable", icon: "SiAirtable" },
      { name: "Asana", icon: "SiAsana" },
      { name: "Salesforce", icon: "SiSalesforce" },
      { name: "QuickBooks", icon: "SiQuickbooks" },
    ],
  },

  portfolio: {
    enabled: true,
    route: "/project",
    navLabel: "Experience",
    title: "Professional Experience",
    subtitle:
      "Leadership across agribusiness, education, nonprofit development, and sustainable finance.",
    items: [
      {
        title: "Founder & Strategic Advisor — Simply Bee Farms",
        description:
          "Designed a carbon-backed digital asset framework linking verified tree planting, composting, and regenerative agriculture to measurable carbon sequestration. Built MRV logic for ESG-aligned asset issuance and modeled revenue from carbon credits, verification fees, and enterprise infrastructure.",
        links: [],
      },
      {
        title: "Founder & CEO — Prism Organic Juicery LLC",
        description:
          "Founded and operated a vertically integrated consumer products company with $250K+ in deployed assets. Managed full P&L, built Excel-based unit economics achieving ~80% gross margins, and led investor outreach with multi-year cash flow projections and diligence materials.",
        links: [],
      },
      {
        title: "Agriculture & Finance Program Lead — Coachella Valley High School",
        description:
          "Managed a closed-loop agricultural operation and secured $5MM+ in grant funding. Mentored the FFA chapter, launched campus farm-to-cafeteria programs, composted organic waste, and partnered with universities and public agencies on program execution.",
        links: [],
      },
      {
        title: "Co-Founder — Bilalian Halal Association",
        description:
          "Co-founded and scaled a national food certification nonprofit, developing funding models across grants, memberships, and partnerships. Coordinated stakeholder negotiations with farms, manufacturers, and institutions to expand network scale and credibility.",
        links: [],
      },
      {
        title: "CTE Agriculture Instructor — Coachella Valley High School",
        description:
          "Created comprehensive lesson plans in agricultural biology, environmental horticulture, and agricultural leadership. Established a school garden, implemented project-based learning, and organized field trips to local farms and agricultural events.",
        links: [],
      },
      {
        title: "Educator — Compton Unified, Grace Hopper STEM Academy & Others",
        description:
          "Taught mathematics, science, and humanities across public, private, and charter schools. Developed inclusive curricula, mentored at-risk youth, and increased student grades and test scores through project-based, hands-on instruction.",
        links: [],
      },
    ],
  },

  resume: {
    enabled: true,
    pdf: assetUrl("/client/resume.pdf"),
    downloadLabel: "Download Resume",
    pageTitle: "Resume",
  },

  social: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/ata-nabawi",
    },
  ],

  footer: {
    copyrightName: "AN",
    showSocial: true,
  },

  features: {
    particles: true,
    typewriter: true,
    tiltAvatar: false,
    githubCalendar: false,
    githubUsername: "",
    showPreloader: true,
  },
};

export default siteConfig;
