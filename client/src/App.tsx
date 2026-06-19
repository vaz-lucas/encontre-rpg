import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import Home from './pages/Home'
import CatalogoPage from './pages/CatalogoPage'
import { EventosPage } from './pages/EventosPage'


function App() {
  return (
    <>
      <div className='title'>
        <Navbar />
      </div>
      <div className='flex min-h-screen'>
        <Sidebar />
        <div className='lg:ml-52 flex-1 flex flex-col items-center pt-16'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/eventos" element={<EventosPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
