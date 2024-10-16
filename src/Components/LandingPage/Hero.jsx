
import { motion } from 'framer-motion';

const Hero = () => {
  return (

    //For Bg Video

    <div className="relative w-screen h-[100vh]">
      {/* Background image for smaller screens */}
      <img
        className="absolute inset-0 object-cover w-full h-full md:hidden"
        src="https://img.freepik.com/free-photo/futuristic-set-with-dj-charge-music-using-virtual-reality-glasses_23-2151418211.jpg?t=st=1728727383~exp=1728730983~hmac=eca5b10e0ba95b7f108f970621d34f61f2232eabc1f7ed05ef4fff2a47670298&w=996"
        alt="Background"
      />

      {/* Fullscreen background video for medium and larger screens */}
      <iframe
        className="absolute inset-0 w-full h-full hidden md:block"
        src="https://www.youtube.com/embed/wBL8qwmD538?autoplay=1&mute=1&loop=1&playlist=wBL8qwmD538&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Black overlay for tint */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text overlay */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left text-white pl-8 md:pl-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-[7vw] font-bold md:text-[6vw]"
        >
          中國朝代藝術<br />Chinese Dynasty Art
        </motion.h1>
      </div>
    </div>


    //For bg Image
    // <div className='relative w-screen h-[90vh]'>
    //   {/* Fullscreen background image */}
    //   <img
    //     src="https://img.freepik.com/free-photo/futuristic-set-with-dj-charge-music-using-virtual-reality-glasses_23-2151418211.jpg?t=st=1728727383~exp=1728730983~hmac=eca5b10e0ba95b7f108f970621d34f61f2232eabc1f7ed05ef4fff2a47670298&w=996"
    //     className='object-cover w-full h-full'
    //     alt="Background"
    //   />


    // </div>
  )
}

export default Hero