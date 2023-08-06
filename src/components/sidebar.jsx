import React from 'react';
import Styles from '@/styles/sidebar.module.css';
import { BiHome, BiSearch, BiPlus, BiCard } from 'react-icons/bi';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
     <div className={Styles.SidebarSection}>
     <div className={Styles.Sidebar}>
      <Link href="/music">
      <div className={Styles.LinkBox}>
        <BiHome />
        <span>Home</span>
      </div>
      </Link>
      <Link href="/search">
      <div className={Styles.LinkBox}>
        <BiSearch />
        <span>Search</span>
      </div>
      </Link>
      </div> 
      <div className={Styles.Sidebar}>
        <h3>Your Library</h3>
        <p>create your first playlist & enjoy for free!</p>
        <hr style={{ margin: '10px 0' }} />
      <div className={Styles.spaceSidebar}>
      <Link href="/create">
      <div className={Styles.LinkBox}>
        <BiPlus />
        <span>Create</span>
      </div>
      </Link>
      <Link href="/browse">
      <div className={Styles.LinkBox}>
        <BiCard />
        <span>Browse</span>
      </div>
      </Link>
      </div>
      </div> 
     </div>
    </>
  )
}
