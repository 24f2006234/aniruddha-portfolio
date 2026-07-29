import aeroGridImg from "../assets/AeroGrid_Analytics.png";
import placementPortalImg from "../assets/placement-portal_app.png";
import surplusGridImg from "../assets/surplusgrid.png";
import iitmLogo from "../assets/iitm.png";

export const personalInfo = {
  name: "Aniruddha Das",
  title: "Data Scientist | ML + Full-Stack",
  email: "aniruddha84860@gmail.com",
  phone: "",
  location: "Greater Kolkata Area, India",
  linkedin: "https://www.linkedin.com/in/aniruddhadas-73a850319",
  github: "https://github.com/24f2006234",
  summary:
    "Dual-degree student — Data Science at IIT Madras, CSE at Adamas University. Builds systems that go past the model: real-time data pipelines, ML services, and the full-stack layer that makes them usable. Recent work spans live aviation telemetry, ML-driven candidate matching, and applied ML on Google Cloud.",
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
    title: "AeroGrid — Aviation Intelligence Platform",
    tech: ["React", "WebGL", "FastAPI", "PyTorch"],
    year: "2026",
    description:
      "Full-stack platform ingesting live global flight telemetry and scheduling data, visualized on an interactive 3D globe with ML-based ETA and delay prediction.",
    bullets: [
      "Time-series sessionization for splitting continuous telemetry into individual flights.",
      "Spatial feature engineering and real-time WebGL rendering under frequent data updates.",
    ],
    color: "#FF6B6B",
    iconName: "Plane",
    image: aeroGridImg,
    link: "https://github.com/24f2006234/AeroGrid_Analytics",
  },
  {
    title: "Placement Portal",
    tech: ["React", "Flask", "Scikit-Learn", "Gemini API"],
    year: "2026",
    description:
      "Campus placement and talent-matching platform with a resume-to-job matchmaking engine.",
    bullets: [
      "Developed a SPA with session-based auth, REST API gateway, and candidate-job relevance scoring.",
      "Auto-generated candidate insights and interview questions from unstructured PDF resumes.",
    ],
    color: "#C084FC",
    iconName: "Briefcase",
    image: placementPortalImg,
    link: "https://github.com/24f2006234/placement-portal_app",
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
    link: "#",
  },
  {
    title: "Project Beta (Coming Soon)",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    year: "2027",
    description: "A modern web application with a focus on exceptional UI/UX design.",
    bullets: [
      "Designing complex interactive components.",
      "Optimizing core web vitals for performance."
    ],
    color: "#60A5FA",
    iconName: "Layout",
    image: null,
    link: "#",
  }
];

export const certifications = [
  {
    title: "1st Place — Coding Premier League",
    issuer: "Adamas University (SIGNIFIYA)",
    image: "/achievements/au-footer-logo.png",
    icon: "award",
  },
  {
    title: "1st Runner-Up — InnovateX 2.0",
    issuer: "IMI Kolkata Techfest",
    image: "/achievements/International_Management_Institute_Kolkata_Logo.svg",
    icon: "award",
  },
  {
    title: "Finalist — Hackforge, Srijan",
    issuer: "Jadavpur University",
    image: "/achievements/Jadavpur_University_Logo.svg",
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
