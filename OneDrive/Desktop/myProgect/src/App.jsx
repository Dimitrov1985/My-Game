import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Banner from './components/Banner/Banner'
import BigText from './components/BigText/BigText'
import Email from './components/Email/Email'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Trending from './components/Trending/Trending'
import "./styles.css"
import About from './Pages/About/About'
 import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className='wrapper'>
              <Hero/>
              <Trending/>
              <BigText/>
              <Banner/>
              <Features/>
              <Projects/>
              <Email/>
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App