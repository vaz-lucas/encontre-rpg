import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Catalogo } from './components/Catalogo'
import { EventoCarrossel } from './components/EventoCarrossel'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import Home from './pages/Home'


function App() {
  return (
    <>
      <div className='title'>
        <Navbar />
      </div>
      <div className='flex min-h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col items-center pt-16'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/eventos" element={<EventoCarrossel />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
