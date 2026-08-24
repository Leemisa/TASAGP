import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Affiliates from './components/Affiliates'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Affiliates />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
