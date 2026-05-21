import './App.css'
import { Greet } from './components/Greet'

function App() {



  return (
    <>
    <div className='title'>
      <h1 className="text-9xl">Encontre RPG</h1>
  <h2>Aqui você terá ajuda para encontrar RPGs independentes e eventos presenciais (e online)</h2>
  </div>

    <div>
      <div className='col-esquerda'></div>  
<Greet />
<div className='col-direita'></div>
  </div>
   </>
  )
}

export default App
