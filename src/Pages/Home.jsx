
import { useLocation } from 'react-router-dom'
import CardSlider from '../Components/LandingPage/CardSlider'
import Hero from '../Components/LandingPage/Hero'
import ImgCarousel from '../Components/LandingPage/ImgCarousel'
import QuadGallery from '../Components/LandingPage/QuadGallery'
import ScrambledImages from '../Components/LandingPage/ScrambledImages'
import { useEffect } from 'react'



const Home = () => {


  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname])



  return (
    <div className='overflow-x-hidden'>

      <Hero />

      <CardSlider />

      <QuadGallery />

      <ScrambledImages />

      <ImgCarousel />

    </div>
  )
}

export default Home