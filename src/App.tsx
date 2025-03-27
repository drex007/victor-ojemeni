
import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Projects  from './components/Projects'

function App() {

  return (
    <div className='bg-black text-white bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Projects />
      <Contact />
      <div className='h-[400px]'>

      </div>

    </div>
  )
}

export default App
