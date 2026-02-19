import React from "react";
import { motion } from "framer-motion";

/**
 * ✅ Update these links (only if needed)
 * NOTE: Replace Math Kids repo placeholder with your real repo URL.
 */
const links = {
  email: "mailto:yneelathi0511@gmail.com",
  phone: "tel:+19093806984",
  linkedin: "https://www.linkedin.com/in/yaso-greeshma-n-33783414b/",
  github: "https://github.com/greeshmaneelathi",
  resume:
    "https://drive.google.com/drive/folders/1jqEcLyQIuGoiGt4lcVi0YPvvVxcq41iG",

  // Your live portfolio
  portfolioLive: "https://yasogreeshma-portfolio.vercel.app",

  // This repo (portfolio code) - if you want a direct repo link
  portfolioCode: "https://github.com/greeshmaneelathi/yasogreeshma-portfolio",

  // ✅ REPLACE THIS with your real Math Kids repo URL
  mathKidsCode: "https://github.com/greeshmaneelathi/REPLACE_WITH_MATH_KIDS_REPO",
};

const stats = [
  { label: "Years experience", value: "5+" },
  { label: "Concurrent users tested", value: "500K+" },
  { label: "Defect reduction", value: "30%" },
  { label: "Latency reduction", value: "30%" },
  { label: "Stability improvement", value: "25%" },
  { label: "Availability target", value: "99.9%" },
];

const skills = {
  Programming: ["Java", "Python", "SQL", "JavaScript"],
  "Automation Frameworks": ["Selenium WebDriver", "TestNG", "JUnit", "REST Assured"],
  "API Testing": ["REST API validation", "API stubbing (CA LISA)", "Postman"],
  "Performance Engineering": ["JMeter", "LoadRunner", "Load/Stress/Endurance Testing"],
  "Monitoring & Debugging": ["Splunk", "AppDynamics", "Dynatrace", "Root Cause Analysis"],
  "CI/CD & DevOps": ["Jenkins", "GitHub Actions", "Docker", "Git"],
  Architecture: ["Microservices", "Distributed Systems", "JVM tuning", "Garbage Collection"],
  Databases: ["MySQL", "Query Optimization", "Indexing"],
};

const experience = [
  {
    company: "AVEVA",
    location: "California",
    role: "Software Developer & Quality Assurance Engineer",
    dates: "Jun 2025 – Present",
    highlights: [
      "Validated backend microservices and REST APIs powering AVEVA Connect Visualization Services, supporting high availability and W3C-aligned standards.",
      "Designed test planning strategies for real-time telemetry ingestion and data aggregation workflows to ensure visualization accuracy in Scrum teams.",
      "Tested distributed data processing services handling high-volume industrial telemetry streams under Agile development workflows.",
      "Identified and reproduced intermittent API timeouts and data synchronization issues in staging, improving reliability and release confidence.",
      "Partnered with engineers during sprint planning to improve testability and reduce ambiguity in functional requirements.",
      "Strengthened regression stability by formalizing API validation scenarios and system testing; improved defect traceability documentation and reporting.",
    ],
  },
  {
    company: "San Bernardino County",
    location: "California",
    role: "Software Developer & QA",
    dates: "Feb 2025 – Apr 2025",
    highlights: [
      "Tested modernization of legacy government applications upgraded to Angular (front end) and ASP.NET Web API (backend), focusing on post-production QA and accessibility.",
      "Designed and executed functional, regression, and integration scenarios for customer-facing platforms supporting enrollment, staff management, scheduling, and billing workflows.",
      "Performed end-to-end API validation for ASP.NET Web API services, verifying request/response payloads and backend business logic.",
      "Conducted SQL-based database validation to ensure data integrity across enrollment and financial transaction modules.",
      "Executed cross-browser testing for Angular UI components to validate responsiveness and usability improvements.",
      "Validated performance improvements after architectural upgrades, ensuring improved responsiveness and reduced latency.",
      "Supported release readiness by executing regression suites before production deployments; collaborated closely during modernization sprints.",
    ],
  },
  {
    company: "Tata Consultancy Services (Client: Transamerica, CitiBank)",
    location: "India",
    role: "Software Engineer in Test",
    dates: "Jan 2020 – Jul 2023",
    highlights: [
      "Led SIT, regression, smoke, and UAT validation for insurance and annuity administration platforms; ensured test coverage aligned to acceptance criteria.",
      "Built Selenium WebDriver automation in Java + TestNG, reducing repetitive regression effort by 35%; structured frameworks using Page Object Model for scalability.",
      "Validated REST APIs and backend integrations; verified database consistency using SQL queries; partnered with developers to reduce defect resolution time by 25%.",
      "Owned end-to-end performance validation for high-volume financial applications with strict SLA compliance.",
      "Designed and executed load, stress, and endurance scenarios using JMeter and LoadRunner; monitored response time, throughput, CPU/memory, and thread behavior.",
      "Performed RCA using Splunk, AppDynamics, and Dynatrace; tuned JVM garbage collection and optimized database indexing to reduce peak response time by 30% and improve stability by 25%.",
      "Implemented API stubbing/service virtualization using CA LISA to isolate dependencies; integrated performance tests into CI/CD for automated performance regression.",
    ],
  },
  {
    company: "Dartin Technologies",
    location: "India",
    role: "Jr. Software Engineer",
    dates: "May 2019 – Jan 2020",
    highlights: [
      "Developed manual and automated test cases for client-facing web applications.",
      "Built Selenium-based regression automation; improved release validation speed and consistency.",
      "Validated REST API responses using Postman and verified backend DB consistency with SQL.",
      "Participated in CI build validation and defect lifecycle tracking in Jira within Agile workflows.",
    ],
  },
];

