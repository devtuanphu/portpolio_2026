"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Calendar,
  MapPin,
  Mail,
  Smartphone,
  GraduationCap,
  Award,
} from "lucide-react";
import styles from "./About.module.css";

const INFO_ITEMS = [
  {
    icon: Calendar,
    label: "Birthday",
    value: "September 14, 2002",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "District 2, Ho Chi Minh City",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ptuan140902@gmail.com",
  },
  {
    icon: Smartphone,
    label: "Phone",
    value: "0383 644 795",
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label reveal">Get To Know</p>
          <h2 className="section-title reveal delay-1">About Me</h2>
        </div>

        <div className={styles.grid}>
          {/* Left: Avatar */}
          <div className={`${styles.imageCol} reveal-left`}>
            <div className={styles.imageCard}>
              <div className={styles.imageDecor} />
              <Image
                src="/avatar.jpg"
                alt="Nguyen Phu Tuan"
                width={400}
                height={400}
                className={styles.photo}
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className={`${styles.infoCol} reveal-right`}>
            <p className={styles.bio}>
              As a dedicated full-stack developer with a solid foundation in programming,
              problem-solving, system architecture, and CRM solutions, my goal is to contribute
              to innovative projects that drive business success. With experience in CRM systems,
              I am passionate about building and optimizing customer relationship management
              solutions to enhance user experiences.
            </p>
            <p className={styles.bio}>
              I aim to work in a dynamic and collaborative environment where I can continuously
              expand my knowledge, work closely with a talented team, and develop efficient,
              scalable solutions that not only meet business needs but also deliver impactful
              results for customers.
            </p>

            <div className={styles.infoGrid}>
              {INFO_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className={`glass-card ${styles.infoCard}`}>
                    <div className={styles.infoIcon}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <p className={styles.infoLabel}>{item.label}</p>
                      <p className={styles.infoValue}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Education */}
            <div className={`glass-card ${styles.eduCard}`}>
              <div className={styles.eduHeader}>
                <div className={styles.eduIconWrap}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className={styles.eduTitle}>The Open University Ho Chi Minh City</h3>
                  <p className={styles.eduSub}>Computer Science — 2020 – 2024</p>
                </div>
              </div>
              <div className={styles.certBadge}>
                <Award size={16} />
                National Office Informatics Certificate (2019)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
