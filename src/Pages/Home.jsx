
import CardSlider from '../Components/LandingPage/CardSlider'
import Hero from '../Components/LandingPage/Hero'
import ImgCarousel from '../Components/LandingPage/ImgCarousel'
import QuadGallery from '../Components/LandingPage/QuadGallery'
import ScrambledImages from '../Components/LandingPage/ScrambledImages'



const Home = () => {
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