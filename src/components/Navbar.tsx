import styles from "./Navbar.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.brand}>Vivek Rajapandian</div>

        <nav className={styles.navLinks}>
          
        </nav>

        {/* ⭐ NEW SOCIAL ICONS — SAFE */}
        <div className={styles.socials}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
          <a
            href="https://www.linkedin.com/in/vivek-rajapandian-a6a148116"
            target="_blank"
            rel="noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/VivekRajapandian"
            target="_blank"
            rel="noreferrer"
            className={styles.iconLink}
          >
            <FaGithub />
          </a>

          <a
            href="https://leetcode.com/u/vivekrajapandian/"
            target="_blank"
            rel="noreferrer"
            className={styles.iconLink}
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </header>
  );
}