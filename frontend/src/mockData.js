// Mock data for Tony Stark (Yash Gohel) Portfolio
export const personalInfo = {
  name: "Yash Gohel",
  alias: "Tony Stark",
  title: "Software Engineer & Full Stack Developer",
  tagline: "Genius, Billionaire, Playboy, Philanthropist... and Full Stack Developer",
  location: "Gujarat, India",
  email: "gohelyash11@gmail.com",
  phone: "+91 9409447069",
  profileImage: "https://customer-assets.emergentagent.com/job_d2fbc2f2-d986-4d3f-926b-807d09caf343/artifacts/jg7d8t3b_passportSize.jpg",
  bio: "Self-motivated Full Stack Developer / Software Engineer with hands-on experience in .NET Core, ASP.NET MVC, React JS, and SQL Server. Completed 5+ web projects, achieving 95%+ bug fixes and 40% performance gains. I value smart work, patience, and enjoy learning new technologies to build scalable, responsive applications.",
  starkBio: "Like Tony Stark, I build innovative solutions that push the boundaries of technology. My arc reactor? High-performance web applications. My suit? Clean, efficient code."
};

export const skills = {
  languages_frameworks: [
    { name: ".NET Web Stack (MVC, Core, ASP)", level: 90, category: "Backend" },
    { name: "React JS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "HTML5 & CSS3", level: 90, category: "Frontend" },
    { name: "SQL Server", level: 85, category: "Database" },
    { name: "RESTful Web APIs", level: 88, category: "API" }
  ],
  concepts: [
    "Agile Development",
    "SCRUM Methodology", 
    "Object Oriented Programming (OOP)",
    "Software Development Life Cycle (SDLC)",
    "Clean Architecture",
    "Microservices"
  ],
  tools: [
    "Visual Studio", "VS Code", "Microsoft SQL Server", "Bootstrap",
    "JIRA", "Sentry", "GitHub", "GitLab", "Swagger", "Postman"
  ]
};

export const experience = [
  {
    id: 1,
    title: "Software Engineer Intern", 
    company: "The One Technologies",
    location: "Ahmedabad, Gujarat",
    duration: "Jan 2024 – Oct 2024",
    type: "Internship",
    description: "Worked on event management platforms, focusing on ticketing systems, registration management, and real-time attendance tracking solutions.",
    achievements: [
      "Delivered 20+ tasks in JIRA including bug fixes and front-end/back-end enhancements within weekly sprint deadlines, improving stability and reducing UI glitches by 15%",
      "Built RESTful APIs using ASP.NET Core integrated with SQL Server, improving backend response time by 10%",
      "Resolved over 95% of QA bugs using the Sentry Platform in collaboration with senior developers, enhancing stability",
      "Used GitLab for source control and CI/CD pipelines, streamlining deployment workflows"
    ],
    technologies: ["ASP.NET Core", "SQL Server", "GitLab", "Sentry", "JIRA"],
    starkEquivalent: "Like developing the Mark 42 suit - iterative improvements with each deployment"
  }
];

export const projects = [
  {
    id: 1,
    title: "SpectrOm'23 – Mega National Event Web Portal", 
    type: "College Project",
    duration: "Dec 2022 – Feb 2023",
    status: "Completed",
    description: "Designed and implemented a responsive registration portal for a national-level college event.",
    technologies: ["HTML5", "CSS3", "JavaScript", "QR Code Integration", "Email APIs"],
    features: [
      "Responsive registration portal",
      "QR code-based gate entry system",
      "Automated email notifications",
      "Mobile-optimized interface",
      "Real-time registration tracking"
    ],
    achievements: [
      "Increased user convenience by 80%",
      "Achieved 100% mobile responsiveness", 
      "Handled 20+ last-minute changes from faculty",
      "Boosted event registrations by 2x compared to previous years"
    ],
    starkTech: "Arc Reactor Interface - Clean energy powering seamless user experiences"
  },
  {
    id: 2,
    title: "Smart India Hackathon 2022 Project",
    type: "Dairy Farm Management System",
    duration: "Apr 2022 – Aug 2022", 
    status: "Winner - National Level",
    description: "Real-time farm management system developed for Smart India Hackathon as part of a 6-member team.",
    technologies: ["Full Stack Development", "Real-time Systems", "Database Management"],
    features: [
      "Real-time livestock monitoring",
      "Automated feeding schedules",
      "Health tracking dashboard",
      "Production analytics",
      "Mobile app integration"
    ],
    achievements: [
      "Won Smart India Hackathon - National Level",
      "Led 6-member development team",
      "Maintained 100% team collaboration",
      "Delivered under tight deadline pressure"
    ],
    starkTech: "FRIDAY AI System - Intelligent automation for complex operations"
  }
];

export const education = {
  institution: "Om Engineering College (Gujarat Technological University)",
  location: "Junagadh, Gujarat",
  degree: "Bachelor of Engineering in Computer Engineering",
  cgpa: "8.96/10",
  year: "2021",
  coursework: [
    "Artificial Intelligence & Machine Learning",
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Management Systems",
    "Effective Technical Communication",
    "Digital Fundamentals",
    "Microprocessors",
    "Computer Networks"
  ]
};

export const certifications = [
  {
    id: 1,
    title: "Professional Blog Creator Badge & Certificate",
    issuer: "Professional Blogging Platform",
    date: "Mar 2024 – Apr 2024",
    type: "Certificate",
    description: "Recognized for creating high-quality technical blog content",
    links: ["Blog1", "Blog2", "Blog3"],
    certificateLink: "https://drive.google.com/file/d/1-dFtymQDIBHFVuMfNJkFyAxYMPFvDjUK/view?usp=drivesdk"
  },
  {
    id: 2,
    title: "React JS – Summer Internship",
    issuer: "InfoLabz",
    date: "July 2023 – Aug 2023", 
    type: "Internship Certificate",
    description: "Completed intensive React JS training and practical project development",
    certificateLink: "https://drive.google.com/file/d/10kU2_7Am3sMfTXttUpLOk6J2SdAyQ41k/view?usp=drivesdk"
  },
  {
    id: 3,
    title: "Specialization in Artificial Intelligence & Machine Learning",
    issuer: "Gujarat Technological University",
    date: "Aug 2022 – May 2024",
    type: "Specialization Certificate", 
    description: "Advanced coursework in AI/ML concepts and practical implementation",
    certificateLink: "https://drive.google.com/file/d/10L3D90IvDTWGWpAw-6fRRSjxLYJir7uD/view?usp=drivesdk"
  }
];

export const jarvisResponses = {
  greeting: [
    "Good evening, Mr. Stark. JARVIS at your service.",
    "Welcome to the digital workshop of Yash Gohel, also known as Tony Stark.",
    "Systems online. All lab interfaces are ready for your exploration."
  ],
  about: [
    "Mr. Stark is a brilliant software engineer specializing in full-stack development, much like how you engineer your suits.",
    "Like Tony Stark, Yash combines innovation with practical engineering - building scalable web applications instead of arc reactors.",
    "A genius engineer who turns complex problems into elegant solutions, one line of code at a time."
  ],
  skills: [
    "Mr. Stark's technical arsenal includes .NET Core, React JS, and SQL Server - his weapons of choice for digital innovation.",
    "Like your suit's repulsors, his skills in REST APIs and full-stack development pack quite a punch.",
    "His proficiency in modern web technologies rivals your expertise in advanced robotics."
  ],
  projects: [
    "SpectrOm'23 was like building the first Arc Reactor - a breakthrough that changed everything.",
    "The Dairy Farm Management System earned him national recognition, much like your first public appearance as Iron Man.",
    "His project portfolio demonstrates the same innovation I observe in your suit iterations - continuous improvement and adaptation."
  ]
};

export const achievements = [
  "National level Smart India Hackathon winner", 
  "Led 6-member development team successfully",
  "95%+ bug resolution rate across all projects",
  "2x increase in event registrations for SpectrOm'23",
  "40% performance improvement in web applications",
  "Delivered 20+ sprint tasks ahead of deadlines"
];

export const socialLinks = {
  github: "https://github.com/engineer-yash",
  linkedin: "https://www.linkedin.com/in/yash-gohel",
  instagram: "https://www.instagram.com/yashu_gohel_",
  email: "gohelyash11@gmail.com",
  resume: "https://drive.google.com/file/d/107HWlJZGm_D_N7nIxqU5itISy4b7bB_Z/view?usp=sharing",
  blog1: "https://theonetechnologies.com/blog/post/best-practices-to-follow-for-creating-custom-web-solutions",
  blog2: "https://theonetechnologies.com/blog/post/2024-vision-the-future-of-web-development", 
  blog3: "https://theonetechnologies.com/blog/post/top-5-html-css-tools-to-boost-website-design-and-development-efficiency",
  projectRepo: "https://github.com/engineer-yash/ironman-yash-stark-portfolio"
};
