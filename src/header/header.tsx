import Image from "next/image";
import Link from "next/link";
import logotypeSvg from "../assets/logotype.svg";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            alt="Rainbow Knights"
            src={logotypeSvg}
          />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {/* <li className={styles.item}>
              <Link className={styles.link} href="/">
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/pride">
                Pride
              </Link>
            </li> */}
            <li className={styles.item}>
              <a className={styles.buttonLink} href="https://givebutter.com/rainbowknights" target="_blank">
                Donate
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
