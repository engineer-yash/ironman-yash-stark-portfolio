// ============================================================
// YASH GOHEL | YASH STARK — CENTRAL PORTFOLIO DATA CONFIG
// Single source of truth. Every page imports from this file.
// Each record carries an `id` so this maps 1:1 to future
// database collections for an admin dashboard.
// ============================================================

export const personalInfo = {
  name: "Yash Gohel",
  alias: "Yash Stark",
  title: ".NET Developer | C# | ASP.NET MVC | SQL Server | React | Generative AI",
  heroTitle: ".NET Developer | Full-Stack Engineer",
  tagline:
    "Engineering scalable applications, intelligent solutions, and modern digital experiences.",
  location: "Pune, Maharashtra, India",
  shortLocation: "Pune, India",
  email: "hello.yashgohel@gmail.com",
  phone: "+91 9409447069",
  profileImage:
    "https://customer-assets.emergentagent.com/job_d2fbc2f2-d986-4d3f-926b-807d09caf343/artifacts/jg7d8t3b_passportSize.jpg",
  heroImage:
    "https://customer-assets.emergentagent.com/job_dd71168c-a0c9-4d0c-9ff0-288fcc6c3b45/artifacts/7t42ou3s_ai-generated-8229398_1280.png",
  yearsOfExperience: "3+",
  // Professional summary (from resume — used on About page)
  summary:
    "Software Developer with 3+ years of hands-on experience across professional roles, internships, and client-facing freelance projects. Specialized in C#, .NET, ASP.NET MVC, ASP.NET Core Web APIs, WPF, and SQL Server. Experienced in building business applications, integrating third-party REST APIs and payment services, optimizing database queries, unit testing, code reviews, and CI/CD. Also experienced in modern frontend development, cloud technologies, and AI-powered application development.",
  // Stark-flavored bio (hero card)
  starkBio:
    "Like Tony Stark, I engineer solutions that push boundaries. My arc reactor? Scalable .NET systems and intelligent applications. My suit? Clean, efficient code — built on C#, ASP.NET Core, WPF, and Azure.",
  // Set to a string like "Open to opportunities" to show the badge on the hero.
  // Keep null to hide it. Never show a status you can't maintain.
  availability: null,
};

