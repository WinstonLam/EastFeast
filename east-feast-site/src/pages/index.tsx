// src/pages/index.tsx

import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <>
      <Head>
        <title>EastFeast Catering</title>
        <meta name="description" content="EastFeast Catering Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleSidenav={toggleSidenav} />
      <Sidenav isOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />

      {/* Main Content */}
      <main className="pt-20">
        <section id="section1" className="min-h-screen flex flex-col justify-center items-center bg-white px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to EastFeast Catering</h1>
          <p className="text-lg text-gray-700 max-w-2xl text-center">
            Your perfect partner for delicious catering services.
          </p>
        </section>

        <section id="section2" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl text-center">
            We offer a wide range of catering services to suit your needs.
          </p>
        </section>

        <section id="section3" className="min-h-screen flex flex-col justify-center items-center bg-white px-6">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 max-w-2xl text-center">
            Learn more about our journey and values.
          </p>
        </section>

        <section id="section4" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 max-w-2xl text-center">
            Get in touch to plan your next event.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
