import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import ProjectCard from "../ProjectCard";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <HeroSection />

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>

          <div className={styles.projectGrid}>
            <ProjectCard
              title="Letter From Future"
              impact="AI-powered execution engine"
              description="A goal-to-execution platform that transforms user goals into structured plans with phases, tasks, and progress tracking. Designed to make long-term goals actionable through intelligent planning workflows."
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

        <section id="about" className={styles.section}>
          <h2>About</h2>
          <p>
            Senior Java Developer specializing in workflow automation, enterprise
            integration, and banking platforms using Camunda, Spring Boot,
            Kafka, and cloud-native technologies.
          </p>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>You can reach me at:</p>
          <p><strong>Phone:</strong> +1 365-292-3522</p>
          <p><strong>Email:</strong> viveksmart021994@gmail.com</p>
        </section>
      </main>
    </>
  );
}