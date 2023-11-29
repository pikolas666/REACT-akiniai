
import axios from 'axios';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Spinner from '@/components/atoms/Spinner/Spinner';
import Footer from '@/components/Footer/Footer';
import Cards from '@/components/organisms/Cards/Cards';
import GlassesForm from '@/components/Form/Form';

const Akiniai = () => {
  const [akiniai, setAkiniai] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://64ec4552f9b2b70f2bfa0585.mockapi.io/akiniai'
      );
      setAkiniai(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <Header />
      <main>
        <h2>Sveiki atvyke i Akiniai-Pigiau internetine parduotuve!</h2>
        <p>Cia galite isigyti firminiu akiniu remeliu pigiau</p>
        <GlassesForm fetchData={fetchData} />

        {loading ? <Spinner /> : <Cards data={akiniai} />}
      </main>
      <Footer />
    </div>
  );
};

export default Akiniai;
