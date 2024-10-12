import { useEffect, useState } from 'react';

const Navbar = () => {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State for the navbar toggle (open/close)
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar visibility on small screens
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed w-full z-20 top-0 start-0 text-black"
      style={{
        height: 'auto',
        background: isScrolled
          ? 'rgba(27, 27, 27, 0.7)' // Grey background when scrolled
          : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0))', // Transparent background at top
        backdropFilter: isScrolled ? 'blur(4px)' : 'none', // Apply blur when scrolled
        transition: 'background 0.6s ease, backdrop-filter 0.6s ease', // Smooth transition
      }}
    >

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
        </a>

        {/* Right side buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white  focus:ring-4 focus:outline-none hover:bg-white hover:text-black transition-colors font-medium rounded-lg text-sm px-4 py-2 text-center  border border-white">
            Get started
          </button>
          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Navbar items - toggle visibility on small screens */}


        <h1 className='text-5xl font-bold text-white'>KENZO</h1>




      </div>


      <aside className='flex flex-row justify-center pb-[1%]'>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-1 px-2 transition-colors hover:bg-white hover:text-black text-white text-xl  " aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-1 px-2 transition-colors hover:bg-white hover:text-black text-white text-xl  " aria-current="page">Products</a>
            </li>
            <li>
              <a href="#" className="block py-1 px-2 transition-colors hover:bg-white hover:text-black text-white text-xl  " aria-current="page">About Us</a>
            </li>
            <li>
              <a href="#" className="block py-1 px-2 transition-colors hover:bg-white hover:text-black text-white text-xl  " aria-current="page">Contact</a>
            </li>

          </ul>
        </div>
      </aside>



    </nav>
  );
};

export default Navbar;
