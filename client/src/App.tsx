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
      <h2 className="text-center pt-6">Aqui você terá ajuda para encontrar RPGs independentes e eventos presenciais (e online)</h2>
    </div>

    <div className="px-4 py-4">
      
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
