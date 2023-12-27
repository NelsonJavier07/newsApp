import './App.css'
import { LandingPages } from '../src/pages/LandingPages.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { getNews } from '../utils/httpClient.js'


function App() {
  
  return (
      <>
        <BrowserRouter>
          <header>
            <Link to='/'><h1>Total News</h1></Link>
          </header>
          <Routes>
            <Route path='/' element={ <LandingPages /> } />
          </Routes>
        </BrowserRouter>
        <button onClick={getNews}>traer consulta</button>
      </>
  )
}

export default App
