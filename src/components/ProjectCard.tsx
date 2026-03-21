import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  impact: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  codeLink?: string;
  imageUrl?: string;
};

export default function ProjectCard({
  title,
  impact,
  description,
  techStack,
  liveLink,
  codeLink,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>
      )}

      <div className={styles.content}>
        <p className={styles.impact}>{impact}</p>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        <div className={styles.tags}>
          {techStack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkPrimary}
            >
              Live →
            </a>
          )}

          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkSecondary}
            >
              Code →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}