import Image from "next/image";
import Header from "@/header/header";
import Footer from "@/footer/footer";
import Hero from "./hero/hero";
import queeraokePosterPng from "@/assets/queeraoke-poster.png";
import styles from "./page.module.css";

export default function Pride() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.events}>
              <div className={styles.event}>
                <h2 className={styles.eventTitle}>Queer-aoke</h2>
                <div className={styles.eventDate}>
                  Saturday, June 7, 6 - 10 PM
                </div>
                <div className={styles.eventLocation}>Toffee Social (10 Wyman St, Stoughton, MA)</div>
                <div className={styles.eventDescription}>
                  <p>
                    Kick off Pride at Rainbow Knights&apos; QUEER-AOKE night at
                    Toffee Social! Whether you&apos;re belting ballads or rocking
                    anthems, we want to hear YOUR voice!
                  </p>
                  <p>
                    Bring your friends, your fabulous energy, and your favorite
                    song requests! No experience needed—just enthusiasm and good
                    vibes. New org, same pride—come celebrate with us as we
                    build community one song at a time!
                  </p>
                  <p>
                    <em>Suggested donation of $10 at the door.</em>
                  </p>
                </div>
                <div className={styles.eventPoster}>
                  <Image src={queeraokePosterPng} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
