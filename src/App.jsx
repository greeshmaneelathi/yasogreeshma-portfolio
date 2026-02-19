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
    links: {
      code: "https://github.com/greeshmaneelathi", // replace with exact repo if needed
    },
  },
  {
    title: "AI-Based Patient Readmission Risk Predictor",
    org: "CSU San Bernardino",
    tags: ["Machine Learning", "REST APIs", "Security", "Deployment"],
    bullets: [
      "Built and deployed machine learning models with secure patient data handling.",
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

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold tracking-tight">
            Yaso Greeshma Neelathi
          </a>

          <div className="flex items-center gap-2">
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 md:inline-flex"
            >
              Resume
            </a>

            <a
              href="tel:+19093806984"
              className="px-4 py-2 rounded-full border hover:bg-neutral-100 transition"
            >
              +1 909-380-6984
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
            >
              LinkedIn
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-14">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Quality-first engineering for scalable, reliable systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-neutral-600 max-w-xl"
        >
          I am a quality-focused Software Engineer with 5+ years of experience engineering
          performance and reliability into large-scale financial systems. Through automation
          frameworks, observability-driven debugging, and CI/CD validation, I help teams ship
          stable, scalable software with confidence.
        </motion.p>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{p.org}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                {p.links && (
                  <div className="mt-5 flex gap-3">
                    {p.links.code && (
                      <a
                        href={p.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-20 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Yaso Greeshma Neelathi
        </footer>
      </main>
    </div>
  );
}
