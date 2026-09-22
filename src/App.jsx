import { useState } from 'react';
import { db } from './firebaseConnection';


function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');


  function handleAdd(){
    alert("TESTE")
  }

  return (

    <div>

      <h1>
        ReactJS + Firebase
      </h1>

      <div className='w-[600px] flex flex-col'>
        <label>
          Título:
        </label>
        <textarea type='text' placeholder='Digite o título' />

        <label>Autor:</label>
        <input type='text' placeholder='Autor do post' />

        <button onClick={handleAdd}>
          Cadastrar
        </button>
      </div>


    </div>

  )
}

export default App
