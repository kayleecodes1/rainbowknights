import homepage from "@/data/homepage";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{homepage.hero.title}</h2>
          <p className={styles.description}>{homepage.hero.description}</p>
        </div>
      </div>
    </section>
  );
}
