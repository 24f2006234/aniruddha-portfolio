import aeroGridImg from "../assets/AeroGrid_Analytics.webp";
import placementPortalImg from "../assets/placement-portal_app.webp";
import checkpostImg from "../assets/checkpost.webp";
import vardaanImg from "../assets/vardaan.webp";
import iitmLogo from "../assets/iitm.png";
import adamasLogo from "../assets/adamas.png";

export const personalInfo = {
  name: "Aniruddha Das",
  title: "Full-Stack & AI/ML Engineer",
  email: "aniruddha84860@gmail.com",
  phone: "+91 84860 58724",
  discord: "agent_47xd",
  location: "Greater Kolkata Area, India",
  linkedin: "https://www.linkedin.com/in/aniruddha-das-73a850319",
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
    cgpa: "",
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

// Ordered by focus. Every entry is used in at least one project on this site.
export const skills = {
  "Backend & APIs": ["Node.js", "Express", "FastAPI", "Flask", "REST APIs", "Webhooks"],
  "AI / ML": ["PyTorch", "scikit-learn", "pandas", "Feature engineering"],
  "LLMs & Agents": ["Tool calling", "Groq · Llama 3.3", "Gemini API", "Sarvam Voice AI", "Web search APIs"],
  Languages: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Three.js"],
  "Data & Cloud": ["Supabase", "Firebase", "SQLite", "Vercel", "Google Cloud", "Git"],
};

export const projects = [
  {
    slug: "vardaan",
    title: "Vardaan",
    tagline: "The AI agent you can call for anything",
    context: "1st Place, Aki Hacks × Hacktoberfest '26 · Team project",
    role: {
      title: "Backend & AI engineer",
      points: [
        "Built the agent's API layer: the /api/sarvam/turn endpoint that takes each spoken turn from Sarvam, runs it through the agent and returns the reply, and the webhook that stores call outcomes and transcripts.",
        "Implemented the tool-calling loop for intent parsing, planning and execution, including web search with a Tavily → Brave → DuckDuckGo fallback chain, memory and reminder callbacks.",
        "Put Groq (Llama 3.3 70B) and Gemini 2.5 Flash behind a single OpenAI-compatible client, so the model provider can be switched through configuration.",
        "Secured the tool and webhook endpoints with a shared secret, and built session auth with HMAC-signed cookies and scrypt password hashing.",
      ],
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Groq (Llama 3.3)", "Gemini", "Sarvam Voice AI"],
    year: "2026",
    highlight: "1st place at Aki Hacks × Hacktoberfest '26",
    description:
      "A voice-first AI agent that works over a real phone call. Say what you need in your own language and it plans the task, runs it and calls you back with the result.",
    bullets: [
      "Real inbound and outbound calls with a speech → LLM → speech loop in 11 languages plus Hinglish.",
      "Background task execution with web search, reminders, memory and message drafts that need your approval before sending.",
    ],
    image: vardaanImg,
    link: "https://thevardaan.vercel.app",
    github: "https://github.com/fantastic4-team/Vardaan",
    metrics: [
      { value: "1st", label: "Place at Aki Hacks × Hacktoberfest '26" },
      { value: "11", label: "Languages on calls, plus Hinglish" },
      { value: "18", label: "Features shipped and working" },
    ],
    details: {
      overview:
        "Vardaan turns a phone call into a capable personal agent. You describe the task, it plans the steps, confirms the details and takes the work off your hands. There is no app to install and no screen to look at: it works on any phone.",
      problem:
        "Getting everyday things done means switching between apps, navigating confusing websites and waiting on hold. That is hardest for people who are not comfortable with smartphones or English-first interfaces, which is a large share of users in India.",
      approach: [
        "Two modes. Call & Cut: hang up and Vardaan finishes the task in the background, then calls back or texts an update. Talk & Help: stay on the line for live research, decisions, document review or drafting.",
        "The agent parses intent, plans the steps, then executes tools such as web search, drafting and reminders.",
        "When information is missing or a decision has real consequences, it asks instead of guessing. Outgoing emails and messages go through an explicit approval step.",
        "Remembers facts and preferences between sessions, so repeat requests need less explaining.",
      ],
      architecture: [
        { label: "Call flow", text: "Sarvam's Instant Outbound API rings the user from a rented Sarvam number. Each spoken turn is sent through an ask_vardaan tool to /api/sarvam/turn, the agent replies, and Sarvam speaks the answer." },
        { label: "Agent", text: "Groq (Llama 3.3 70B) or Gemini 2.5 Flash through an OpenAI-compatible API, with tools for web search (Tavily, Brave, DuckDuckGo fallback), memory, reminders and drafting." },
        { label: "Voice", text: "Sarvam handles speech-to-text and text-to-speech, including Indian languages and code-mixed speech like Hinglish." },
        { label: "Webhooks", text: "Sarvam posts each call's outcome and full transcript to /api/sarvam/webhook, and the call log and task result are saved to the dashboard. Tool and webhook endpoints are secured with a shared secret." },
        { label: "App & auth", text: "Next.js 15 App Router dashboard with real-time agent status polling. Stateless HMAC-signed session cookies with scrypt password hashing." },
      ],
      highlights: [
        "Real phone calls on a real number, both inbound and outbound, not a browser voice demo.",
        "Vardaan identifies itself as an AI at the start of every call.",
        "Reminders trigger scheduled callbacks, and finished background tasks can call the user with results.",
        "Works in English, Hindi, nine more Indian languages and Hinglish.",
      ],
      stack: {
        Frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4"],
        "AI / LLM": ["Groq · Llama 3.3 70B", "Gemini 2.5 Flash"],
        "Voice & telephony": ["Sarvam Voice Agents", "Sarvam STT / TTS"],
        Tools: ["Tavily", "Brave Search", "DuckDuckGo", "SMTP"],
        Infra: ["Vercel", "HMAC sessions", "scrypt"],
      },
      next: [
        "Move from the local JSON store to Supabase or Neon for production.",
        "Open the private beta to more users.",
      ],
    },
  },
  {
    slug: "checkpost",
    title: "Checkpost",
    tagline: "A policy firewall for autonomous AI agents",
    context: "Hackathon · Team project",
    role: {
      title: "Backend & policy engine",
      points: [
        "Built the proxy interceptor API that receives every agent request before it reaches a protected resource and returns an allow, block or hold decision.",
        "Implemented the deterministic policy engine: YAML rule loading, deny-by-default evaluation, tool allow-lists and exact parameter matching, with no model inference on the enforcement path.",
        "Built cost governance that tracks spend, tool calls and retries per run and hard-stops an agent at its budget or loop limit.",
        "Wired the human-in-the-loop hold queue and audit traces to Firestore, so the dashboard can approve or reject held actions in real time.",
      ],
    },
    details: {
      overview:
        "Checkpost sits between an AI agent and the tools, APIs and systems it can touch. Every action is intercepted, checked against policy, then allowed, blocked or held for a human to approve, before anything runs.",
      problem:
        "Companies are giving AI agents direct access to databases, payment gateways and refund systems. A hallucinated command, a misread instruction or a runaway retry loop can cause destructive writes, unauthorized transactions or uncontrolled API spend within seconds. Fraud tooling is built for human actors and has no equivalent control layer for agents.",
      approach: [
        "Proxy interceptor that receives every agent payload before it reaches a protected resource.",
        "Deterministic, deny-by-default policy engine configured through declarative YAML: allow-lists for safe tools and exact parameter matching to block destructive commands.",
        "No model inference on the enforcement path, so policy checks stay in the sub-millisecond range.",
      ],
      architecture: [
        { label: "Policy engine", text: "Rule-based evaluation of each request against allow-lists, deny rules and parameter constraints." },
        { label: "Cost governance", text: "Tracks accumulated spend, tool calls and retries per run, and hard-stops an agent the moment it crosses its budget or loop ceiling." },
        { label: "Human-in-the-loop", text: "Sensitive actions such as refunds or dropping a table trigger a synchronous hold. Operators see the intended action and reasoning, then approve or reject it." },
        { label: "Dashboard", text: "Next.js app for configuring policies, reviewing held actions and auditing traces stored in Firestore." },
      ],
      highlights: [
        "Hard stop instead of a passive alert when budgets or loop limits are hit.",
        "Rejections are returned to the model so the agent can recover instead of crashing.",
        "Audit trail of every intercepted action and the decision taken on it.",
      ],
      stack: {
        Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        "Data & Auth": ["Firebase Auth", "Firestore", "Supabase"],
        Deployment: ["Vercel"],
      },
      next: [
        "Publish an SDK so agents can route tool calls through Checkpost with a single wrapper.",
        "Policy simulation mode to test new rules against recorded traces before enabling them.",
      ],
    },
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Firebase", "Supabase", "Vercel"],
    year: "2026",
    highlight: "Deny-by-default policy checks in under a millisecond",
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
    slug: "aerogrid",
    title: "AeroGrid",
    tagline: "Live aviation telemetry with ML-powered ETA prediction",
    context: "Personal project",
    metrics: [
      { value: "~9.1 min", label: "Mean ETA error on held-out data" },
      { value: "55%", label: "Lower error than mean baseline" },
      { value: "52%", label: "Predictions within 5 min" },
      { value: "0.03 ms", label: "Per prediction on CPU" },
    ],
    details: {
      overview:
        "AeroGrid is a flight operations dashboard for Indian airspace. It ingests live ADS-B telemetry, renders active flights on an interactive 3D globe, flags risky flight behavior and predicts each flight's arrival time with a neural network served as its own microservice.",
      problem:
        "Raw ADS-B feeds are a continuous stream of position pings with no notion of individual flights, and scheduled arrival times ignore what an aircraft is actually doing in the air. The goal was to turn that stream into labeled flights and predict ETA from live flight behavior, on a free API that rate-limits aggressively.",
      approach: [
        "Ingested ~29,900 live telemetry records from the OpenSky Network: 1,557 unique aircraft and 2,066 callsigns from 62 countries, averaging ~253 concurrent aircraft per snapshot over the 6–36°N, 68–98°E bounding box.",
        "Split each aircraft's track into separate flights at 30-minute gaps and labeled every sample with its time until arrival, producing 6,157 training samples.",
        "Computed vectorized Haversine distance to four major hubs (DEL, BOM, BLR, CCU) as spatial features.",
        "Trained a compact PyTorch MLP (5 → 64 → 32 → 16 → 1, 3,009 parameters) to predict ETA.",
      ],
      results: [
        "Mean absolute error of ~9.1 minutes (548 s) on held-out test data; median error ~4.5 minutes (272 s).",
        "55% lower error than a baseline that always predicts the average (1,225 s → 548 s), with R² = 0.67.",
        "52% of predictions land within 5 minutes of the true arrival time, across a 5–155 minute prediction range.",
        "~0.03 ms per prediction on CPU; the FastAPI service runs GPU-accelerated through DirectML on AMD hardware.",
      ],
      architecture: [
        { label: "Frontend", text: "React, TypeScript and Vite with react-globe.gl and Three.js for the 3D airspace view, refreshing live data every 30 seconds." },
        { label: "API gateway", text: "Node.js and Express in TypeScript. Combines OpenSky positions with AirLabs routes and airports, and runs rule-based alerting." },
        { label: "Caching", text: "60-second cache with fallback to the last good response, so the dashboard keeps running when OpenSky returns HTTP 429. OpenSky gets at most one request per minute regardless of client count." },
        { label: "ML service", text: "FastAPI microservice running the PyTorch model, independent of the gateway so it can be retrained and redeployed on its own." },
      ],
      highlights: [
        "Emergency squawk codes (7700 / 7600) are flagged automatically, along with risky descent rates and unsafe speed/altitude combinations.",
        "Upstream load is decoupled from traffic: any number of viewers costs one OpenSky call per minute.",
        "~2,550 lines of TypeScript and Python across 37 commits, built over about four months (June–October 2026).",
      ],
      stack: {
        Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Three.js", "react-globe.gl"],
        Backend: ["Node.js", "Express", "TypeScript"],
        "ML / Data": ["FastAPI", "PyTorch", "scikit-learn", "pandas"],
        APIs: ["OpenSky Network", "AirLabs"],
      },
      next: [
        "Add route and weather features to push R² past 0.67.",
        "Deploy a public demo backed by recorded telemetry.",
      ],
    },
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "PyTorch", "WebGL"],
    year: "2026",
    highlight: "~9.1 min mean ETA error, 55% better than baseline",
    description: "Live flight tracking over Indian airspace with a neural network that predicts arrival times.",
    bullets: [
      "Built 6,157 labeled flights from ~29,900 live ADS-B records across 1,557 aircraft.",
      "ETA model averages ~9.1 min error, 55% better than a mean baseline, at 0.03 ms per prediction.",
    ],
    image: aeroGridImg,
    github: "https://github.com/24f2006234/AeroGrid_Analytics",
  },
  {
    slug: "placement-portal",
    title: "Placement Portal",
    tagline: "Campus placement platform with ML resume matching",
    context: "Academic project · IIT Madras",
    details: {
      overview:
        "A placement platform with separate portals for students, companies and administrators. Students upload a PDF resume once; recruiters get a ranked list of candidates for each drive, with an explainable AI breakdown of why each candidate fits.",
      problem:
        "Recruiters reviewing campus applications read hundreds of unstructured resumes per drive, and plain keyword filters miss context. The aim was to rank candidates automatically while keeping the score transparent enough for a recruiter to trust.",
      approach: [
        "PDF resumes are streamed to the server and parsed in memory with pypdf to extract profile data and auto-fill student forms.",
        "Job descriptions and resumes are vectorized with TF-IDF, weighted to boost explicit technical terms and dampen document-length noise.",
        "Cosine similarity produces a 0–100% match score used to rank candidates per drive.",
        "Gemini generates a structured evaluation (skills, education, experience, projects) with evidence quoted from the resume, plus strengths, gaps and risks.",
      ],
      architecture: [
        { label: "Frontend", text: "React and Vite single-page app with client-side routing and protected routes that survive page refreshes." },
        { label: "Backend", text: "Flask REST API serving JSON only, with SQLAlchemy models for students, companies, drives and applications." },
        { label: "Auth", text: "Session-based authentication using secure HTTP cookies across origins." },
        { label: "AI layer", text: "LLM reports are cached in the database with schema-version checks, so repeat views are instant and API cost stays low." },
      ],
      highlights: [
        "Explainable scoring: the AI breakdown sums to the final match score and cites the resume.",
        "Migrated from server-rendered Jinja templates to a fully decoupled API and SPA.",
      ],
      stack: {
        Frontend: ["React", "Vite", "React Router", "Bootstrap"],
        Backend: ["Python", "Flask", "SQLAlchemy", "SQLite"],
        "ML / AI": ["scikit-learn", "pypdf", "Gemini API"],
      },
      next: [
        "Evaluate ranking quality against real recruiter shortlists.",
        "Replace keyword skill extraction with an embedding-based approach.",
      ],
    },
    tech: ["React", "Vite", "Flask", "Scikit-Learn", "Gemini API"],
    year: "2026",
    highlight: "Explainable match scores, backed by quotes from the resume",
    description:
      "Campus placement platform that ranks candidates for each job with TF-IDF matching and explains every score with Gemini.",
    bullets: [
      "Developed a SPA with session-based auth, REST API gateway, and candidate-job relevance scoring.",
      "Auto-generated candidate insights and interview questions from unstructured PDF resumes.",
    ],
    image: placementPortalImg,
    github: "https://github.com/24f2006234/placement-portal_app",
  },
];

export const certifications = [
  {
    title: "1st Place — Aki Hacks × Hacktoberfest '26",
    issuer: "Machine Learning Kolkata · Major League Hacking",
    gallery: ["/achievements/akihacks1.webp", "/achievements/akihacks2.webp", "/achievements/akihacks3.webp"],
    icon: "award",
  },
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
