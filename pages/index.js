import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';

import styles from '../styles/Home.module.css'
import Wallpaper from '@/components/atoms/Wallpaper/Wallpaper';
import Footer from '@/components/Footer/Footer';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Akiniai-pigiau</title>
    </Head>
    <Header />
    <main>
      <h2>Akiniai pigiau, tiesiog</h2>
      <p>Nes pas mus pigiau, nei kitur</p>
      <Wallpaper />
    </main>
    <Footer />
  </div>
);

export default Home;