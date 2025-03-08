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
          <div className={styles.actions}>
            <a
              className={styles.button}
              href="https://docs.google.com/forms/d/e/1FAIpQLSedVhpiIZo763_0-5K83t2F8zOoVvQsqIfVAXBINnPLb0nanA/viewform"
              target="_blank"
            >
              <div className={styles.buttonIconEmail}></div>
              <span>Join Our Mailing List</span>
            </a>
            <a
              className={styles.button}
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8ghOCA9rcb9bkolLSxA6TD8x0dBZLQ3NYXM_wwK9chnq8CA/viewform"
              target="_blank"
            >
              <div className={styles.buttonIconDiscord}></div>
              <span>Join Our Discord</span>
            </a>
          </div>
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
