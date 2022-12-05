import Layout from './components/Layout/appLayout'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/homePage'
import About from './pages/About/aboutPage'
import Contact from './pages/Contact/contactPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
