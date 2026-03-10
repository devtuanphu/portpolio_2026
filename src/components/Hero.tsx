"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const ROLES = [
  "Fullstack Developer",
  "React & Next.js Expert",
  "Backend Architect",
  "Mobile App Developer",
];

// Hardcoded particle positions to avoid hydration mismatch
const PARTICLES = [
  { left: "5%", delay: "0s", duration: "18s", size: "3px" },
  { left: "10%", delay: "2s", duration: "22s", size: "2px" },
  { left: "15%", delay: "4s", duration: "25s", size: "4px" },
  { left: "20%", delay: "1s", duration: "19s", size: "3px" },
  { left: "28%", delay: "6s", duration: "30s", size: "2px" },
  { left: "33%", delay: "3s", duration: "20s", size: "5px" },
  { left: "38%", delay: "8s", duration: "28s", size: "2px" },
  { left: "42%", delay: "5s", duration: "16s", size: "3px" },
  { left: "50%", delay: "10s", duration: "24s", size: "4px" },
  { left: "55%", delay: "7s", duration: "32s", size: "2px" },
  { left: "60%", delay: "1s", duration: "21s", size: "3px" },
  { left: "66%", delay: "9s", duration: "26s", size: "5px" },
  { left: "70%", delay: "12s", duration: "18s", size: "2px" },
  { left: "75%", delay: "4s", duration: "29s", size: "3px" },
  { left: "80%", delay: "11s", duration: "20s", size: "4px" },
  { left: "84%", delay: "6s", duration: "33s", size: "2px" },
  { left: "88%", delay: "2s", duration: "17s", size: "3px" },
  { left: "92%", delay: "13s", duration: "23s", size: "5px" },
  { left: "95%", delay: "8s", duration: "27s", size: "2px" },
  { left: "98%", delay: "3s", duration: "31s", size: "4px" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && text.length < currentRole.length) {
      setText(currentRole.slice(0, text.length + 1));
    } else if (!isDeleting && text.length === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    } else if (isDeleting && text.length > 0) {
      setText(text.slice(0, -1));
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting]);

  return (
    <section className={styles.hero} id="hero">
      {/* Animated background particles */}
      <div className={styles.particles}>
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        {/* Avatar */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarGlow} />
          <div className={styles.avatarRing}>
            <Image
              src="/avatar.jpg"
              alt="Nguyen Phu Tuan"
              width={180}
              height={180}
              className={styles.avatar}
              priority
            />
          </div>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            Available for work
          </div>
        </div>

        {/* Text */}
        <div className={styles.textBlock}>
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>
            Nguyen Phu <span className={styles.nameAccent}>Tuan</span>
          </h1>
          <div className={styles.roleWrapper}>
            <span className={styles.roleText}>{text}</span>
            <span className={styles.cursor}>|</span>
          </div>
          <p className={styles.tagline}>
            Building scalable web &amp; mobile applications with modern technologies.
            Passionate about clean architecture, CRM solutions, and seamless user experiences.
          </p>
        </div>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#projects" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel} />
          </div>
          <span>Scroll down</span>
        </div>
      </div>
    </section>
  );
}
