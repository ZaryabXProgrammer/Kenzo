
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Elements/Navbar'
import Footer from './Elements/Footer'
import Products from './Pages/Products'

const App = () => {

  return (

    <div>

      <Router>

        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/products' element={<Products />} />

        </Routes>

        <Footer />

      </Router>

    </div>
  )
}

export default App