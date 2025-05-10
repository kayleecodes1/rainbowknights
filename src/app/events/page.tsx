import Header from "@/header/header";
import Footer from "@/footer/footer";
import Hero from "./hero/hero";
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
                <h2 className={styles.eventTitle}>Rainbow Trivia Knight</h2>
                <div className={styles.eventDate}>Tuesday, May 13, 6:00 PM</div>
                <div className={styles.eventDescription}>
                  <p>
                    Calling all queer brainiacs, trivia enthusiasts, and
                    everyone in between! Join us for a night of mind-bending
                    questions, fabulous prizes, and community connection at
                    Toffee Social Bar & Lounge in Stoughton.
                  </p>
                  <p>
                    <strong>WHEN:</strong> Doors open at 6pm | Trivia begins at
                    7pm
                  </p>
                  <p>
                    <strong>WHERE:</strong> Toffee Social - 10 Wyman St,
                    Stoughton
                  </p>
                  <p>
                    <strong>WHO:</strong> LGBTQ+ community & allies welcome!
                  </p>
                  <p>
                    <strong>WHAT:</strong> Trivia categories spanning pop
                    culture, queer history, general knowledge & more!
                  </p>
                  <p>
                    <strong>HOW MUCH:</strong> No registration fee or cover
                    charge - food and drinks available for purchase
                  </p>
                  <p>
                    Gather your smartest friends, choose a team name that makes
                    us laugh, and prepare to battle for brainy glory! Solo
                    players welcome - we&apos;ll match you with a team of new
                    friends!
                  </p>
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
