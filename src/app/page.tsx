import Header from "@/header/header";
import Footer from "@/footer/footer";
import About from './about/about';
import Hero from './hero/hero';
import Values from "./values/values";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Values />
      </main>
      <Footer />
    </div>
  );
}
