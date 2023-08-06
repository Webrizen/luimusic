"use client";
import React from 'react';
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from '@/styles/music.module.css';
import Card from '@/components/Card';
import Playlist from '@/components/Playlist';


export default function page() {
  const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/login")
    }, [user])

  return (
    <>
    <section className={styles.Music}>
      <h1>Recently Played</h1>
      <div className={styles.cardHolder}>
        <Card />
      </div>
      <h1>Your PlayLists</h1>
      <div className={styles.cardHolder}>
        <Playlist/>
      </div>
    </section>
    </>
  )
}
