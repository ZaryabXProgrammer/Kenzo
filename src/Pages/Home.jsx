
import { useLocation } from 'react-router-dom'
import CardSlider from '../Components/LandingPage/CardSlider'
import Hero from '../Components/LandingPage/Hero'


import ScrambledImages from '../Components/LandingPage/ScrambledImages'
import { useEffect } from 'react'
import BottomPage from '../Components/LandingPage/BottomPage'



const Home = () => {


  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname])



  return (
    <div className='overflow-x-hidden '>

      <Hero />

      <CardSlider />

      {/* <QuadGallery /> */}

      <ScrambledImages />

      <BottomPage />

      {/* <ImgCarousel /> */}

    </div>
  )
}

export default Home