import HighlightCard from "./HighlightCard";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const highlights = [
    "9.2 years in IT",
    "6.8 years in Java + Camunda",
    "RBC • Senior Java/Camunda Developer",
    "Camunda 7 & 8",
    "Spring Boot • Kafka • SQL Server",
    "Workflow Automation • Banking Domain",
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* LEFT PANEL */}
      <div className={styles.leftPanel}>
        <p className={styles.eyebrow}>
          Senior Java Developer • Camunda Workflow Specialist
        </p>

        <h1 className={styles.title}>Hi, I’m Vivek Rajapandian.</h1>

        <p className={styles.primaryText}>
          I build enterprise workflow automation and backend systems using Java,
          Spring Boot, Camunda, SQL, Kafka, and cloud-native tooling.
        </p>

        <p className={styles.secondaryText}>
          Currently working at RBC on mortgage and payment workflow platforms,
          including Camunda 8 orchestration, ACH/WIRES processing, job workers,
          event-driven integrations, and transaction automation.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>

          <button
            className={styles.secondaryButton}
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.rightPanel}>
        <p className={styles.snapshotLabel}>Experience Snapshot</p>

        <h2 className={styles.snapshotTitle}>
          Backend engineer focused on workflow automation, enterprise integration,
          and banking systems.
        </h2>

        <div className={styles.highlightGrid}>
          {highlights.map((item) => (
            <HighlightCard key={item} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
}