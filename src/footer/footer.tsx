import Image from "next/image";
import Link from "next/link";
import logotypeSvg from "@/assets/logotype.svg";
import facebookSvg from "@/assets/social/facebook.svg";
import instagramSvg from "@/assets/social/instagram.svg";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainColumn}>
          <Link href="/">
            <Image
              className={styles.logo}
              alt="Rainbow Knights"
              src={logotypeSvg}
            />
          </Link>
          <p className={styles.description}>
            The Rainbow Knights&rsquo; mission is to connect, nurture, and
            support all LGBTQIA+ people in the Stoughton, Massachusetts area.
          </p>
        </div>
        <div className={styles.linksColumn}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link className={styles.navLink} href="/">
                  About
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.navLink} href="/pride">
                  Pride
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.navLink} href="/community">
                  Community & Events
                </Link>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#" target="_blank">
                  Donate
                </a>
              </li>
            </ul>
          </nav>
          <nav className={styles.socialNav}>
            <ul className={styles.socialNavList}>
              <li className={styles.socialNavItem}>
                <a className={styles.socialNavLink} href="#" target="_blank">
                  <Image
                    className={styles.socialNavIcon}
                    alt="Facebook"
                    src={facebookSvg}
                  />
                </a>
              </li>
              <li className={styles.socialNavItem}>
                <a className={styles.socialNavLink} href="#" target="_blank">
                  <Image
                    className={styles.socialNavIcon}
                    alt="Instagram"
                    src={instagramSvg}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
