// src/components/Header/Header.tsx

import Link from 'next/link';
// import { MenuIcon } from '@heroicons/react/outline';

interface HeaderProps {
  toggleSidenav: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidenav }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-between items-center px-6 py-4 shadow-md z-50">
      <div className="text-2xl font-bold">EastFeast Catering</div>
      <nav className="hidden md:flex space-x-6">
        <Link href="#section1" className="hover:text-gray-300">Home </Link>
        <Link href="#section2" className="hover:text-gray-300">Services</Link>
        <Link href="#section3" className="hover:text-gray-300">About</Link>
        <Link href="#section4" className="hover:text-gray-300">Contact</Link>
      </nav>
      <button className="md:hidden" onClick={toggleSidenav}>
        {/* <MenuIcon className="h-6 w-6" /> */}
      </button>
    </header>
  );
};

export default Header;