// ------------------------------------------------------------
// SKILLS — grouped by category. Add/edit categories freely;
// the Skills page renders them automatically (no % levels).
// icon maps to a lucide-react icon in Skills.js
// ------------------------------------------------------------
export const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code",
    blurb: "Core languages I build with every day.",
    skills: ["C#", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "dotnet",
    name: "Microsoft .NET Ecosystem",
    icon: "Layers",
    blurb: "My primary professional specialization.",
    skills: [
      "ASP.NET MVC",
      "ASP.NET Core",
      ".NET Framework",
      ".NET Core",
      "Web API",
      "REST APIs",
      "WPF",
      "Blazor",
      "Entity Framework",
      "EF Core",
      "LINQ",
      "ADO.NET",
      "Dependency Injection",
      "Middleware",
      "Async/Await",
      "Microservices",
      "Third-Party API Integration",
      "JSON",
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "Globe",
    blurb: "Modern interfaces on top of solid APIs.",
    skills: [
      "React.js",
      "Next.js",
      "Angular / AngularJS",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    id: "database",
    name: "Database Technologies",
    icon: "Database",
    blurb: "Data modeled, queried, and optimized.",
    skills: [
      "Microsoft SQL Server",
      "Azure SQL",
      "MongoDB",
      "Stored Procedures",
      "Joins",
      "Indexing",
      "Query Optimization",
      "EF Core Migrations",
    ],
  },
  {
    id: "cloud",
    name: "Cloud, DevOps & Tools",
    icon: "Cloud",
    blurb: "Shipping, monitoring, and iterating on Azure.",
    skills: [
      "Microsoft Azure",
      "Azure App Services",
      "Azure Functions",
      "Azure SQL",
      "Azure Blob Storage",
      "Azure Monitoring",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "Visual Studio",
      "VS Code",
      "Postman",
      "Swagger",
    ],
  },
  {
    id: "practices",
    name: "Software Engineering Practices",
    icon: "Target",
    blurb: "How I keep systems reliable and teams fast.",
    skills: [
      "Object-Oriented Programming",
      "SOLID Principles",
      "Design Patterns",
      "Clean Architecture",
      "SDLC",
      "Agile/Scrum",
      "Unit Testing",
      "Code Reviews",
      "Debugging",
      "Troubleshooting",
      "Caching",
      "Performance Optimization",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    id: "ai",
    name: "AI-Assisted Development",
    icon: "Bot",
    blurb: "AI tooling woven into my daily workflow.",
    skills: [
      "Claude",
      "Claude Code",
      "ChatGPT",
      "Cursor",
      "GitHub Copilot",
      "OpenAI Codex",
      "Gemini",
      "Emergent",
    ],
  },
];

// ------------------------------------------------------------
// EXPERIENCE — newest first. `responsibilities` OR `projects`
// (freelance records use `projects`). Optional: starkEquivalent.
// ------------------------------------------------------------
export const experience = [
  {
    id: 1,
    title: "Application Developer (.NET / WPF)",
    company: "Capitoline Global Group",
    industry: "FinTech",
    type: "Full-time",
    duration: "July 2026 – September 2026",
    location: "Pune, Maharashtra",
    description:
      "Building and enhancing C#/.NET Framework and WPF Windows applications for FinTech workflows.",
    responsibilities: [
      "Developed and enhanced C#/.NET Framework and WPF Windows applications for FinTech workflows using Visual Studio.",
      "Applied Object-Oriented Programming and SOLID principles across the codebase.",
      "Integrated OpenStreetMap and Mapsui with node-based rendering for map-driven data visualization.",
      "Debugged, troubleshot, and maintained applications across SQL Server, Azure, Git, and Blazor.",
      "Applied caching techniques to improve application responsiveness.",
    ],
    technologies: [
      "C#",
      ".NET Framework",
      "WPF",
      "Visual Studio",
      "SQL Server",
      "Azure",
      "Blazor",
      "OpenStreetMap",
      "Mapsui",
      "Git",
    ],
    starkEquivalent:
      "Like upgrading a proven suit platform — refining battle-tested systems for higher-stakes missions.",
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "YG Web Studio",
    type: "Self-Employed / Freelance",
    duration: "January 2025 – June 2026",
    location: "Remote / Pune",
    description:
      "Delivered client-facing websites and full-stack web applications through YG Web Studio, handling frontend development, backend APIs, database integration, deployment, and administration features.",
    projects: [
      {
        name: "Jay-Ganesh Films Entertainment",
        bullets: [
          "Developed and deployed a client-facing website using Next.js 15.",
          "Implemented server-rendered pages.",
          "Developed a MongoDB-backed contact API.",
          "Integrated WhatsApp enquiry workflows.",
          "Deployed using Vercel.",
        ],
      },
      {
        name: "Komal Jewellers",
        bullets: [
          "Developed a production e-commerce application using Next.js.",
          "Implemented Next.js API routes and MongoDB Atlas with Mongoose.",
          "Built a JWT-authenticated administration panel.",
          "Integrated Cloudinary image uploads and product CRUD operations.",
        ],
      },
      {
        name: "Madhukunj – Pure Veg",
        bullets: [
          "Developed a React single-page application.",
          "Implemented dynamic menu filtering across 9 categories and 45 items.",
          "Integrated Framer Motion animations.",
          "Integrated Cloudinary and Google Maps.",
        ],
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Framer Motion",
      "Google Maps",
      "Vercel",
    ],
    starkEquivalent:
      "Like running the workshop solo — every suit designed, built, tested, and delivered end-to-end.",
  },
  {
    id: 3,
    title: "Software Engineer Intern (.NET Stack)",
    company: "The One Technologies",
    type: "Internship",
    duration: "January 2024 – December 2024",
    location: "Ahmedabad, Gujarat",
    description:
      "Full year on the .NET stack — building order, payment, and event-management modules and optimizing the data layer.",
    responsibilities: [
      "Developed ASP.NET Core Web APIs and ASP.NET MVC modules for orders, payments, and event management.",
      "Integrated third-party REST services using JSON.",
      "Optimized SQL Server queries, stored procedures, and EF Core/LINQ with indexing, improving query performance by 40%.",
      "Wrote unit tests for service and API layers.",
      "Participated in peer code reviews and maintained coding standards.",
      "Enhanced SimpleTix Angular/AngularJS frontend components with REST API integration.",
    ],
    technologies: [
      "ASP.NET Core",
      "ASP.NET MVC",
      "Web API",
      "SQL Server",
      "EF Core",
      "LINQ",
      "REST APIs",
      "Angular / AngularJS",
      "Unit Testing",
      "GitLab",
    ],
    starkEquivalent:
      "Like the first flight of the Mark II — real missions, real stakes, rapid iteration.",
  },
];

// ------------------------------------------------------------
// PROJECTS — `githubUrl` / `liveUrl` / `image` are null unless
// verified. Cards only render links that exist here.
// status: "Live" | "Delivered" | "National Winner" | null
// ------------------------------------------------------------
export const projects = [
  {
    id: 1,
    title: "NutriScan AI",
    type: "AI-Powered Full-Stack Application",
    duration: null,
    status: "Live",
    description:
      "An AI-powered food-label analyzer that uses OCR and generative AI to analyze food labels, generate health scores, and predict product expiry information.",
    technologies: [
      "ASP.NET Core 8",
      "React",
      "Next.js",
      "Azure OpenAI",
      "Azure Computer Vision",
      "Azure SQL",
      "Azure Functions",
    ],
    features: [
      "Azure Computer Vision OCR",
      "Azure OpenAI-powered label analysis",
      "Food health scoring",
      "Expiry prediction",
      "JWT authentication",
      "Clean Architecture",
      "Azure monitoring",
      "GitHub Actions CI/CD",
    ],
    githubUrl: "https://github.com/engineer-yash/NutriScan-AI",
    liveUrl: "http://nutri-scan-ai-chi.vercel.app/",
    image: null,
    starkTech:
      "J.A.R.V.I.S.-grade intelligence — computer vision meets generative AI.",
  },
  {
    id: 2,
    title: "Jay-Ganesh Films Entertainment",
    type: "Client Production — YG Web Studio",
    duration: null,
    status: "Live",
    description:
      "Production website for a films and entertainment brand, delivered end-to-end through YG Web Studio.",
    technologies: ["Next.js 15", "MongoDB", "REST API", "WhatsApp Integration", "Vercel"],
    features: [
      "Responsive website",
      "Server-rendered pages",
      "MongoDB-backed contact API",
      "WhatsApp enquiry integration",
    ],
    githubUrl: "https://github.com/engineer-yash/Jay-Ganesh-Film-Entertainment",
    liveUrl: "https://jay-ganesh-films-jet.vercel.app/",
    image: null,
    starkTech: "A polished public presence — server-rendered and always on.",
  },
  {
    id: 3,
    title: "Komal Jewellers",
    type: "Client Production — YG Web Studio",
    duration: null,
    status: "Live",
    description:
      "Production e-commerce application with a JWT-authenticated admin panel, delivered through YG Web Studio.",
    technologies: ["Next.js", "MongoDB Atlas", "Mongoose", "JWT", "Cloudinary"],
    features: [
      "E-commerce functionality",
      "Admin dashboard",
      "JWT authentication",
      "Product CRUD",
      "Cloudinary image management",
    ],
    githubUrl: "https://github.com/engineer-yash/Komal-Imitations",
    liveUrl: "https://komal-imitations.vercel.app",
    image: null,
    starkTech: "A storefront with a command center — commerce plus full admin control.",
  },
  {
    id: 4,
    title: "Madhukunj – Pure Veg",
    type: "Client Project — YG Web Studio",
    duration: null,
    status: "Delivered",
    description:
      "Animated React single-page application for a pure-veg restaurant, delivered through YG Web Studio.",
    technologies: ["React", "Framer Motion", "Cloudinary", "Google Maps"],
    features: [
      "Dynamic menu filtering",
      "9 food categories",
      "45 menu items",
      "Animated UI",
      "Google Maps integration",
    ],
    githubUrl: "https://github.com/engineer-yash/Madhukunj-Pure-Veg",
    liveUrl: "https://madhukunj-demo.vercel.app",
    image: null,
    starkTech: "A holographic menu — every dish displayed in motion.",
  },
  {
    id: 5,
    title: "Smart India Hackathon 2022",
    type: "Dairy Farm Management System",
    duration: "April 2022 – August 2022",
    status: "National Winner",
    description:
      "Led a six-member team to design and deliver a Dairy Farm Management System for the Ministry of Fisheries, Animal Husbandry & Dairying.",
    technologies: ["PHP", "MySQL", "Bootstrap 5", "Chart.js"],
    features: [
      "Multi-role authentication",
      "Real-time milk collection tracking",
      "State-wise and district-wise analytics",
      "Dairy farm management",
    ],
    achievement: "Smart India Hackathon 2022 National Level Winner",
    githubUrl: "https://github.com/engineer-yash/SIH2022-Updated",
    liveUrl: null,
    image: null,
    starkTech: "The first arc reactor — the build that proved everything.",
  },
];

// ------------------------------------------------------------
// EDUCATION — array of records (BE + Diploma)
// ------------------------------------------------------------
export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering (BE)",
    field: "Computer Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Om Engineering College (GTU)",
    location: "Junagadh, Gujarat",
    duration: "2021 – 2024",
    cgpa: "8.96",
    cgpaScale: "10",
  },
  {
    id: 2,
    degree: "Diploma of Engineering",
    field: "Computer Engineering",
    specialization: null,
    institution: "Balaji Institute of Technology (GTU)",
    location: "Junagadh, Gujarat",
    duration: "2018 – 2021",
    cgpa: "8.00",
    cgpaScale: "10",
  },
];

// ------------------------------------------------------------
// CERTIFICATIONS — set certificateLink/image later; when null
// the card shows a neutral "link coming soon" state.
// ------------------------------------------------------------
export const certifications = [
  {
    id: 1,
    title: "Building Web APIs with ASP.NET Core 8",
    issuer: "Linkedin Learning",
    date: "July 2025",
    certificateLink: "https://www.linkedin.com/learning/certificates/348696c073b5c169d9f45fec7b9bc48a72f060a0cad8d0a9e744e15881a4e793",
    image: null,
  },
  {
    id: 2,
    title: "Containers with .NET and Docker",
    issuer: "Linkedin Learning",
    date: "August 2025",
    certificateLink: "https://www.linkedin.com/learning/certificates/fb65d834330ca1282dcfce1932c27943de53e16cbef22ec72d82ffd251e2c6d1",
    image: null,
  },
  {
    id: 3,
    title: "Azure DevOps Foundation Course",
    issuer: "Scholarhat",
    date: "April 2026",
    certificateLink: "https://drive.google.com/file/d/1g-Rhm18BDq9F1WX3XqLmAeuoRV82PcIC/view",
    image: null,
  },
  {
    id: 4,
    title: "Generative AI Mastermind",
    issuer: "OutSkill",
    date: "July 2025",
    certificateLink: "https://s3.ap-south-1.amazonaws.com/assets.growthschool.io/certificates/7f117887-8b13-4259-acc6-01319a80214b_cert.pdf",
    image: null,
  },
];

// ------------------------------------------------------------
// ACHIEVEMENTS — dedicated section + hero status ticker
// ------------------------------------------------------------
export const achievements = [
  {
    id: 1,
    icon: "Trophy",
    title: "Smart India Hackathon 2022 — National Level Winner",
    description:
      "National-level winner with a Dairy Farm Management System built for the Ministry of Fisheries, Animal Husbandry & Dairying.",
  },
  {
    id: 2,
    icon: "Users",
    title: "Six-Member Team Leadership",
    description:
      "Led a six-member development team end-to-end — from system design to delivery under hackathon deadlines.",
  },
  {
    id: 3,
    icon: "Gauge",
    title: "40% SQL Query Performance Improvement",
    description:
      "Optimized SQL Server queries, stored procedures, and EF Core/LINQ with indexing at The One Technologies.",
  },
  {
    id: 4,
    icon: "Rocket",
    title: "Production-Ready Freelance Delivery",
    description:
      "Delivered multiple production applications through YG Web Studio — e-commerce, entertainment, and restaurant platforms.",
  },
  {
    id: 5,
    icon: "Bot",
    title: "AI-Powered Application Development",
    description:
      "Built AI-powered applications using Azure OpenAI and Azure Computer Vision, from OCR pipelines to health-scoring engines.",
  },
];

// ------------------------------------------------------------
// JARVIS KNOWLEDGE BASE — keyword banks. All answers use the
// updated profile. Add/extend banks freely.
// ------------------------------------------------------------
export const jarvisResponses = {
  greeting: [
    "Good evening. JARVIS online — welcome to the digital workshop of Yash Gohel, also known as Yash Stark.",
    "Systems online. All lab interfaces ready. How may I assist you today, sir?",
    "Hello. I hold the complete technical dossier on Mr. Gohel. Ask me anything.",
  ],
  about: [
    "Yash Gohel — alias Yash Stark — is a Software Developer with 3+ years of hands-on experience across professional roles, internships, and client-facing freelance projects.",
    "He specializes in C#, .NET, ASP.NET MVC, ASP.NET Core Web APIs, WPF, and SQL Server — the .NET ecosystem is his home turf.",
    "Based in Pune, Maharashtra, he builds business applications, integrates REST APIs and payment services, optimizes databases, and ships with CI/CD.",
  ],
  skills: [
    "His technical arsenal: C# and the .NET ecosystem — ASP.NET MVC, ASP.NET Core, Web API, WPF, Blazor, Entity Framework — plus SQL Server, Azure, React, and Next.js.",
    "Beyond code: SOLID principles, Clean Architecture, unit testing, code reviews, caching, and performance optimization are core disciplines.",
    "He also works with AI-assisted development daily — Claude, ChatGPT, Cursor, GitHub Copilot, and Gemini. The Skills page lists all seven categories.",
  ],
  experience: [
    "Most recent: Application Developer (.NET / WPF) at Capitoline Global Group, a FinTech in Pune — July 2026 to September 2026, building WPF applications with OpenStreetMap and Mapsui integrations.",
    "Before that: Full-Stack Developer at his own studio, YG Web Studio — January 2025 to June 2026 — delivering production web apps for real clients.",
    "He spent 2024 as a Software Engineer Intern on the .NET stack at The One Technologies in Ahmedabad, shipping ASP.NET Core APIs and improving query performance by 40%.",
  ],
  projects: [
    "Flagship build: NutriScan AI — an AI-powered food-label analyzer using Azure Computer Vision OCR and Azure OpenAI, with health scoring and expiry prediction. It is live.",
    "Through YG Web Studio he delivered three client productions: Jay-Ganesh Films Entertainment, Komal Jewellers e-commerce, and Madhukunj – Pure Veg.",
    "Madhukunj is a React SPA with dynamic menu filtering across 9 categories and 45 items, Framer Motion animations, and Google Maps integration.",
    "Komal Jewellers is a production e-commerce app on Next.js with MongoDB Atlas, a JWT-authenticated admin panel, and Cloudinary image management.",
    "And the origin story: Smart India Hackathon 2022 — National Level Winner, leading a six-member team on a Dairy Farm Management System.",
  ],
  dotnet: [
    ".NET is his primary specialization: ASP.NET MVC, ASP.NET Core Web APIs, .NET Framework, .NET Core, Entity Framework, EF Core, LINQ, and ADO.NET.",
    "He applies Dependency Injection, middleware, async/await, and Clean Architecture across business applications and microservices.",
    "On the desktop side he builds WPF Windows applications — including FinTech workflows with map-driven visualization at Capitoline Global Group.",
  ],
  wpf: [
    "WPF is one of his core tools — he develops C#/.NET Framework WPF applications for FinTech workflows using Visual Studio.",
    "His WPF work includes integrating OpenStreetMap and Mapsui with node-based rendering for map-driven data visualization, plus caching for responsiveness.",
  ],
  react: [
    "On the frontend he builds with React.js and Next.js — including Next.js 15 with server-rendered pages, API routes, and MongoDB-backed backends.",
    "Client productions built with React/Next.js: Jay-Ganesh Films Entertainment, Komal Jewellers, and Madhukunj – Pure Veg. He also has Angular/AngularJS experience from the SimpleTix frontend.",
  ],
  azure: [
    "His cloud home is Microsoft Azure — App Services, Functions, Azure SQL, Blob Storage, and Azure Monitoring.",
    "For NutriScan AI he uses Azure OpenAI and Azure Computer Vision, with GitHub Actions CI/CD. He also works with Azure DevOps, Docker, and GitLab pipelines.",
  ],
  ai: [
    "He develops AI-powered applications — NutriScan AI uses Azure Computer Vision OCR and Azure OpenAI to analyze food labels, score health, and predict expiry.",
    "Daily workflow is AI-assisted: Claude, Claude Code, ChatGPT, Cursor, GitHub Copilot, OpenAI Codex, Gemini, and Emergent.",
  ],
  ygwebstudio: [
    "YG Web Studio is his freelance venture — self-employed, January 2025 to June 2026, delivering client-facing websites and full-stack applications end-to-end.",
    "Deliveries included frontend development, backend APIs, database integration, deployment, and administration features for three production clients.",
  ],
  education: [
    "He holds a Bachelor of Engineering in Computer Engineering, specialized in Artificial Intelligence & Machine Learning, from Om Engineering College — 2021 to 2024, with an 8.96/10 CGPA.",
    "Before that, a Diploma of Engineering in Computer Engineering from 2018 to 2021 with an 8.00/10 CGPA.",
  ],
  certifications: [
    "Four certifications: Building Web APIs with ASP.NET Core 8 (July 2025), Containers with .NET and Docker (August 2025), Azure DevOps Foundation Course (April 2026), and Generative AI Mastermind by OutSkill (July 2025).",
  ],
  contact: [
    "You can reach Mr. Gohel at hello.yashgohel@gmail.com or +91 9409447069. He is based in Pune, Maharashtra, India.",
    "Links: GitHub — github.com/engineer-yash, LinkedIn — linkedin.com/in/yash-gohel. The Contact page form goes straight to his inbox.",
  ],
  fallback: [
    "Analyzing... I have full data on Yash's experience, .NET expertise, projects, education, certifications, and contact details. Try asking about one of those, sir.",
    "That query is outside my current databanks, sir. Ask me about Yash's skills, experience, projects, or how to contact him.",
  ],
};

// ------------------------------------------------------------
// SOCIAL LINKS — resume opens the latest Google Drive PDF
// ------------------------------------------------------------
export const socialLinks = {
  github: "https://github.com/engineer-yash",
  linkedin: "https://www.linkedin.com/in/yash-gohel",
  portfolio: "https://ironman-yash-stark.vercel.app",
  email: "hello.yashgohel@gmail.com",
  phone: "+91 9409447069",
  instagram: "https://www.instagram.com/yashu_gohel_",
  resume:
    "https://drive.google.com/file/d/17rSdtz68wmYuwKfwBpAu57VcqD9u7IIA/view?usp=sharing",
  projectRepo: "https://github.com/engineer-yash/ironman-yash-stark-portfolio",
};