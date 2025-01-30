// src/components/Header/Header.tsx
import { FiAlignRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

// import { MenuIcon } from '@heroicons/react/outline';

interface HeaderProps {
  sideNavOpen: boolean;
  toggleSidenav: () => void;
}

const Header: React.FC<HeaderProps> = ({ sideNavOpen, toggleSidenav }) => {

  return (
    <header className="fixed top-0 left-0 w-full bg-background flex justify-center items-center px-6 py-4 shadow-md z-50 rounded-b-lg">
      <div className="flex justify-between items-center max-w-5xl w-full">
        <div className='flex items-center justify-between w-[150px] sm:w-[300px] '>
          <Image src="/logo.png" alt="main logo" width={50} height={50} className='object-contain rounded-[2rem] cursor-pointer' />
          <Link href="#section1">
            <h1 className="text-xl sm:text-2xl sm:mr-5 cursor-pointer group ">
              <span className="block sm:inline text-gradient transition-all duration-300 group-hover:text-red-700 subpixel-antialiased ">EastFeast</span>
              <span className="block sm:inline  sm:pl-3 text-gradient transition-all duration-300 group-hover:text-red-700 subpixel-antialiased">Catering</span>

            </h1>
          </Link>
        </div>


        {/* Desktop Navigation*/}
        <nav className="hidden md:flex space-x-8 lg:space-x-14 ">
          <Link href="#section2" className="text-gradient text-xl text-shadow transition-all duration-300 
              bg-red subpixel-antialiased hover:text-red-700">Feasts </Link>
          <Link href="#section3" className="text-gradient text-xl text-shadow transition-all duration-300 
              bg-red subpixel-antialiased hover:text-red-700">Reserve</Link>
          <Link href="#section4" className="text-gradient text-xl text-shadow transition-all duration-300 
              bg-red subpixel-antialiased hover:text-red-700">About</Link>
          <Link href="#section5" className="text-gradient text-xl text-shadow transition-all duration-300 
              bg-red subpixel-antialiased hover:text-red-700">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 relative w-10 h-10"
          onClick={() => toggleSidenav()}
          aria-label="Toggle navigation menu"
        >
          <div className="relative w-10 h-10 -translate-y-2.5">
            <FiAlignRight
              className={`absolute w-10 h-10 transition-all duration-300 transform stroke-prime ${sideNavOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
            />
          </div>
        </button>

      </div>
    </header>
  );
};

export default Header;
