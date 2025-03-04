import Image from "next/image";
import clsx from "clsx";
import prideHeroJpg from "@/assets/photos/pride-hero.jpg";
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
