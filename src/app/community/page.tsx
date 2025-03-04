import Header from "@/header/header";
import Footer from "@/footer/footer";
import styles from "./page.module.css";

export default function Community() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>Community</main>
      <Footer />
    </div>
  );
}
