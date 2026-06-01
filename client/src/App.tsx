import './App.css'
import { Catalogo } from './components/Catalogo'
import { Greet } from './components/Greet'

function App() {



  return (
    <>
    <div className='title'>
      <h1 className="text-5xl text-center">Encontre RPG</h1>
  <h2 className="text-center">Aqui você terá ajuda para encontrar RPGs independentes e eventos presenciais (e online)</h2>
  </div>

    <div className='text-center flex flex-row justify-center items-center gap-4 flex-wrap'>
      <div className='col-esquerda basis-sm'>esq</div>  

{/* Centro */}
      <div className='basis-lg'>
        <Catalogo />
        <Greet />
      </div>


<div className='col-direita basis-sm'>dir</div>
     </div>
   </>
  )
}

export default App
