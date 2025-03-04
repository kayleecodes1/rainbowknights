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
      </main>
      <Footer />
    </div>
  );
}
