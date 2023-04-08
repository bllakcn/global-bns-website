"use client";

import styles from "./Navbar.module.css";
import { FC } from "react";

type HamburgerProps = {
  setIsActive: (value: boolean) => void;
  isActive: boolean;
};

const Hamburger: FC<HamburgerProps> = ({ setIsActive, isActive }) => {
  return (
    <div className="block sm:hidden">
      <ul>
        <li className="items-center" onClick={() => setIsActive(!isActive)}>
          <button
            className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${
              isActive ? styles.isActive : ""
            } p-2`}
            type="button"
            title="hamburger"
            aria-label="menu"
          >
            <span className={styles.hamburgerBox}>
              <span className={styles.hamburgerInner}></span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
