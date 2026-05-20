import './App.css'
import { useState } from 'react'

function App() {

function greet(person: string) {
  console.log(`Hello, ${person}!`)
  return `Hello, ${person}!`
}

const [user, setUser] = useState('User')

function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
  setUser(event.target.value)
}

  return (
    <>
  <div>
<h1>{greet('world')}</h1>
<p>Iniciando o projeto. Primeiro commit incoming!</p>


<h2>Hello {user}!</h2> 

<input type="text" value={user} onChange={handleInputChange} placeholder="Your name" />
  </div>
   </>
  )
}

export default App
