import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import Link from 'next/link';
import styles from '@/components/Header/Header.module.css';


const Header = () => (
  <header className={styles.header}>
    <Link className={styles.link} href="/" ><h1>Akiniai-Pigiau</h1></Link>
    <Navigation />
  </header>
);

export default Header;