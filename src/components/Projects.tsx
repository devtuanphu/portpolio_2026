"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Projects.module.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  teamSize: number;
  period: string;
  links?: { label: string; url: string }[];
}

const PROJECTS: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with scalable architecture, GraphQL API layer, rich UI components, and comprehensive admin dashboard for product and order management.",
    tech: ["Next.js", "NestJS", "GraphQL", "Ant Design", "PostgreSQL"],
    teamSize: 5,
    period: "Mar 2024 — Oct 2024",
    links: [],
  },
  {
    title: "HRM ID Face — Mobile App",
    description:
      "A mobile HRM application with face recognition for employee ID verification, real-time attendance tracking, and comprehensive data management dashboard.",
    tech: ["React Native", "Strapi", "Node.js", "MySQL", "AI/ML"],
    teamSize: 1,
    period: "Nov 2024 — Feb 2025",
    links: [
      { label: "App", url: "https://github.com/devtuanphu/app-hrm" },
      { label: "Backend", url: "https://github.com/devtuanphu/backend-hrm" },
      { label: "AI", url: "https://github.com/devtuanphu/AI-hrm" },
    ],
  },
  {
    title: "CRM Ticketing System",
    description:
      "Complete CRM for revenue management and employee ticketing. Features ZaloOA integration, real-time dashboards, individual performance statistics, and configurable admin panels.",
    tech: ["ReactJS", "ExpressJS", "MUI", "MongoDB", "ZaloOA"],
    teamSize: 1,
    period: "Feb 2024 — Oct 2024",
    links: [],
  },
  {
    title: "NTSE Info Website",
    description:
      "A scalable, high-performance informational website built with modern full-stack technologies, featuring rich UI components and optimized database queries.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Ant Design"],
    teamSize: 2,
    period: "Jun 2024 — Jul 2024",
    links: [],
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label reveal">What I&apos;ve Built</p>
          <h2 className="section-title reveal delay-1">Featured Projects</h2>
          <p className="section-subtitle reveal delay-2">
            A selection of projects showcasing full-stack development capabilities
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={`${styles.card} reveal-scale`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div className={styles.folder}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  {project.links && project.links.length > 0 && (
                    <div className={styles.cardLinks}>
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.linkIcon}
                          title={link.label}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.meta}>
                  <span className={styles.team}>
                    👥 Team of {project.teamSize}
                  </span>
                  <span className={styles.period}>{project.period}</span>
                </div>

                <div className={styles.tags}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
