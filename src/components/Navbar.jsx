import React from 'react';
import Styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
    <header className={Styles.Navbar}>
    <Link href="/">
    <div className={Styles.logo}>
    <Image src={Logo} alt='Lui Music' />
    <span>LuiMusic</span>  
    </div>
    </Link>
    <div className={Styles.leffNav}>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
    </div>
    </header> 
    </>
  )
}
