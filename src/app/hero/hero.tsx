import Image from "next/image";
import clsx from "clsx";
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
        <div className={styles.photos}>
          <div className={clsx(styles.photo, styles.photo1)}>
            <Image src={homepage.hero.photos[0]} alt="" />
          </div>
          <div className={clsx(styles.photo, styles.photo2)}>
            <Image src={homepage.hero.photos[1]} alt="" />
          </div>
          <div className={clsx(styles.photo, styles.photo3)}>
            <Image src={homepage.hero.photos[2]} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
