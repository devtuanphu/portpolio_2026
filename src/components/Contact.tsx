"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label reveal">Get In Touch</p>
          <h2 className="section-title reveal delay-1">Contact Me</h2>
          <p className="section-subtitle reveal delay-2">
            Have a project in mind or want to discuss opportunities? Let&apos;s connect!
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Info */}
          <div className={`${styles.infoCol} reveal-left`}>
            <h3 className={styles.infoTitle}>Let&apos;s talk about everything!</h3>
            <p className={styles.infoText}>
              I&apos;m always excited to take on new challenges, contribute to innovative projects,
              and collaborate with talented teams. Feel free to reach out through any channel below.
            </p>

            <div className={styles.contactItems}>
              <a href="mailto:ptuan140902@gmail.com" className={`glass-card ${styles.contactCard}`}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>ptuan140902@gmail.com</p>
                </div>
              </a>

              <a href="tel:+84383644795" className={`glass-card ${styles.contactCard}`}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>Phone</p>
                  <p className={styles.contactValue}>0383 644 795</p>
                </div>
              </a>

              <div className={`glass-card ${styles.contactCard}`}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>Location</p>
                  <p className={styles.contactValue}>District 2, Ho Chi Minh City</p>
                </div>
              </div>

              <a
                href="https://github.com/devtuanphu"
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card ${styles.contactCard}`}
              >
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>GitHub</p>
                  <p className={styles.contactValue}>devtuanphu</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formCol} reveal-right`}>
            <form className={`glass-card ${styles.form}`} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={styles.textarea}
                />
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
