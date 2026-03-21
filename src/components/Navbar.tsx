import styles from "./Navbar.module.css";

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
        </nav>
      </div>
    </header>
  );
}