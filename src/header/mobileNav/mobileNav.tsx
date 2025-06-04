"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import facebookSvg from "@/assets/social/facebook.svg";
import instagramSvg from "@/assets/social/instagram.svg";
import styles from "./mobileNav.module.css";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={clsx(styles.root, {
        [styles.isOpen]: isOpen,
      })}
    >
      <button className={styles.closeButton} onClick={onClose} />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.listLink} href="/">
              About
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.listLink} href="/events">
              Events
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.listLink} href="/pride">
              Pride
            </Link>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.listLink}
              href="https://givebutter.com/rainbowknights"
              target="_blank"
            >
              Donate
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.listLink}
              href="https://docs.google.com/forms/d/e/1FAIpQLSedVhpiIZo763_0-5K83t2F8zOoVvQsqIfVAXBINnPLb0nanA/viewform"
              target="_blank"
            >
              Join Mailing List
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.listLink}
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8ghOCA9rcb9bkolLSxA6TD8x0dBZLQ3NYXM_wwK9chnq8CA/viewform"
              target="_blank"
            >
              Join Discord
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.listLink}
              href="https://www.bonfire.com/store/rainbow-knights"
              target="_blank"
            >
              Buy Merch
            </a>
          </li>
        </ul>
      </nav>
      <nav className={styles.socialNav}>
        <ul className={styles.socialNavList}>
          <li className={styles.socialNavItem}>
            <a
              className={styles.socialNavLink}
              href="https://www.facebook.com/profile.php?id=61572273041024"
              target="_blank"
            >
              <Image
                className={styles.socialNavIcon}
                alt="Facebook"
                src={facebookSvg}
              />
            </a>
          </li>
          <li className={styles.socialNavItem}>
            <a
              className={styles.socialNavLink}
              href="https://www.instagram.com/stoughtonpride"
              target="_blank"
            >
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
  );
};

export default MobileNav;
