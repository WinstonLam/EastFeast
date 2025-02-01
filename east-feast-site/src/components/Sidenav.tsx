// src/components/Sidenav/Sidenav.tsx

import Link from 'next/link';
import { FiX } from 'react-icons/fi';
import { IoHomeOutline, IoCreateOutline, IoHappyOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiBowlFood } from "react-icons/pi";

import Image from 'next/image'; // Import Image component
import { withBasePath } from '@/utils/withBasePath';




interface SidenavProps {
  sideNavOpen: boolean;
  toggleSidenav: () => void;
}

const Sidenav: React.FC<SidenavProps> = ({ sideNavOpen, toggleSidenav }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${sideNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={toggleSidenav}
      ></div>

      {/* Sidenav */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-red-800 text-white z-50 transform transition-transform duration-300 ${sideNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-center px-4 py-4 w-full ">
          <div className="flex justify-between items-center w-[90%]">

            <div className='flex-5 w-full flex justify-evenly items-center relative -translate-x-8

'>
              <Image src={withBasePath('/logo.png')} alt="main logo" width={50} height={50} className='object-contain rounded-[2rem] cursor-pointer' />

              <h2 className="text-2xl font-semibold">EastFeast Catering</h2>
            </div>

            <div className='flex-3 w-full flex justify-end'>
              <button
                className="md:hidden p-2 relative w-10 h-10 left-0"
                onClick={() => toggleSidenav()}
                aria-label="Toggle navigation menu"
              >
                <div className="w-10 h-10 -translate-y-2">
                  <FiX
                    className={` w-10 h-10 transition-all duration-300 transform stroke-second ${!sideNavOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                      }`}
                  />
                </div>
              </button>
            </div>

            <button onClick={toggleSidenav}>
              {/* <XIcon className="h-6 w-6" /> */}
            </button>
          </div>
        </div>

        <nav className="mt-4 space-y-2 relative text-left w-full flex justify-center">
          <div className='w-90 flex flex-col justify-center w-[90%]'>
            <Link href="#section1" className="px-4 py-4 text-2xl hover:bg-red-900 transition-all duration-300 flex items-center " onClick={toggleSidenav}>
              <IoHomeOutline />
              <span className='ml-5'>Home</span>
            </Link>

            <Link href="#section2" className="px-4 py-4 text-2xl hover:bg-red-900 transition-all duration-300 flex items-center " onClick={toggleSidenav}>
              <PiBowlFood />
              <span className='ml-5'>Feasts </span>
            </Link>

            <Link href="#section3" className="px-4 py-4 text-2xl hover:bg-red-900 transition-all duration-300 flex items-center " onClick={toggleSidenav}>
              <IoCreateOutline />
              <span className='ml-5'>Reserve </span>

            </Link>

            <Link href="#section4" className="px-4 py-4 text-2xl hover:bg-red-900 transition-all duration-300 flex items-center " onClick={toggleSidenav}>
              <IoHappyOutline />
              <span className='ml-5'>About Us </span>

            </Link>
            <Link href="#section5" className="px-4 py-4 text-2xl hover:bg-red-900 transition-all duration-300 flex items-center " onClick={toggleSidenav}>
              <IoChatboxEllipsesOutline />
              <span className='ml-5'>Contact </span>

            </Link>
          </div>

        </nav>
      </div>
    </>
  );
};

export default Sidenav;
