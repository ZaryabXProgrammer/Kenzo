import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to the homepage if not there already
      navigate('/');
    }
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const section = document.querySelector(`#${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Add a delay to allow the page to render
  };


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
          : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))', // Transparent background at top
        backdropFilter: isScrolled ? 'blur(4px)' : 'none', // Apply blur when scrolled
        transition: 'background 0.6s ease, backdrop-filter 0.6s ease', // Smooth transition
      }}
    >

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <img src="https://i.ibb.co/HCzJ49n/kenzo-Logo.png" className='w-14' alt="" />
        </Link>

        {/* Right side buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href='#nftMarketplace' type="button" className="text-white  focus:ring-4 focus:outline-none hover:bg-white hover:text-black transition-colors font-medium rounded-lg text-sm px-4 py-2 text-center  border border-white">
            Get started
          </a>
          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#ebebeb] border border-[#ebebeb] rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 "
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


        <h1 className='text-xl font-bold text-white md:flex hidden'>中國朝代藝術
          Chinese Dynasty Art</h1>




      </div>


      <aside className='flex flex-row justify-center pb-[1%]'>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'
            }`}
          id="navbar-sticky"
          style={{ backgroundColor: isOpen ? 'black' : 'transparent' }}  // Added black background for mobile menu
        >
          <ul className="flex flex-col p-4 gap-2 md:gap-0 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to='/' className="flex flex-col lg:items-center items-start py-1 px-2 transition-colors hover:bg-white hover:text-black text-white text-sm  " aria-current="page">
                <span>主页</span>
                <span>Home</span>
              </Link>
            </li>

           

            <li>
              <a
                onClick={() => handleScrollToSection('nftMarketplace')}
                className="flex flex-col cursor-pointer lg:items-center items-start py-1 px-2 transition-colors hover:bg-white hover:text-black text-white text-sm ">
                <span>正在交易的NFT</span>
                <span>NFT Marketplace</span>
              </a>
            </li>

            <li>
              <a onClick={() => handleScrollToSection('ourCollections')} className="flex flex-col lg:items-center items-start py-1 px-2 transition-colors cursor-pointer hover:bg-white hover:text-black text-white text-sm  " aria-current="page">
                <span>我们的收藏</span>
                <span>Our Collections</span>
              </a>
            </li>

            <li>
              <a onClick={() => handleScrollToSection('aboutUs')}
                className="flex flex-col lg:items-center items-start py-1 px-2 transition-colors cursor-pointer hover:bg-white hover:text-black text-white text-sm  " aria-current="page">
                <span>关于我们</span>
                <span>About Us</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>



    </nav>
  );
};

export default Navbar;
