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
  teamRabbitCode: "https://github.com/greeshmaneelathi/Team-Rabbit",
  aiReadmissionCode: "https://github.com/greeshmaneelathi/ai-patient-readmission-predictor",
  logAnomalyCode: "https://github.com/greeshmaneelathi/distributed-log-anomaly-detection",
  realtimeChatCode: "https://github.com/greeshmaneelathi/scalable-realtime-chat",
};

const stats = [
  { label: "API performance gain", value: "25%" },
  { label: "Application performance boost", value: "20%" },
  { label: "Response time reduction", value: "30%" },
  { label: "Regression effort reduced", value: "35%" },
  { label: "Telemetry scale", value: "Millions" },
  { label: "Users supported", value: "Enterprise" },
];

const skills = {
  "Backend Engineering": [
    "C#",
    ".NET 8",
    "ASP.NET Core",
    "REST APIs",
    "Web API",
    "JSON",
    "Distributed Services",
  ],
  Frontend: ["React", "Blazor", "JavaScript", "TypeScript", "Frontend Components"],
  Databases: [
    "SQL Server",
    "PostgreSQL",
    "Relational Databases",
    "Query Optimization",
  ],
  "Cloud & DevOps": [
    "CI/CD Pipelines",
    "Azure DevOps",
    "GitHub",
    "Vercel",
    "Cloud Applications",
  ],
  Tools: ["Git", "Visual Studio", "Postman", "Salesforce CRM"],
  "Engineering Practices": [
    "Microservices",
    "Agile/Scrum",
    "API Integrations",
    "Performance Optimization",
    "Automation Frameworks",
    "Data Pipelines",
  ],
};

