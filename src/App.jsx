import React from "react";
import { motion } from "framer-motion";

const links = {
  email: "mailto:yneelathi0511@gmail.com",
  linkedin: "https://www.linkedin.com/in/yaso-greeshma-n-33783414b/",
  github: "https://github.com/greeshmaneelathi",
  resume: "https://drive.google.com/drive/folders/1jqEcLyQIuGoiGt4lcVi0YPvvVxcq41iG",
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
  "Quality Engineering": [
    "Automation Testing",
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "Integration Testing",
    "System Testing",
    "Performance Testing",
    "Reliability Testing",
    "Exploratory Testing",
    "Bug Tracking",
  ],
  "Test Automation": ["Automation Framework Design", "API Automation", "Mobile Testing", "CI/CD Integration"],
  Programming: ["Python", "Java", "C++", "C#", "Go", "SQL", "JavaScript"],
  "Cloud & DevOps": [
    "AWS (EC2, Lambda, CloudFront)",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Jenkins",
    "Git",
    "GitHub",
    "Google Cloud Platform",
  ],
  "Monitoring & Debugging": [
    "Splunk",
    "AppDynamics",
    "Dynatrace",
    "Datadog",
    "Prometheus",
    "Log Analysis",
    "Root Cause Analysis",
  ],
  Tools: ["Jira", "Confluence", "Salesforce", "Azure DevOps", "Visual Studio", "Microsoft Excel"],
  Methodologies: ["Agile", "Scrum", "SDLC", "Waterfall"],
};

const experience = [
  {
    company: "AVEVA",
    location: "California",
    role: "Software Developer & Quality Assurance Engineer",
    dates: "Jun 2025 – Sept 2025",
    highlights: [
      "Led requirements and quality documentation (SRS, traceability) aligned to internal standards and regulated development expectations.",
      "Reviewed code and assessed test and performance data to validate reliability, usability, and system performance requirements.",
      "Performed root cause analysis on production issues; implemented process improvements reducing recurring defects by 30%.",
      "Validated design inputs across reliability, performance, data integrity, and security requirements; supported risk assessments and quality plans across the lifecycle.",
    ],
  },
  {
    company: "San Bernardino County",
    location: "California",
    role: "Software Development & QA",
    dates: "Feb 2025 – Apr 2025",
    highlights: [
      "Supported documentation and review of software design inputs to improve traceability and lifecycle compliance.",
      "Performed validation testing and data verification to support release readiness for public-sector systems.",
      "Contributed to quality plans and risk mitigation documentation; collaborated cross-functionally on reliability and performance criteria.",
      "Used Apache JMeter during test planning and performance validation.",
    ],
  },
  {
    company: "Tata Consultancy Services (Client: Citibank)",
    location: "India",
    role: "Software Engineer in Test",
    dates: "Jan 2020 – Jul 2025",
    highlights: [
      "Owned performance engineering for enterprise banking platforms: load, stress, spike, and endurance testing with JMeter and LoadRunner; validated scalability for 500K+ concurrent users.",
      "Improved stability by 25% via JVM memory leak detection, garbage collection strategy optimization, heap tuning, and resolving thread contention.",
      "Reduced response time by 30% through SQL optimization, index tuning, connection pool configuration, and latency analysis across distributed systems.",
      "Drove RCA using Dynatrace, Splunk, and AppDynamics; integrated performance scripts into CI/CD for automated regression validation, reducing release risk by 20%.",
    ],
  },
  {
    company: "Dartin Technologies",
    location: "India",
    role: "Junior Software Engineer",
    dates: "May 2019 – Jan 2020",
    highlights: [
      "Assisted with requirements analysis and SDLC-aligned validation activities.",
      "Contributed to technical documentation and design reviews to improve quality oversight.",
      "Executed test scripts and supported testability-focused workflows.",
    ],
  },
];

