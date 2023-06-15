import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import './App.css'

const App = () => (
  <BrowserRouter className="bg-container">
    <Header />
    <Home />
    <About />
    <Contact />
  </BrowserRouter>
)

export default App
