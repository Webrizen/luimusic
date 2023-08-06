import React from "react";
import styles from '@/styles/login.module.css';
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Welcome Back!</h1>
          <form>
            <label htmlFor="email">Enter Your Email*</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="password">Enter Your Password*</label>
            <input type="password" placeholder="Password" />
            <div className={styles.buttons}>
              <Link href="/">Forgot Password?</Link>
              |
              <button >Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
