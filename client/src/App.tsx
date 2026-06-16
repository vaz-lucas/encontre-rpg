import './App.css'
import { Catalogo } from './components/Catalogo'
import { EventoCarrossel } from './components/EventoCarrossel'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'


function App() {

  return (
    <>
    <div className='title'>
      <Navbar />
    </div>

      

    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col items-center'>
      <EventoCarrossel />
      <Catalogo />
      </div>
    </div>
   </>
  )
}

export default App
