import React from 'react';
// @ts-ignore
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles["nav-bar"]}>
        <div className={styles["nav-container"]}>
          <h1>Harmonic Tool</h1>
          <ul>
            <li>Notebook</li>
            <li>Logout</li>
            {/* <li>Sign Up</li> */}
          </ul>
        </div>
    </nav>
  );
}