const experience = [
  {
    company: "AVEVA",
    location: "California",
    role: "Software Engineer",
    dates: "Jun 2025 – Present",
    highlights: [
      "Developed scalable REST APIs using C# and ASP.NET supporting cloud-based telemetry systems processing large real-time data streams.",
      "Optimized backend services and SQL queries, improving API response performance and system reliability for enterprise applications.",
      "Designed JSON and XML service contracts enabling reliable communication between distributed backend services.",
      "Integrated backend services with CI/CD pipelines to improve deployment stability and release automation.",
    ],
  },
  {
    company: "San Bernardino County",
    location: "California",
    role: "Software Engineer Intern",
    dates: "Feb 2025 – Apr 2025",
    highlights: [
      "Modernized legacy .NET applications and built backend APIs supporting internal government web systems.",
      "Developed Blazor-based UI components and integrated REST APIs to improve system usability and performance.",
      "Supported secure application architecture, authentication workflows, and backend service integration.",
      "Participated in Agile development cycles including sprint planning, testing, and debugging production issues.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    location: "India",
    role: "Software Engineer in Test",
    dates: "Jan 2020 – Jul 2023",
    highlights: [
      "Built automation testing frameworks using Java and C++ improving regression stability across distributed financial systems.",
      "Validated Salesforce CRM workflows and REST API integrations for insurance and banking platforms including Transamerica and Citibank systems.",
      "Conducted performance and load testing for enterprise financial applications, identifying bottlenecks and improving system reliability.",
      "Performed SOQL-based data validation to ensure CRM data integrity and reporting accuracy.",
      "Collaborated with developers in Agile teams to debug issues and support stable production releases.",
    ],
  },
  {
    company: "Dartin Technologies",
    location: "India",
    role: "Jr. Software Engineer",
    dates: "May 2019 – Jan 2020",
    highlights: [
      "Developed web applications integrating REST APIs and backend services supporting enterprise business systems.",
      "Implemented SQL queries and database integrations improving application data processing and reliability.",
      "Debugged backend services and resolved application stability issues in production environments.",
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
    title: "AI-Based Patient Readmission Risk Predictor",
    org: "GitHub Project",
    tags: ["Python", "scikit-learn", "FastAPI", "Machine Learning", "Healthcare AI"],
    bullets: [
      "Built a machine learning system to predict 30-day hospital readmission risk using structured healthcare data.",
      "Designed API-accessible prediction workflows for real-time backend integration using FastAPI.",
      "Focused on model evaluation, prediction reliability, and practical healthcare decision support workflows.",
    ],
    links: [{ label: "Code", href: links.aiReadmissionCode }],
  },
  {
    title: "Distributed Log Anomaly Detection",
    org: "GitHub Project",
    tags: ["Python", "Kafka", "Docker", "Kubernetes", "Distributed Systems"],
    bullets: [
      "Developed a real-time distributed log analysis system to identify anomalous events across streaming infrastructure.",
      "Integrated Kafka-based event ingestion with machine learning workflows for scalable anomaly detection.",
      "Used containerized deployment patterns to support distributed processing and production-style observability use cases.",
    ],
    links: [{ label: "Code", href: links.logAnomalyCode }],
  },
  {
    title: "Scalable Realtime Chat",
    org: "GitHub Project",
    tags: ["Python", "WebSockets", "Redis", "PostgreSQL", "Docker"],
    bullets: [
      "Built a full-stack real-time chat system using WebSockets for low-latency bidirectional communication.",
      "Integrated Redis pub/sub for message distribution and PostgreSQL for persistent conversation storage.",
      "Designed the application for scalability, modular backend processing, and containerized deployment.",
    ],
    links: [{ label: "Code", href: links.realtimeChatCode }],
  },
  {
    title: "Math Kids with Rabbit – Game Development",
    org: "California State University, San Bernardino",
    tags: ["C++", "Cross-Platform Development", "Performance"],
    bullets: [
      "Developed cross-platform gameplay logic in C++ supporting Android and iOS environments.",
      "Improved frame stability and gameplay responsiveness through rendering and state-management optimizations.",
      "Designed interactive UI elements and gameplay mechanics to enhance user engagement for educational gaming.",
    ],
    links: [{ label: "Code", href: links.teamRabbitCode }],
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm">
      {children}
    </span>
  );
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
          className={`rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${
            link.label === "Live"
              ? "bg-neutral-900 text-white hover:bg-neutral-800"
              : "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-3xl text-neutral-600">{subtitle}</p> : null}
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
          className={`rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${
            link.label === "Live"
              ? "bg-neutral-900 text-white hover:bg-neutral-800"
              : "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold tracking-tight">
            Yaso Greeshma Neelathi
          </a>

          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <a className="hover:text-neutral-900" href="#about">About</a>
            <a className="hover:text-neutral-900" href="#skills">Skills</a>
            <a className="hover:text-neutral-900" href="#experience">Experience</a>
            <a className="hover:text-neutral-900" href="#projects">Projects</a>
            <a className="hover:text-neutral-900" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl bg-neutral-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 md:inline-flex transition-transform duration-200 hover:-translate-y-0.5"
            >
              Resume
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50 transition-transform duration-200 hover:-translate-y-0.5"
            >
              LinkedIn
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50 transition-transform duration-200 hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 py-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to Software Engineer · Backend Engineer · Full Stack Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 text-4xl font-bold tracking-tight md:text-6xl"
            >
              Building scalable APIs, modern web applications, and reliable backend systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600"
            >
              Software Engineer focused on C#, .NET, React, REST APIs, SQL systems, and cloud-based application delivery.
              I build performant backend services, modernize legacy platforms, and create production-ready software that improves reliability, speed, and developer efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 transition-transform duration-200 hover:-translate-y-0.5"
              >
                View Projects
              </a>

              <a
                href="#experience"
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Experience
              </a>

              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {["C#", ".NET", "React", "REST APIs", "SQL Server", "PostgreSQL", "CI/CD"].map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold">Impact snapshot</h3>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                  >
                    <div className="text-2xl font-semibold tracking-tight">{stat.value}</div>
                    <div className="mt-1 text-sm text-neutral-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-neutral-900 p-4 text-white">
                <div className="text-sm font-semibold">What I bring</div>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-white/10 px-3 py-1">Backend APIs</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">System modernization</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Cloud delivery</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Performance optimization</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-14">
          <Section
            id="about"
            title="About"
            subtitle="Software engineering across enterprise systems, cloud applications, and production-ready backend services."
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <p className="leading-relaxed text-neutral-700">
                I build software at the intersection of backend engineering, modern web development, and scalable system design.
                My work includes creating REST APIs, modernizing legacy applications, integrating cloud-based deployment pipelines,
                improving database performance, and delivering reliable application experiences across enterprise and government systems.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>ASP.NET Core</Pill>
                <Pill>Web APIs</Pill>
                <Pill>Blazor</Pill>
                <Pill>React</Pill>
                <Pill>SQL Optimization</Pill>
                <Pill>Azure DevOps</Pill>
                <Pill>Microservices</Pill>
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
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
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
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                      <div className="mt-1 text-sm text-neutral-600">
                        <span className="font-medium text-neutral-800">{job.company}</span> · {job.location}
                      </div>
                    </div>
                    <div className="text-sm text-neutral-600 md:text-right">{job.dates}</div>
                  </div>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
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
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{project.org}</p>
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

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
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
            subtitle="Open to software engineering opportunities across backend systems, full-stack applications, and cloud-native platforms."
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <a href={links.email} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100 transition">
                  <div className="text-sm text-neutral-600">Email</div>
                  <div className="mt-1 font-semibold">yneelathi0511@gmail.com</div>
                </a>

                <a href={links.phone} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100 transition">
                  <div className="text-sm text-neutral-600">Phone</div>
                  <div className="mt-1 font-semibold">+1 909-380-6984</div>
                </a>

                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100 transition"
                >
                  <div className="text-sm text-neutral-600">LinkedIn</div>
                  <div className="mt-1 font-semibold">Open profile</div>
                </a>

                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100 transition"
                >
                  <div className="text-sm text-neutral-600">GitHub</div>
                  <div className="mt-1 font-semibold">View repos</div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-neutral-900 p-5 text-white">
                <div className="text-sm font-semibold">Current focus</div>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Building production-ready software with strong foundations in backend APIs, cloud deployment, modern frontend integration, and performance-aware engineering.
                </p>
              </div>
            </motion.div>
          </Section>
        </div>

        <footer className="pb-14 pt-4 text-sm text-neutral-500">
          <div className="border-t border-neutral-200 pt-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Yaso Greeshma Neelathi</div>
              <div className="flex flex-wrap gap-4">
                <a className="hover:text-neutral-800" href={links.email}>Email</a>
                <a className="hover:text-neutral-800" href={links.phone}>Phone</a>
                <a className="hover:text-neutral-800" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:text-neutral-800" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}