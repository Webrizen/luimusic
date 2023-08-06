import React from "react";
import styles from '@/styles/login.module.css';
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>We're Glad That You're Joining Us!</h1>
          <form>
            <label htmlFor="name">Enter Your Name*</label>
            <input type="text" placeholder="Name" />
            <label htmlFor="email">Enter Your Email*</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="password">Enter Your Password*</label>
            <input type="password" placeholder="Password" />
            <div className={styles.buttons}>
              <Link href="/">Our Terms & Policies</Link>
              |
              <button >Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
