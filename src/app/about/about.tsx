import Image from "next/image";
import homepage from "@/data/homepage";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.description}>{homepage.about.description}</p>
        <ul className={styles.list}>
          {homepage.about.items.map((item) => (
            <li className={styles.item} key={item.title}>
              <Image
                className={styles.icon}
                alt={item.title}
                src={item.image}
              />
              <p className={styles.itemDescription}>{item.description}</p>
            </li>
          ))}
        </ul>
        <q className={styles.quote}>{homepage.about.quote}</q>
      </div>
    </section>
  );
}