const projects = [
  {
    title: "Math Kids with Rabbit (Mobile Game)",
    org: "CSU San Bernardino",
    tags: ["C++", "Mobile", "Performance", "UX"],
    bullets: [
      "Built gameplay mechanics, physics, logic, and scoring systems for Android and iOS.",
      "Engineered efficient C++ state management for smooth performance across diverse devices.",
      "Troubleshot state conflicts and optimized rendering for mobile performance.",
    ],
  },
  {
    title: "AI-Based Patient Readmission Risk Predictor",
    org: "CSU San Bernardino",
    tags: ["Machine Learning", "REST APIs", "Security", "Deployment"],
    bullets: [
      "Built and deployed machine learning models; supported secure handling of patient data.",
      "Integrated REST APIs for model-driven outputs and data pipelines.",
      "Produced structured documentation and collaborated with stakeholders.",
    ],
  },
  {
    title: "Enterprise Learning Management Platform",
    org: "JNTU Kakinada",
    tags: ["Java", "AWS EC2", "Distributed Systems", "Monitoring"],
    bullets: [
      "Designed distributed backend services in Java and deployed on AWS EC2.",
      "Implemented asynchronous pipelines and optimized content delivery performance.",
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

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

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
              href="tel:+19093806984"
              className="hidden px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50 transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
            >
              +1 909-380-6984
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
        {/* Hero */}
        <div className="grid gap-10 py-14 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to QA / SDET · Performance · Backend
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 text-4xl md:text-5xl font-bold tracking-tight"
            >
              Quality-first engineering for scalable, reliable systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-4 text-neutral-600 max-w-xl leading-relaxed"
            >
              I am a quality-focused Software Engineer with 5+ years of experience engineering performance and reliability into large-scale financial systems.
              Through automation frameworks, observability-driven debugging, and CI/CD validation, I help teams ship stable, scalable software with confidence.
            </motion.p>

            {/* Animated Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-3"
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
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 transition-transform duration-200 hover:-translate-y-0.5"
              >
                GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {["API Testing", "Selenium", "Postman", "JMeter", "Jira", "Python", "Java"].map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold">Impact snapshot</h3>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                  >
                    <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                    <div className="mt-1 text-sm text-neutral-600">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-neutral-900 p-4 text-white">
                <div className="text-sm font-semibold">Primary strengths</div>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-white/10 px-3 py-1">Performance testing</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">RCA + observability</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">CI/CD integration</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Distributed systems</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* About */}
        <div className="py-14">
          <Section
            id="about"
            title="About"
            subtitle="Performance-first mindset, engineering approach to quality, and measurable impact in stability, latency, and release confidence."
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <p className="leading-relaxed text-neutral-700">
                My background spans Software Engineering in Test, performance engineering, and backend systems. I’ve worked
                across enterprise environments where reliability, observability, and governance matter—especially in financial
                systems and compliance-driven delivery. I enjoy digging into bottlenecks, reading traces and logs, and turning
                findings into durable fixes that prevent repeat issues.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>JMeter</Pill>
                <Pill>LoadRunner</Pill>
                <Pill>Dynatrace</Pill>
                <Pill>Splunk</Pill>
                <Pill>AWS</Pill>
                <Pill>Docker</Pill>
                <Pill>Python</Pill>
                <Pill>Java</Pill>
                <Pill>Go</Pill>
              </div>
            </motion.div>
          </Section>
        </div>

        {/* Skills */}
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
                    {items.map((it) => (
                      <Pill key={it}>{it}</Pill>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* Experience */}
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
                    {job.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* Projects */}
        <div className="py-14">
          <Section id="projects" title="Projects">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
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

                  <div className="mt-5 text-sm text-neutral-500">
                    (Optional) Add Demo + Code links later
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* Contact */}
        <div className="py-14">
          <Section id="contact" title="Contact" subtitle="Best way to reach me: email. I typically respond within 24–48 hours.">
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

                <a href="tel:+19093806984" className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100 transition">
                  <div className="text-sm text-neutral-600">Phone</div>
                  <div className="mt-1 font-semibold">+1 909-380-6984</div>
                </a>

                <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100 transition">
                  <div className="text-sm text-neutral-600">LinkedIn</div>
                  <div className="mt-1 font-semibold">Open profile</div>
                </a>

                <a href={links.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100 transition">
                  <div className="text-sm text-neutral-600">GitHub</div>
                  <div className="mt-1 font-semibold">View repos</div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-neutral-900 p-5 text-white">
                <div className="text-sm font-semibold">Quick pitch</div>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  I am a Software Engineer in Test with 5+ years of experience in performance engineering and quality-driven delivery.
                  I’ve validated enterprise banking platforms at scale (500K+ concurrent users), improved stability by 25% through JVM tuning,
                  and reduced response times by 30% using end-to-end bottleneck analysis across distributed systems. I’m currently looking for
                  QA/SDET and performance roles where I can own release confidence and system reliability.
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
