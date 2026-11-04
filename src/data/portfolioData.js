import aeroGridImg from "../assets/AeroGrid_Analytics.webp";
import placementPortalImg from "../assets/placement-portal_app.webp";
import surplusGridImg from "../assets/surplusgrid.webp";
import checkpostImg from "../assets/checkpost.webp";
import iitmLogo from "../assets/iitm.png";
import adamasLogo from "../assets/adamas.png";

export const personalInfo = {
  name: "Aniruddha Das",
  title: "Full-Stack & AI/ML Engineer",
  email: "aniruddha84860@gmail.com",
  phone: "+91 84860 58724",
  discord: "agent_47xd",
  location: "Greater Kolkata Area, India",
  linkedin: "https://www.linkedin.com/in/aniruddhadas-73a850319",
  github: "https://github.com/24f2006234",
  resume: "/Aniruddha_Resume.pdf",
  summary:
    "Dual-degree student in Data Science at IIT Madras and Computer Science at Adamas University. I build end-to-end applications, from backend APIs and ML services to responsive, high-performance interfaces.",
};

export const education = [
  {
    school: "Indian Institute of Technology, Madras",
    degree: "BS, Data Science and Applications",
    duration: "2024 – Present",
    cgpa: "7.58",
    note: "Project CGPA 9.0",
    logo: iitmLogo,
  },
  {
    school: "Adamas University",
    degree: "B.Tech, Computer Science Engineering",
    duration: "2024 – Present",
    cgpa: "8.0",
    note: "",
    logo: adamasLogo,
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C++"],
  Frontend: ["React", "Vite", "Tailwind CSS", "WebGL"],
  Backend: ["Node.js", "Express", "Flask", "FastAPI"],
  Database: ["Pandas", "SQL"],
  "Tools / Platforms": ["Git", "Google Cloud Platform"],
  "ML / Data": ["PyTorch", "scikit-learn"],
};

export const projects = [
  {
    title: "Checkpost",
    featured: true,
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Firebase", "Supabase", "Vercel"],
    year: "2026",
    description: "A policy firewall that sits between AI agents and production systems, blocking destructive, costly or data-leaking actions before they run.",
    bullets: [
      "Deterministic policy engine that denies unsafe actions, such as destructive SQL, in real time.",
      "Budget limits, runaway-loop protection and human approval for flagged actions.",
    ],
    image: checkpostImg,
    github: "https://github.com/pradhan-not-found/Checkpost",
    link: "https://checkpost-ai.vercel.app/",
  },
  {
    title: "AeroGrid",
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "PyTorch", "WebGL"],
    year: "2026",
    description: "Aviation intelligence platform with live telemetry and a trained ML model.",
    bullets: [
      "Time-series sessionization for splitting continuous telemetry into individual flights.",
      "Spatial feature engineering and real-time WebGL rendering under frequent data updates.",
    ],
    image: aeroGridImg,
    github: "https://github.com/24f2006234/AeroGrid_Analytics",
  },
  {
    title: "Placement Portal",
    tech: ["React", "Vite", "Flask", "Scikit-Learn", "Gemini API"],
    year: "2026",
    description: "ML-based resume-to-job matching platform.",
    bullets: [
      "Developed a SPA with session-based auth, REST API gateway, and candidate-job relevance scoring.",
      "Auto-generated candidate insights and interview questions from unstructured PDF resumes.",
    ],
    image: placementPortalImg,
    github: "https://github.com/24f2006234/placement-portal_app",
  },
  {
    title: "Surplus Grid",
    tech: ["React", "Node.js", "Express"],
    year: "2026",
    description: "A platform focused on optimizing energy surplus distribution and grid management.",
    bullets: [
      "Built a scalable backend to handle real-time energy metrics.",
      "Developed an interactive dashboard for visualizing grid health."
    ],
    image: surplusGridImg,
    github: "https://github.com/pradhan-not-found/SurplusGrid",
  },
];

export const certifications = [
  {
    title: "1st Place — Coding Premier League",
    issuer: "Adamas University (SIGNIFIYA)",
    image: "/achievements/au-footer-logo.png",
    gallery: ["/achievements/cpl1.webp", "/achievements/cpl2.webp", "/achievements/cpl3.webp"],
    icon: "award",
  },
  {
    title: "1st Place — VibeForge 1.0",
    issuer: "Adamas University",
    image: "/achievements/au-footer-logo.png",
    gallery: ["/achievements/vibeforge1.webp", "/achievements/vibeforge2.webp", "/achievements/vibeforge3.webp"],
    icon: "award",
  },
  {
    title: "1st Runner-Up — InnovateX 2.0",
    issuer: "IMI Kolkata Techfest",
    image: "/achievements/International_Management_Institute_Kolkata_Logo.svg",
    gallery: ["/achievements/innovatex1.webp", "/achievements/innovatex2.webp", "/achievements/innovatex3.webp"],
    icon: "award",
  },
  {
    title: "Finalist — Hackforge, Srijan",
    issuer: "Jadavpur University",
    image: "/achievements/Jadavpur_University_Logo.svg",
    gallery: ["/achievements/srijan1.webp", "/achievements/srijan2.webp", "/achievements/srijan3.webp"],
    icon: "award",
  },
  {
    title: "Programming and Data Science – Foundational Level",
    issuer: "Indian Institute of Technology, Madras",
    image: iitmLogo,
    icon: "certificate",
  },
  {
    title: "Use Machine Learning APIs on Google Cloud Skill Badge",
    issuer: "Google Cloud Skills Boost",
    image: "/certificates/google-cloud.png",
    icon: "certificate",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    image: "/certificates/nptellg.png",
    icon: "certificate",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    image: "/certificates/hackerrank.svg",
    icon: "certificate",
  }
];
