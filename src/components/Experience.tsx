"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Experience.module.css";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "RGP Company",
    role: "Backend Developer",
    period: "Oct 2025 — Present",
    description: [
      "Domain game slot — Building high-performance backend systems",
      "Using Java Spring Boot for microservices architecture",
      "PostgreSQL & MongoDB for data persistence",
      "Redis and ZMQ for inter-service communication",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "ZMQ"],
  },
  {
    company: "Epsilon Labs VN",
    role: "Fullstack Developer",
    period: "Feb 2025 — Oct 2025",
    description: [
      "Developed Live Chat system using ReactJS & NestJS",
      "Accessed major CRM software worldwide",
      "Developed APIs for high-performance reports",
      "Managed projects with Jira — Agile/Scrum methodology",
    ],
    tech: ["ReactJS", "NestJS", "MongoDB", "MySQL", "CI/CD"],
  },
  {
    company: "NextgenBros",
    role: "Fullstack Developer",
    period: "Nov 2024 — Feb 2025",
    description: [
      "Developing and maintaining transaction systems",
      "Building scalable, high-performance backend services",
      "Integrating databases and APIs for seamless data flow",
      "Optimizing system performance and security for financial transactions",
    ],
    tech: ["React.js", "NestJS", "Spring Boot", "MySQL", "PostgreSQL"],
  },
  {
    company: "Amazing Limousine",
    role: "Fullstack Developer — Remote",
    period: "Feb 2024 — Oct 2024",
    description: [
      "Built ticket sales and accounting management system",
      "Integrated ZaloOA for customer ticket information",
      "Real-time live data dashboard",
      "Full CRM features: CRUD, statistics, configuration",
    ],
    tech: ["ReactJS", "MUI", "Tailwind CSS", "ExpressJS", "MongoDB"],
  },
  {
    company: "AMIT GROUP JCI",
    role: "Leader Fullstack Developer",
    period: "Feb 2024 — Oct 2024",
    description: [
      "Led web application development across multiple projects",
      "Implemented client requirements with high-quality solutions",
      "Configured CI/CD with Docker and GitHub Actions",
      "Worked directly with customers for requirements planning",
    ],
    tech: ["React.js", "Next.js 14", "NestJS", "Golang", "MongoDB", "Docker"],
  },
  {
    company: "Aqualife",
    role: "Fullstack Developer",
    period: "Aug 2023 — Dec 2023",
    description: [
      "Developing and maintaining web systems",
      "Optimizing performance and user experience",
      "Collaborating with teams to integrate APIs",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express"],
  },
  {
    company: "Autonomous",
    role: "Intern Full Time — Generative Art",
    period: "Jan 2023 — Jun 2023",
    description: [
      "Creative coding with p5.js focusing on AI and technology themes",
      "Developed interactive visuals and animations",
      "Explored generative art techniques",
    ],
    tech: ["p5.js", "Creative Coding", "AI"],
  },
  {
    company: "GPT Group — Software",
    role: "Intern Front-End Developer",
    period: "Aug 2022 — Dec 2022",
    description: [
      "Built UI using HTML, CSS, JavaScript",
      "RESTful API integration with ReactJS",
      "Completed all tasks on time with technical excellence",
    ],
    tech: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label reveal">Where I&apos;ve Worked</p>
          <h2 className="section-title reveal delay-1">Experience</h2>
          <p className="section-subtitle reveal delay-2">
            3+ years of professional experience across multiple companies and domains
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.company + exp.period}
              className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right} reveal`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.dot}>
                <div className={styles.dotInner} />
              </div>
              <div className={`glass-card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.role}>{exp.role}</p>
                <ul className={styles.list}>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {exp.tech.map((t) => (
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
