import './App.css'
import { Catalogo } from './components/Catalogo'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'


function App() {



  return (
    <>
    <div className='title'>
      <Navbar />
      <h2 className="text-center pt-6">Aqui você terá ajuda para encontrar RPGs independentes e eventos presenciais (e online)</h2>
  
    </div>

<div className='flex'>
  <Sidebar />
  <Catalogo />
</div>
   </>
  )
}

export default App
