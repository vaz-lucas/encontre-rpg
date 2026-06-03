import { useState } from "react";

export function Greet() {

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
  
<h2>{greet('world')}</h2>
<p>Iniciando o projeto. Primeiro commit incoming!</p>


<h2>Hello, {user}!</h2> 

<input className="bg-white" type="text" value={user} onChange={handleInputChange} placeholder="Your name" />
<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGVtN29ydTB5dHE3YzdlMmd3azFhenlxZTMzcnpsY3NwbGcyZnlqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lsJCkIKV6AT28/giphy.gif" alt="gif" className='gif' />
  
   </>
  )

}