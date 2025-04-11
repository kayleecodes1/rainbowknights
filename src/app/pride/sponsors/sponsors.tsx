import Image from "next/image";
import ikeaPng from '@/assets/sponsors/ikea.png';
import styles from "./sponsors.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pride Sponsors</h2>
        <h3 className={styles.tierHeading}>Pride Paladin Donors</h3>
        <ul className={styles.sponsorList}>
          <li className={styles.sponsorItem}>
            <Image className={styles.sponsorImage} src={ikeaPng} alt="IKEA" />
          </li>
        </ul>
        <h3 className={styles.tierHeading}>Honorary Knight Donors</h3>
        <ul className={styles.sponsorList}>
          <li className={styles.sponsorItem}>Titus DosRemedios</li>
          <li className={styles.sponsorItem}>Kelly Grimes</li>
          <li className={styles.sponsorItem}>Betsy Maguire</li>
          <li className={styles.sponsorItem}>Caroline Sprague</li>
          <li className={styles.sponsorItem}>Amy White</li>
        </ul>
      </div>
    </section>
  );
}
