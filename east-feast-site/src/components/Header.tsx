// src/components/Header/Header.tsx
import { useState } from 'react';
import { FiAlignRight, FiX } from 'react-icons/fi';


import Link from 'next/link';
import Image from 'next/image'; // Import Image component

// import { MenuIcon } from '@heroicons/react/outline';

interface HeaderProps {
  toggleSidenav: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidenav }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background text-white flex justify-between items-center px-6 py-4 shadow-md z-50 rounded-b-lg

">
      <div className='flex items-center justify-between w-[150px] sm:w-[300px]'>
        <Image src="/logo.png" alt="main logo" width={50} height={50} className='object-contain rounded-[2rem]' />
        <h1 className="text-xl sm:text-2xl font-bold">
          <span className="block sm:inline text-gradient">EastFeast</span>
          <span className="block sm:inline">
            <span className=" sm:pl-3 text-gradient">Catering</span>
          </span>
        </h1>
      </div>

      {/* Desktop Navigation*/}
      <nav className="hidden md:flex space-x-6">
        <Link href="#section1" className="hover:text-gray-300">Home </Link>
        <Link href="#section2" className="hover:text-gray-300">Services</Link>
        <Link href="#section3" className="hover:text-gray-300">About</Link>
        <Link href="#section4" className="hover:text-gray-300">Contact</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 relative w-10 h-10"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <div className="relative w-10 h-10 -translate-y-2.5">
          <FiAlignRight
            className={`absolute w-10 h-10 transition-all duration-300 transform gradient ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`}
          />
          <FiX
            className={`absolute w-10 h-10 mb-80 transition-all duration-300 transform gradient ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`}
          />
        </div>
      </button>
    </header>
  );
};

export default Header;
