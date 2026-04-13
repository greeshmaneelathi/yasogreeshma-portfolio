import React from "react";
import { motion } from "framer-motion";

const links = {
  email: "mailto:yneelathi0511@gmail.com",
  phone: "tel:+19093806984",
  linkedin: "https://www.linkedin.com/in/yaso-greeshma-n-33783414b/",
  github: "https://github.com/greeshmaneelathi",
  resume: "https://drive.google.com/file/d/1HBSDaoyU5EG6Ho7jmzlGSlHqCI4FcJmd/view?usp=sharing",
  portfolioLive: "https://yasogreeshma-portfolio.vercel.app",
  portfolioCode: "https://github.com/greeshmaneelathi/yasogreeshma-portfolio",
  healthcareRagCode: "https://github.com/greeshmaneelathi/healthcare-rag-agent",
  mathKidsCode: "https://github.com/greeshmaneelathi/Team-Rabbit",
  aiReadmissionCode: "https://github.com/greeshmaneelathi/ai-patient-readmission-predictor",
  logAnomalyCode: "https://github.com/greeshmaneelathi/distributed-log-anomaly-detection",
  realtimeChatCode: "https://github.com/greeshmaneelathi/scalable-realtime-chat",
};

const stats = [
  { label: "Response time reduction", value: "30%" },
  { label: "Regression effort reduced", value: "35%" },
  { label: "Application performance gain", value: "20%" },
  { label: "API / backend improvement", value: "25%" },
  { label: "Systems supported", value: "Enterprise" },
  { label: "Architecture focus", value: "Scalable" },
];

const skills = {
  "Backend Engineering": [
    "C#",
    ".NET",
    "ASP.NET Core",
    "ASP.NET Web API",
    "REST APIs",
    "Entity Framework Core",
    "WCF Services",
    "Azure Functions",
  ],
  Frontend: [
    "React",
    "Angular 14",
    "Blazor",
    "MVC",
    "JavaScript",
    "TypeScript",
  ],
  Databases: [
    "SQL Server",
    "PostgreSQL",
    "Stored Procedures",
    "Triggers",
    "Views",
    "Indexes",
    "Query Optimization",
  ],
  "Cloud & DevOps": [
    "Azure DevOps",
    "CI/CD Pipelines",
    "Azure Logic Apps",
    "Azure Data Factory",
    "Azure Storage",
    "Vercel",
    "Docker",
  ],
  Testing: [
    "API Testing",
    "Integration Testing",
    "Regression Testing",
    "Load Testing",
    "Selenium",
    "System Validation",
  ],
  Architecture: [
    "Distributed Systems",
    "Legacy Modernization",
    "Microservices",
    "Role-Based Security",
    "Batch Processing",
    "Cross-System Integration",
  ],
};

