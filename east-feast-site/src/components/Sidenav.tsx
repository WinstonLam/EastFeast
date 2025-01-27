// src/components/Sidenav/Sidenav.tsx

// import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';


interface SidenavProps {
  isOpen: boolean;
  toggleSidenav: () => void;
}

const Sidenav: React.FC<SidenavProps> = ({ isOpen, toggleSidenav }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleSidenav}
      ></div>

      {/* Sidenav */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleSidenav}>
            {/* <XIcon className="h-6 w-6" /> */}
          </button>
        </div>
        <nav className="flex flex-col mt-4 space-y-2">
          <Link href="#section1" className="px-4 py-2 hover:bg-gray-700" onClick={toggleSidenav}>
            Home
          </Link>
          <Link href="#section2" className="px-4 py-2 hover:bg-gray-700" onClick={toggleSidenav}>
            Services
          </Link>
          <Link href="#section3" className="px-4 py-2 hover:bg-gray-700" onClick={toggleSidenav}>
            About
          </Link>
          <Link href="#section4" className="px-4 py-2 hover:bg-gray-700" onClick={toggleSidenav}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
