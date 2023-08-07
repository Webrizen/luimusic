"use client";
import React, { useEffect, useState } from 'react';
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from '@/styles/music.module.css';
import Card from '@/components/Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import Swal from 'sweetalert2';

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    if (user == null) router.push("/login");

    // Fetch music data from Firestore
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Musics"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setMusicData(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      <section className={styles.Music}>
        <h1>Your Music</h1>
        <div className={styles.cardHolder}>
          {musicData.map((music) => (
            <Card
              key={music.id}
              title={music.name}
              artist={music.artist}
              source={music.source}
              url={music.url}
            />
          ))}
        </div>
      </section>
    </>
  );
}