import aeroGridImg from "../assets/AeroGrid_Analytics.png";
import placementPortalImg from "../assets/placement-portal_app.png";
import surplusGridImg from "../assets/surplusgrid.png";
import checkpostImg from "../assets/checkpost.png";
import iitmLogo from "../assets/iitm.png";

export const personalInfo = {
  name: "Aniruddha Das",
  title: "Full-Stack & ML Engineer",
  email: "aniruddha84860@gmail.com",
  phone: "",
  location: "Greater Kolkata Area, India",
  linkedin: "https://www.linkedin.com/in/aniruddhadas-73a850319",
  github: "https://github.com/24f2006234",
  summary:
    "Dual-degree student — Data Science at IIT Madras, CSE at Adamas University. I build end-to-end applications, from backend APIs and ML integrations to interactive, high-performance frontends. Recent work spans real-time data visualization, full-stack web platforms, and applied ML.",
};

export const education = {
  degree: "Data Science (IIT M) & CSE (Adamas)",
  university: "IIT Madras / Adamas University",
  location: "India",
  duration: "Present",
  gpa: "",
};

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
    title: "AeroGrid",
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "PyTorch", "WebGL"],
    year: "2026",
    description: "Aviation intelligence platform with live telemetry and a trained ML model.",
    bullets: [
      "Time-series sessionization for splitting continuous telemetry into individual flights.",
      "Spatial feature engineering and real-time WebGL rendering under frequent data updates.",
    ],
    color: "#FF6B6B",
    iconName: "Plane",
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
    color: "#C084FC",
    iconName: "Briefcase",
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
    color: "#4ADE80",
    iconName: "Zap",
    image: surplusGridImg,
    github: "https://github.com/pradhan-not-found/SurplusGrid",
  },
  {
    title: "Checkpost",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Firebase", "Supabase", "Vercel"],
    year: "2026",
    description: "Web Application Firewall built exclusively for autonomous AI agents, acting as a wire-level checkpoint between AI agents and financial tools, APIs, or systems.",
    bullets: [
      "Wire-level checkpoint positioned entirely between the AI agent and every financial tool, API, or system it attempts to use.",
      "Secures autonomous agent tool calls and infrastructure with real-time monitoring and policy enforcement.",
    ],
    color: "#38BDF8",
    iconName: "ShieldCheck",
    image: checkpostImg,
    github: "https://github.com/pradhan-not-found/Checkpost",
    link: null,
  }
];

export const certifications = [
  {
    title: "1st Place — Coding Premier League",
    issuer: "Adamas University (SIGNIFIYA)",
    image: "/achievements/au-footer-logo.png",
    gallery: ["/achievements/cpl1.png", "/achievements/cpl2.png", "/achievements/cpl3.png"],
    icon: "award",
  },
  {
    title: "1st Place — VibeForge 1.0",
    issuer: "Adamas University",
    image: "/achievements/au-footer-logo.png",
    gallery: ["/achievements/vibeforge1.png", "/achievements/vibeforge2.png", "/achievements/vibeforge3.png"],
    icon: "award",
  },
  {
    title: "1st Runner-Up — InnovateX 2.0",
    issuer: "IMI Kolkata Techfest",
    image: "/achievements/International_Management_Institute_Kolkata_Logo.svg",
    gallery: ["/achievements/innovatex1.png", "/achievements/innovatex2.png", "/achievements/innovatex3.png"],
    icon: "award",
  },
  {
    title: "Finalist — Hackforge, Srijan",
    issuer: "Jadavpur University",
    image: "/achievements/Jadavpur_University_Logo.svg",
    gallery: ["/achievements/srijan1.png", "/achievements/srijan2.png", "/achievements/srijan3.png"],
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

export const leetcodeStats = {
  username: "Aniruddha Das",
  profileUrl: "https://leetcode.com/",
  solved: 150,
  totalQuestions: 3300,
  easySolved: 50,
  easyTotal: 820,
  mediumSolved: 80,
  mediumTotal: 1720,
  hardSolved: 20,
  hardTotal: 760,
  ranking: "Top 10%",
  streak: 30,
  activeDays: 100,
  acceptanceRate: "65.0%",
};
