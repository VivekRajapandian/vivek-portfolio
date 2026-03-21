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
      <div className={styles.container}>
        <div className={styles.logo}>Vivek Rajapandian</div>

        <nav className={styles.nav}>
          <button onClick={() => scrollToSection("projects")} className={styles.link}>
            Projects
          </button>
          <button onClick={() => scrollToSection("about")} className={styles.link}>
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className={styles.link}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}