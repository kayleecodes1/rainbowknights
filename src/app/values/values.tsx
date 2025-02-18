import Image from "next/image";
import homepage from "@/data/homepage";
import styles from "./values.module.css";

export default function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{homepage.values.title}</h2>
        <ul className={styles.list}>
          {homepage.values.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <Image
                className={styles.icon}
                alt={item.title}
                src={item.image}
              />
              <h3 className={styles.heading}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
