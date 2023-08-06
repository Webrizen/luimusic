"use client";
import React from "react";
import styles from '@/styles/login.module.css';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { getAuth, signOut } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

export default function Page() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Show success message after logout using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Logged out!',
        text: 'You have been successfully logged out.',
      }).then(() => {
        router.push("/"); // Redirect to the home page after successful logout
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Have A Nice Day! - Logout</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
