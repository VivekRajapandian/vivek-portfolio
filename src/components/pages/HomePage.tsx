import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className="reveal revealDelay1">
          <HeroSection />
        </div>

        <section id="projects" className={`${styles.section} reveal revealDelay2`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLine} />
            <h2>Projects</h2>
            <span className={styles.sectionLine} />
          </div>

          <div className={styles.projectGrid}>
            <ProjectCard
              title="Letter From Future"
              impact="AI-powered execution platform"
              description="An execution-focused platform that transforms user goals into structured plans with phases, tasks, and progress tracking. Built to turn long-term goals into clear, actionable systems."
              techStack={[
                "React",
                "TypeScript",
                "Spring Boot",
                "PostgreSQL",
                "OpenAI",
              ]}
              liveLink="http://localhost:3000/login"
              codeLink="https://github.com/VivekRajapandian/letter-from-my-future"
              imageUrl="/project-placeholders/letter-from-future.png"
            />
          </div>
        </section>

        <section id="about" className={`${styles.section} reveal revealDelay3`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLine} />
            <h2>About</h2>
            <span className={styles.sectionLine} />
          </div>

          <div className={styles.aboutCard}>
            <p className={styles.aboutText}>
              Senior Java Developer specializing in workflow automation, enterprise
              integration, and banking platforms. Experienced in building scalable
              backend systems with Java, Spring Boot, Camunda, Kafka, SQL, and
              cloud-native technologies, with a strong focus on enterprise delivery
              and workflow-driven architecture.
            </p>

            <div className={styles.aboutHighlights}>
              <div className={styles.aboutPill}>Java • Spring Boot • Camunda</div>
              <div className={styles.aboutPill}>Kafka • SQL • Microservices</div>
              <div className={styles.aboutPill}>Banking • Workflow Automation</div>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} reveal revealDelay4`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLine} />
            <h2>Let’s Work Together</h2>
            <span className={styles.sectionLine} />
          </div>

          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>
              Interested in building scalable workflow systems or backend platforms?
            </h3>

            <p className={styles.contactText}>
              I’m open to backend engineering roles, Camunda workflow architecture work,
              and full-stack product collaborations.
            </p>

            <div className={styles.contactActions}>
              <a
                href="mailto:viveksmart021994@gmail.com"
                className={styles.contactPrimary}
              >
                Email Me
              </a>

              <a
                href="tel:+13652923522"
                className={styles.contactSecondary}
              >
                Call Me
              </a>
            </div>

            <p className={styles.contactMeta}>
              viveksmart021994@gmail.com • +1 365-292-3522
            </p>
          </div>
        </section>
      </main>
    </>
  );
}