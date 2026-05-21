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
<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGVtN29ydTB5dHE3YzdlMmd3azFhenlxZTMzcnpsY3NwbGcyZnlqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lsJCkIKV6AT28/giphy.gif" alt="gif" className='gif' />
<div className='col-direita'></div>
  </div>
   </>
  )
}

export default App