const projects = [
  {
    title: "Technical Portfolio Website (Live Deployment)",
    org: "Personal Project",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub", "Vercel"],
    bullets: [
      "Designed and developed a fully responsive portfolio to showcase QA, performance engineering, and distributed systems expertise.",
      "Implemented animated UI components using Framer Motion to enhance engagement and professional presentation.",
      "Integrated contact actions (mailto, tel), external profile linking (LinkedIn, GitHub), and structured impact metrics.",
      "Deployed a production-ready build via a GitHub-based workflow and Vercel hosting; structured content around measurable impact (latency, stability, scalability).",
    ],
    links: [
      { label: "Live", href: links.portfolioLive },
      { label: "Code", href: links.portfolioCode },
    ],
  },
  {
    title: "Math Kids with Rabbit – Game Development",
    org: "California State University, San Bernardino",
    tags: ["C++", "Mobile", "Performance", "UX", "Accessibility"],
    bullets: [
      "Developed a cross-platform educational mobile game (Android & iOS) with gameplay mechanics, scoring logic, physics behavior, and interactive chat features.",
      "Engineered optimized C++ logic and state management for smooth performance across diverse mobile devices.",
      "Resolved state conflicts and optimized rendering pipelines to reduce latency and improve frame stability.",
      "Focused on intuitive navigation and accessibility-oriented UX to improve engagement and usability.",
    ],
    links: [{ label: "Code", href: links.mathKidsCode }],
  },
  {
    title: "AI-Based Patient Readmission Risk Predictor (Healthcare AI)",
    org: "California State University, San Bernardino",
    tags: ["Machine Learning", "REST APIs", "Security", "Deployment"],
    bullets: [
      "Built and deployed machine learning models to predict hospital readmission risk using structured healthcare datasets.",
      "Designed RESTful APIs to integrate ML outputs into backend systems and support secure data workflows.",
      "Implemented data validation and security controls to support HIPAA-aligned handling of patient data.",
      "Collaborated with stakeholders to translate predictive insights into actionable healthcare decisions.",
    ],
  },
  {
    title: "Enterprise Learning Management Platform",
    org: "Jawaharlal Nehru Technological University Kakinada",
    tags: ["Java", "AWS EC2", "Distributed Systems", "Monitoring"],
    bullets: [
      "Designed scalable backend services using Java and AWS EC2 to support concurrent global users.",
      "Built asynchronous data pipelines for course content, user tracking, and performance analytics.",
      "Optimized performance and reduced latency using monitoring and backend tuning strategies.",
      "Implemented cloud-based deployment workflows to improve reliability and availability.",
    ],
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm">
      {children}
    </span>
  );
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
      {linksList.map((l) => (
        <a
          key={l.label + l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className={`rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm transition ${
            l.label === "Live"
              ? "bg-neutral-900 text-white hover:bg-neutral-800"
              : "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold tracking-tight">
            Yaso Greeshma Neelathi
          </a>

          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <a className="hover:text-neutral-900" href="#about">
              About
            </a>
            <a className="hover:text-neutral-900" href="#skills">
              Skills
            </a>
            <a className="hover:text-neutral-900" href="#experience">
              Experience
            </a>
            <a className="hover:text-neutral-900" href="#projects">
              Projects
            </a>
            <a className="hover:text-neutral-900" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl bg-neutral-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 md:inline-flex"
            >
              Resume
            </a>

            <a
              href={links.phone}
              className="hidden rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50 md:inline-flex"
              title="Call"
            >
              +1 909-380-6984
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50"
            >
              LinkedIn
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <div className="grid gap-10 py-14 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to QA / SDET · Automation · Performance
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-4xl font-bold tracking-tight md:text-5xl"
            >
              Quality-first engineering for scalable, reliable systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-xl text-neutral-600"
            >
              Software Development Engineer in Test (SDET) with 5+ years of experience building scalable automation
              frameworks and embedding quality into distributed systems. Strong background in Java and Python, API
              automation, performance engineering, and performance testing in enterprise-scale environments. Skilled in
              debugging complex backend systems, designing reusable test architectures, and validating reliability under
              high-volume workloads.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
              >
                View Projects
              </a>

              <a
                href="#experience"
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
              >
                Experience
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold">Impact snapshot</h3>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                    <div className="mt-1 text-sm text-neutral-600">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-neutral-900 p-4 text-white">
                <div className="text-sm font-semibold">Primary strengths</div>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-white/10 px-3 py-1">Test automation</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">API validation</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Performance testing</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Observability + RCA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="py-14">
          <Section
            id="about"
            title="About"
            subtitle="Automation-first mindset, performance engineering depth, and measurable impact in stability, latency, and release confidence."
          >
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="leading-relaxed text-neutral-700">
                I build quality into software with a mix of automation frameworks, API validation, and performance engineering.
                I’ve worked on distributed systems in enterprise environments where reliability and observability are non-negotiable.
                I like turning traces, logs, and metrics into clear root causes and durable fixes—so teams can ship confidently.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Selenium</Pill>
                <Pill>REST Assured</Pill>
                <Pill>JMeter</Pill>
                <Pill>LoadRunner</Pill>
                <Pill>Dynatrace</Pill>
                <Pill>Splunk</Pill>
                <Pill>Java</Pill>
                <Pill>Python</Pill>
                <Pill>CI/CD</Pill>
              </div>
            </div>
          </Section>
        </div>

        {/* Skills */}
        <div className="py-14">
          <Section id="skills" title="Skills">
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold">{group}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((it) => (
                      <Pill key={it}>{it}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Experience */}
        <div className="py-14">
          <Section id="experience" title="Experience">
            <div className="grid gap-4">
              {experience.map((job) => (
                <div key={job.company + job.role} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
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
                    {job.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Projects */}
        <div className="py-14">
          <Section id="projects" title="Projects">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((p) => (
                <div key={p.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{p.org}</p>
                    </div>

                    <div className="hidden flex-wrap justify-end gap-2 md:flex">
                      {p.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 md:hidden">
                    {p.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                    {p.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  {/* ✅ Live/Code buttons (only show when links exist) */}
                  <ProjectLinks linksList={p.links} />
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Contact */}
        <div className="py-14">
          <Section id="contact" title="Contact" subtitle="Best way to reach me: email. I typically respond within 24–48 hours.">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 md:grid-cols-3">
                <a href={links.email} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100">
                  <div className="text-sm text-neutral-600">Email</div>
                  <div className="mt-1 font-semibold">yneelathi0511@gmail.com</div>
                </a>

                <a href={links.phone} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100">
                  <div className="text-sm text-neutral-600">Phone</div>
                  <div className="mt-1 font-semibold">+1 909-380-6984</div>
                </a>

                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100"
                >
                  <div className="text-sm text-neutral-600">LinkedIn</div>
                  <div className="mt-1 font-semibold">Open profile</div>
                </a>

                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100"
                >
                  <div className="text-sm text-neutral-600">GitHub</div>
                  <div className="mt-1 font-semibold">View repos</div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-neutral-900 p-5 text-white">
                <div className="text-sm font-semibold">Quick pitch</div>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  SDET with 5+ years across automation, API validation, and performance engineering in enterprise environments.
                  I build scalable test architectures (Selenium, TestNG, REST Assured), validate distributed backend services, and
                  run performance testing with JMeter/LoadRunner. I use Dynatrace/AppDynamics/Splunk for root cause analysis and
                  ship quality via CI/CD-aligned testing to improve reliability, stability, and release confidence.
                </p>
              </div>
            </div>
          </Section>
        </div>

        <footer className="pb-14 pt-4 text-sm text-neutral-500">
          <div className="border-t border-neutral-200 pt-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Yaso Greeshma Neelathi</div>
              <div className="flex flex-wrap gap-4">
                <a className="hover:text-neutral-800" href={links.email}>
                  Email
                </a>
                <a className="hover:text-neutral-800" href={links.phone}>
                  Phone
                </a>
                <a className="hover:text-neutral-800" href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="hover:text-neutral-800" href={links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
