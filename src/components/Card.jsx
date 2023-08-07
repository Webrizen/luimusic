import React from 'react';
import styles from '@/styles/music.module.css';
import Image from 'next/image';
import DummyImage from '@/assets/logo.png';
import { BiSolidCircle } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';

export default function Card({ title, artist, url, source }) {
  return (
    <>
      <div className={styles.Card}>
          <Image src={DummyImage} alt='Music Image'/>
          <h2>{title}</h2>
          <p>{artist} <BiSolidCircle/> {source}</p>
          <div className={styles.PlayBTN}><BsFillPlayFill/></div>
        </div>
    </>
  )
}
