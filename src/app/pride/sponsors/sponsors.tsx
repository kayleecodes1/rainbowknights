import Image from "next/image";
import Link from "next/link";
import abingtonBankPng from "@/assets/sponsors/abington-bank-logo.png";
import elevateCounselingPng from "@/assets/sponsors/elevate-counseling-services-logo.png";
import ikeaPng from "@/assets/sponsors/ikea.png";
import southShoreBankPng from "@/assets/sponsors/south-shore-bank.png";
import styles from "./sponsors.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pride Sponsors</h2>
        <h3 className={styles.tierHeading}>Pride Paladin Donors</h3>
        <ul className={styles.sponsorList}>
          <li className={styles.sponsorItem}>
            <Link href="https://www.ikea.com" target="_blank">
              <Image className={styles.sponsorImage} src={ikeaPng} alt="IKEA" />
            </Link>
          </li>
        </ul>
        <h3 className={styles.tierHeading}>Community Champion</h3>
        <ul className={styles.sponsorList}>
          <li className={styles.sponsorItem}>
            <Link href="https://www.elevate-counseling.com" target="_blank">
              <Image
                className={styles.sponsorImage}
                src={elevateCounselingPng}
                alt="Elevate Counseling Services"
              />
            </Link>
          </li>
          <li className={styles.sponsorItem}>Jane Rothenberg-Simmons</li>
        </ul>
        <h3 className={styles.tierHeading}>Stoughton Star</h3>
        <ul className={styles.sponsorList}>
          <li className={styles.sponsorItem}>
            <Link href="https://www.northshore-bank.com" target="_blank">
              <Image
                className={styles.sponsorImage}
                src={abingtonBankPng}
                alt="Abington Bank"
              />
            </Link>
          </li>
          <li className={styles.sponsorItem}>Sue Harrington</li>
          <li className={styles.sponsorItem}>
            <Link href="https://www.southshorebank.com" target="_blank">
              <Image
                className={styles.sponsorImage}
                src={southShoreBankPng}
                alt="South Shore Bank"
              />
            </Link>
          </li>
        </ul>
        <h3 className={styles.tierHeading}>Honorary Knight Donors</h3>
        <ul className={styles.sponsorList}>
          <li className={styles.sponsorItem}>Titus DosRemedios</li>
          <li className={styles.sponsorItem}>Kelly Grimes</li>
          <li className={styles.sponsorItem}>Betsy Maguire</li>
          <li className={styles.sponsorItem}>Caroline Sprague</li>
          <li className={styles.sponsorItem}>Amy White</li>
          <li className={styles.sponsorItem}>Gretchen Fulham</li>
          <li className={styles.sponsorItem}>Jenna Knasin</li>
          <li className={styles.sponsorItem}>Andrew Kreckler</li>
          <li className={styles.sponsorItem}>Brian Maguire</li>
          <li className={styles.sponsorItem}>Lawrence Sauer & Molly Cochran</li>
          <li className={styles.sponsorItem}>Ellen O&apos;Brien</li>
          <li className={styles.sponsorItem}>Evelyn O&apos;Donoghue</li>
          <li className={styles.sponsorItem}>Stacey & Joe Slowinski</li>
          <li className={styles.sponsorItem}>Piper & Caleb Slowinski</li>
          <li className={styles.sponsorItem}>
            <Link href="https://stoughtondems.com" target="_blank">
              Stoughton Democratic Town Committee
            </Link>
          </li>
          <li className={styles.sponsorItem}>
            <Link href="https://www.stoughton.org/536/Energy-Sustainability-Committee" target="_blank">
              Stoughton&apos;s Energy & Sustainability Committee
            </Link>
          </li>
          <li className={styles.sponsorItem}>Beth Dodd</li>
          <li className={styles.sponsorItem}>Kaylee Mavis</li>
          <li className={styles.sponsorItem}>Madeline Avina</li>
          <li className={styles.sponsorItem}>Bookworm Quincy</li>
          <li className={styles.sponsorItem}>Scott Minto</li>
        </ul>
      </div>
    </section>
  );
}
