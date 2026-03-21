import styles from "./HighlightCard.module.css";

type HighlightCardProps = {
  text: string;
};

export default function HighlightCard({ text }: HighlightCardProps) {
  return <div className={styles.card}>{text}</div>;
}