const experience = [
  {
    company: "San Bernardino County",
    location: "California",
    role: "Software Engineer",
    dates: "Feb 2025 – Present",
    highlights: [
      "Modernized a legacy, customer-facing platform by enhancing the user interface with Angular and the backend with ASP.NET Web API, significantly improving performance, scalability, and user experience.",
      "Supported applications used across multiple school districts, contributing to critical workflows including student enrollment, staff management, scheduling, billing, and operational administration.",
      "Developed and enhanced the Property Information Management System (PIMS) using ASP.NET Core, MVC, Blazor, Angular 14, Entity Framework Core, and Azure Functions to deliver scalable and high-performing application architecture.",
      "Integrated Azure Logic Apps, Azure Data Factory, and Azure Storage to automate ETL workflows, document routing, and cross-system data synchronization across county platforms.",
      "Built secure REST and WCF services enabling real-time data exchange between Laserfiche, SQL Server, third-party applications, and internal county systems.",
      "Led modernization of legacy VB6 and WinForms modules into .NET Core and WPF components, improving maintainability, continuity, and long-term system stability while reducing technical debt.",
      "Designed and optimized SQL Server schemas, stored procedures, triggers, views, and indexes to support high-performance transactional processing and reliable backend workflows.",
      "Implemented role-based authentication and authorization in ASP.NET Core using Azure AD and modern identity practices.",
      "Managed Azure DevOps CI/CD pipelines for automated builds, testing, and deployments across development, staging, and production environments.",
      "Produced architecture documentation, API specifications, deployment checklists, and training materials while supporting post-deployment operations, batch processing, print management, and end-user adoption.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    role: "Software Development and Testing",
    dates: "Jan 2020 – Jul 2023",
    highlights: [
      "Built automation frameworks supporting distributed enterprise systems across financial platforms.",
      "Conducted load, stress, and endurance testing to analyze application performance under peak traffic conditions.",
      "Identified architectural bottlenecks and collaborated with backend teams to improve scalability and reliability.",
      "Supported release validation and production readiness for large-scale systems.",
      "Validated SQL-backed workflows, CRM integrations, and API-driven business processes across insurance and banking platforms.",
    ],
  },
  {
    company: "Dartin Technologies",
    location: "Hyderabad, India",
    role: "Junior Software Developer",
    dates: "May 2019 – Jan 2020",
    highlights: [
      "Worked on enterprise web applications built using Java and .NET technologies.",
      "Validated REST APIs and supported backend verification through SQL queries.",
      "Contributed to early-stage automation efforts using Selenium and supported CI build validation.",
      "Participated in defect lifecycle tracking and structured release workflows in Agile environments.",
    ],
  },
];

const projects = [
  {
    title: "Technical Portfolio Website",
    org: "Personal Project",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub", "Vercel"],
    bullets: [
      "Designed and deployed a responsive web application to showcase engineering projects and technical experience.",
      "Optimized UI components and page rendering performance using modern frontend tooling including Vite and Tailwind CSS.",
      "Deployed production builds using GitHub and Vercel, enabling automated deployment workflows.",
    ],
    links: [
      { label: "Live", href: links.portfolioLive },
      { label: "Code", href: links.portfolioCode },
    ],
  },
  {
    title: "Healthcare RAG Agent",
    org: "GitHub Project",
    tags: ["Python", "RAG", "LLM", "Healthcare", "APIs"],
    bullets: [
      "Built a retrieval-augmented generation system for healthcare-focused question answering using document-grounded responses.",
      "Designed backend workflows for document ingestion, context retrieval, and prompt orchestration across a structured pipeline.",
      "Focused on reliable information retrieval, modular architecture, and scalable AI-assisted response generation.",
    ],
    links: [{ label: "Code", href: links.healthcareRagCode }],
  },
  {
    title: "AI-Based Patient Readmission Risk Predictor",
    org: "GitHub Project",
    tags: ["Python", "Machine Learning", "FastAPI", "Healthcare AI"],
    bullets: [
      "Built a machine learning system to predict hospital readmission risk using structured healthcare datasets.",
      "Developed API-accessible prediction workflows for real-time backend integration.",
      "Evaluated model performance and supported healthcare decision workflows through predictive analytics.",
    ],
    links: [{ label: "Code", href: links.aiReadmissionCode }],
  },
  {
    title: "Distributed Log Anomaly Detection",
    org: "GitHub Project",
    tags: ["Python", "Kafka", "Docker", "Kubernetes", "Distributed Systems"],
    bullets: [
      "Developed a distributed log analysis system to identify anomalous events across streaming infrastructure.",
      "Integrated event ingestion with machine learning workflows for scalable anomaly detection use cases.",
      "Used containerized deployment patterns to support observability-oriented distributed processing.",
    ],
    links: [{ label: "Code", href: links.logAnomalyCode }],
  },
  {
    title: "Scalable Realtime Chat",
    org: "GitHub Project",
    tags: ["Python", "WebSockets", "Redis", "PostgreSQL", "Docker"],
    bullets: [
      "Built a real-time chat application using WebSockets for low-latency bidirectional communication.",
      "Integrated Redis pub/sub for message distribution and PostgreSQL for persistent conversation storage.",
      "Designed the backend for scalability, modular processing, and containerized deployment.",
    ],
    links: [{ label: "Code", href: links.realtimeChatCode }],
  },
  {
    title: "Math Kids with Rabbit – Mobile Game",
    org: "California State University, San Bernardino",
    tags: ["C++", "Cross-Platform Development", "Performance"],
    bullets: [
      "Developed cross-platform gameplay logic in C++ supporting Android and iOS environments.",
      "Improved frame stability and gameplay responsiveness through rendering and state-management optimizations.",
      "Designed interactive UI elements and gameplay mechanics to enhance user engagement for educational gaming.",
    ],
    links: [{ label: "Code", href: links.mathKidsCode }],
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function ProjectLinks({ linksList = [] }) {
  if (!linksList?.length) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {linksList.map((link) => (
        <a
          key={`${link.label}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`rounded-2xl px-4 py-2 text-sm font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
            link.label === "Live"
              ? "bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 text-white hover:from-blue-700 hover:via-violet-700 hover:to-fuchsia-600"
              : "border border-slate-200 bg-white/85 text-slate-900 hover:bg-white"
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[4rem] h-[24rem] w-[24rem] rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[25%] h-[24rem] w-[24rem] rounded-full bg-pink-400/15 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#top" className="font-semibold tracking-tight text-slate-900">
            Yaso Greeshma Neelathi
          </a>

          <nav className="hidden gap-7 text-sm text-slate-600 lg:flex">
            <a className="transition hover:text-slate-900" href="#about">About</a>
            <a className="transition hover:text-slate-900" href="#skills">Skills</a>
            <a className="transition hover:text-slate-900" href="#experience">Experience</a>
            <a className="transition hover:text-slate-900" href="#projects">Projects</a>
            <a className="transition hover:text-slate-900" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 px-3 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
            >
              Resume
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              LinkedIn
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to Software Engineer · Backend Engineer · Full Stack Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-6 bg-gradient-to-r from-blue-700 via-violet-600 to-fuchsia-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl xl:text-7xl"
            >
              Building scalable APIs, modern applications, and high-impact software systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
            >
              Software Engineer focused on backend architecture, platform modernization, cloud-integrated systems, and production-ready application delivery.
              I build maintainable software with strong foundations in .NET, Angular, Blazor, REST services, SQL optimization, and CI/CD automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                View Projects
              </a>

              <a
                href="#experience"
                className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                Experience
              </a>

              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="mt-6 flex flex-wrap gap-2"
            >
              {["C#", ".NET", "Angular", "Blazor", "REST APIs", "SQL Server", "Azure DevOps"].map((item) => (
                <motion.div key={item} variants={fadeUp}>
                  <Pill>{item}</Pill>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="rounded-[28px] border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">Impact snapshot</h3>
                <span className="rounded-full bg-gradient-to-r from-blue-100 to-violet-100 px-3 py-1 text-xs font-medium text-slate-700">
                  Metrics-first
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 p-4"
                  >
                    <div className="text-2xl font-semibold tracking-tight text-slate-900">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 text-white">
                <div className="text-sm font-semibold">Engineering strengths</div>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-white/10 px-3 py-1">Platform modernization</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Backend architecture</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Cloud workflows</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Performance tuning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-14">
          <Section
            id="about"
            title="About"
            subtitle="Engineering scalable systems across web applications, enterprise workflows, backend services, and modernized platforms."
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="rounded-[28px] border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            >
              <p className="leading-relaxed text-slate-700">
                I work across backend engineering, application modernization, and scalable software delivery.
                My experience includes modernizing legacy systems, building secure APIs, integrating cloud workflows,
                optimizing SQL performance, and delivering enterprise applications used in real operational environments.
                I enjoy taking complex, aging systems and turning them into reliable, maintainable, modern software platforms.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>ASP.NET Core</Pill>
                <Pill>Angular 14</Pill>
                <Pill>Blazor</Pill>
                <Pill>Entity Framework Core</Pill>
                <Pill>Azure Functions</Pill>
                <Pill>SQL Server</Pill>
                <Pill>WCF</Pill>
              </div>
            </motion.div>
          </Section>
        </div>

        <div className="py-14">
          <Section id="skills" title="Skills">
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className="rounded-[28px] border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-base font-semibold">{group}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        <div className="py-14">
          <Section id="experience" title="Experience">
            <div className="grid gap-4">
              {experience.map((job) => (
                <motion.div
                  key={job.company + job.role}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className="rounded-[28px] border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                      <div className="mt-1 text-sm text-slate-600">
                        <span className="font-medium text-slate-800">{job.company}</span> · {job.location}
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 md:text-right">{job.dates}</div>
                  </div>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        <div className="py-14">
          <Section id="projects" title="Projects">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{project.org}</p>
                    </div>

                    <div className="hidden flex-wrap justify-end gap-2 md:flex">
                      {project.tags.map((tag) => (
                        <Pill key={tag}>{tag}</Pill>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 md:hidden">
                    {project.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  <ProjectLinks linksList={project.links} />
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        <div className="py-14">
          <Section
            id="contact"
            title="Contact"
            subtitle="Open to software engineering opportunities across backend systems, full-stack applications, platform engineering, and cloud-native systems."
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[28px] border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <a href={links.email} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:bg-white">
                  <div className="text-sm text-slate-600">Email</div>
                  <div className="mt-1 font-semibold">yneelathi0511@gmail.com</div>
                </a>

                <a href={links.phone} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:bg-white">
                  <div className="text-sm text-slate-600">Phone</div>
                  <div className="mt-1 font-semibold">+1 909-380-6984</div>
                </a>

                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:bg-white"
                >
                  <div className="text-sm text-slate-600">LinkedIn</div>
                  <div className="mt-1 font-semibold">Open profile</div>
                </a>

                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:bg-white"
                >
                  <div className="text-sm text-slate-600">GitHub</div>
                  <div className="mt-1 font-semibold">View repos</div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-5 text-white">
                <div className="text-sm font-semibold">Current focus</div>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Building production-ready software with strong foundations in backend APIs, system modernization, cloud workflows, SQL optimization, and maintainable application architecture.
                </p>
              </div>
            </motion.div>
          </Section>
        </div>

        <footer className="pb-14 pt-4 text-sm text-slate-500">
          <div className="border-t border-slate-200 pt-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Yaso Greeshma Neelathi</div>
              <div className="flex flex-wrap gap-4">
                <a className="hover:text-slate-800" href={links.email}>Email</a>
                <a className="hover:text-slate-800" href={links.phone}>Phone</a>
                <a className="hover:text-slate-800" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:text-slate-800" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}