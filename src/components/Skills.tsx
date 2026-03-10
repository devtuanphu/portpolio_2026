"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Palette,
  Server,
  Smartphone,
  Database,
  Rocket,
  Lightbulb,
} from "lucide-react";
import styles from "./Skills.module.css";

import type { LucideIcon } from "lucide-react";

interface SkillGroup {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    icon: Palette,
    skills: [
      "HTML5",
      "CSS/SCSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Java Spring Boot",
      "Golang / Gin",
      "PHP",
      "Python / Django",
      "GraphQL",
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Redux", "React Navigation"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "MariaDB", "ElasticSearch", "Redis"],
  },
  {
    category: "DevOps & Tools",
    icon: Rocket,
    skills: [
      "Docker",
      "Linux / Ubuntu",
      "Nginx",
      "CI/CD (GitHub Actions)",
      "Git",
      "ZMQ",
    ],
  },
  {
    category: "Other",
    icon: Lightbulb,
    skills: [
      "Agile / Scrum",
      "Jira / Trello",
      "Blockchain (Ethereum, Solana)",
      "Unity 2D/3D",
      "p5.js (Generative Art)",
      "Machine Learning",
      "Selenium",
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label reveal">What I Use</p>
          <h2 className="section-title reveal delay-1">Skills & Technologies</h2>
          <p className="section-subtitle reveal delay-2">
            A comprehensive toolkit built over 3+ years of professional development
          </p>
        </div>

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.category}
                className={`gradient-border-card reveal-scale`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-border-card-inner">
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrap}>
                      <IconComponent size={22} />
                    </div>
                    <h3 className={styles.category}>{group.category}</h3>
                  </div>
                  <div className={styles.skillList}>
                    {group.skills.map((skill) => (
                      <span key={skill} className={styles.skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
