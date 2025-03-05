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
            <p>
              Our signature event, Stoughton Pride, is an annual family-friendly
              celebration during Pride Month that has been held at First Parish
              Church in downtown Stoughton annually since 2021. This event
              features live music, drag performances, food trucks,
              children&apos;s storytime, yard games, a raffle, and more as we
              celebrate as a community.
            </p>
            <p>
              The event has grown year-over-year in scope and size, and now
              features a companion event: &quot;Queeraoke&quot;, an evening
              social for local LGBTQIA+ adults.{" "}
            </p>
            <p>
              This year&apos;s Stoughton Pride will be held on{" "}
              <strong>June 8th, 2025 from 1-4pm at First Parish Church</strong>.
              Our Queeraoke event is tentatively scheduled for the evening of
              June 7th, location TBD.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
