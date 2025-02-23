// pages/index.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/sections/Header';
import Sidenav from '../components/sections/Sidenav';
import Footer from '../components/sections/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeastsSection from '../components/sections/FeastsSection';
import ReserveSection from '../components/sections/ReserveSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import LoadingScreen from '@/components/sections/LoadingScreen';

const Home: React.FC = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // On mount, check localStorage to determine if the user has already seen the loading screen.
  useEffect(() => {
    if (sessionStorage.getItem('hasVisited')) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const toggleSidenav = () => {
    setIsSidenavOpen((prev) => !prev);
  };

  // Callback passed to LoadingScreen when its fade-out completes.
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>EastFeast Catering</title>
        <meta name="description" content="EastFeast Catering Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <Header sideNavOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />
      <Sidenav sideNavOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />

      <main className="pt-20 scroll-smooth">
        <HeroSection />
        <FeastsSection />
        <ReserveSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
