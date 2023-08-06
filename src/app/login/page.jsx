"use client";
import React, { useState } from "react";
import styles from '@/styles/login.module.css';
import Link from "next/link";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

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
        text: 'Login successful!',
      }).then(() => {
        router.push("/music");
      });
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Welcome Back!</h1>
          <form onSubmit={handleForm}>
            <label htmlFor="email">Enter Your Email*</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
            <label htmlFor="password">Enter Your Password*</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
            <div className={styles.buttons}>
              <Link href="/">Forgot Password?</Link>
              |
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
