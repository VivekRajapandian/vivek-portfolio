import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <HeroSection />

        {/* PROJECTS */}
        <section id="projects" className={styles.section}>
          <h2>Projects</h2>

          <div className={styles.projectCard}>
            <h3>Letter From Future</h3>

            <p>
              AI-powered execution engine that converts user goals into structured
              workflow plans with phases, tasks, and progress tracking.
            </p>

            {/* ⭐⭐⭐ PUT YOUR PROJECT LINK HERE ⭐⭐⭐ */}
            <a
              href="http://localhost:3000/"
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
            >
              View Project →
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className={styles.section}>
          <h2>About</h2>

          <p>
            Senior Java Developer specializing in workflow automation, enterprise
            integration, and banking platforms using Camunda, Spring Boot,
            Kafka, and cloud-native technologies.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className={styles.section}>
          <h2>Contact</h2>

          <p>You can reach me at:</p>

          {/* ⭐⭐⭐ PUT PHONE HERE ⭐⭐⭐ */}
          <p><strong>Phone:</strong> +1 365-292-3522</p>

          {/* ⭐⭐⭐ PUT EMAIL HERE ⭐⭐⭐ */}
          <p><strong>Email:</strong> viveksmart021994@gmail.com</p>
        </section>
      </main>
    </>
  );
}