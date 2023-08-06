"use client";
import React from 'react';
import Styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import Link from 'next/link';
import { useAuthContext } from '@/context/AuthContext';

export default function Navbar() {
  const { user } = useAuthContext();
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
    {user ? (
          <Link href="/logout">Logout</Link>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </>
        )}
    </div>
    </header> 
    </>
  )
}
