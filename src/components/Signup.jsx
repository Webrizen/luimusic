"use client";
import React, { useState } from "react";
import Swal from 'sweetalert2';
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import styles from '@/styles/login.module.css';
import Link from "next/link";

export const metadata = {
    title: 'Signup',
  }

export default function Signup() {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      // Show error message with SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    } else {
      // Show success message with SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Signup successful! - Now You Can Login',
      }).then(() => {
        router.push("/login");
      });
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>We're Glad That You're Joining Us!</h1>
          <form onSubmit={handleForm}>
            <label htmlFor="name">Enter Your Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <label htmlFor="email">Enter Your Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <label htmlFor="password">Enter Your Password*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className={styles.buttons}>
              <Link href="/">Our Terms & Policies</Link>
              |
              <button type="submit">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
