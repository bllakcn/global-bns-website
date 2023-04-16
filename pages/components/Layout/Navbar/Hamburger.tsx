"use client";

import styles from "./Navbar.module.css";
import { FC } from "react";

type HamburgerProps = {
  setIsActive: (value: boolean) => void;
  isActive: boolean;
  y: number;
} & React.HTMLAttributes<HTMLDivElement>;

const Hamburger: FC<HamburgerProps> = ({ setIsActive, isActive, y }) => {
  return (
    <div className="block sm:hidden">
      <ul>
        <li className="items-center" onClick={() => setIsActive(!isActive)}>
          <button
            className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${
              isActive ? styles.isActive : ""
            } p-2 `}
            type="button"
            title="hamburger"
            aria-label="menu"
          >
            <span className={` ${styles.hamburgerBox}`}>
              <span
                className={` ${
                  y > 20
                    ? "bg-primary-400 after:bg-primary-400 before:bg-primary-400"
                    : "bg-primary-100 after:bg-primary-100 before:bg-primary-100"
                } ${styles.hamburgerInner}`}
              ></span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
