import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import ContactForm from '@/components/ContactForm/ContactForm';

const Kontaktai = () => (
  <div>
    <Head>
      <title>My Next.js App</title>
    </Head>
    <Header />
    <main>
      <h2>Norite su mumis susisiekti?</h2>
      <p>Susisiekite su mumis el. pastu : dfdf@dfdsg.vsd , arba uzpildykite forma:</p>
    <ContactForm />
    </main>
  </div>
);

export default Kontaktai;