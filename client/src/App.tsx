import './App.css'
import { Catalogo } from './components/Catalogo'


function App() {



  return (
    <>
    <div className='title'>
      <h1 className="text-5xl text-center">Encontre RPG</h1>
  <h2 className="text-center">Aqui você terá ajuda para encontrar RPGs independentes e eventos presenciais (e online)</h2>
  </div>

<div className='flex '>
  <div>esq</div>
  <Catalogo />
  <div>dir</div>
  </div>
   </>
  )
}

export default App
