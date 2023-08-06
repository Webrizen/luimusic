import React from 'react';
import styles from '@/styles/music.module.css';
import Image from 'next/image';
import DummyImage from '@/assets/logo.png';
import { BiSolidCircle } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';

export default function Card() {
  return (
    <>
      <div className={styles.Card}>
          <Image src={DummyImage} alt='Music Image'/>
          <h2>Music Title</h2>
          <p>Artist <BiSolidCircle/> YouTube</p>
          <div className={styles.PlayBTN}><BsFillPlayFill/></div>
        </div>
    </>
  )
}
