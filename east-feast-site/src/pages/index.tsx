import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ReserveSection from '../components/sections/ReserveSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import LoadingScreen from '@/components/LoadingScreen';

const Home: React.FC = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  // Callback passed to the LoadingScreen to hide it once the animation completes.
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

      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Header sideNavOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />
          <Sidenav sideNavOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />

          <main className="pt-20 scroll-smooth">
            <HeroSection />
            <ServicesSection />
            <ReserveSection />
            <AboutSection />
            <ContactSection />
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;