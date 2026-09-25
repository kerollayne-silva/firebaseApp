import { useState } from 'react';
import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore'

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  // async function handleAdd(){
  //   await setDoc(doc(db, "posts", "12345"), {
  //     titulo: titulo,
  //     autor: autor,
  //   })
  //   .then(() =>{
  //     console.log("DADOS REGISTRADOS")
  //   })
  //   .catch((error) => {
  //     console.log("GEROU ERRO" + error)
  //   })
  // }

//   async function handleAdd() {
//   try {
//     await setDoc(doc(db, "posts", "12345"), {
//       titulo,
//       autor,
//     })

//     console.log("DADOS REGISTRADOS NO BANCO!")
//   } catch (error) {
//     console.log("GEROU ERRO", error)
//   }
// }

  async function handleAdd() {
  try {
    await addDoc(collection(db, "posts"), {
      titulo,
      autor,
    })
    console.log("DADOS REGISTRADOS NO BANCO!")
    setAutor('');
    setTitulo('')

  } catch (error) {
    console.log("GEROU ERRO", error)
  }
}

async function buscarPost() {
  try {
    const postRef = doc(db, "posts", "12345")

    const snapshot = await getDoc(postRef)

    if (snapshot.exists()) {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    } else {
      console.log("Post não encontrado")
    }

  } catch (error) {
    console.log("ERRO AO BUSCAR", error)
  }
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
        <textarea 
          type='text' 
          placeholder='Digite o título'
          value={titulo}
          onChange={ (e) => setTitulo(e.target.value) }
        />

        <label>Autor:</label>
        <input 
          type='text' 
          placeholder='Autor do post'
          value={autor}
          onChange={ (e) => setAutor(e.target.value)} 
        />

        <button onClick={handleAdd}>
          Cadastrar
        </button>
        <button onClick={buscarPost}>
          Buscar post
        </button>
      </div>


    </div>

  )
}

export default App
