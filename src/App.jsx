import { useState } from 'react';
import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('');

  const [posts, setPosts] = useState([]);

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

  async function buscarPosts() {
    try {
      const postRef = collection(db, "posts");

      const snapshot = await getDocs(postRef);

      const lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        });
      });

      setPosts(lista);

    } catch (error) {
      console.log("ERRO AO BUSCAR", error);
    }
  }

  async function editarPost() {
    try {
      const docRef = doc(db, "posts", idPost)
      
      
    } catch (error) {

    }
  }

  return (

    <div>

      <h1>
        ReactJS + Firebase
      </h1>

      <div className='w-[600px] flex flex-col'>

        <label>ID do Post:</label>
        <input 
          placeholder='Digite o ID do post'
          value={idPost}
          onChange={ (e) => setIdPost(e.target.value) }
        /> <br/>

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
        <button onClick={buscarPosts}>
          Buscar post
        </button>
        <button onClick={editarPost}>
          Atualizar
        </button>

        <ul>
          {posts.map((post) => {
            return(
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br/>
                <span>Título: {post.titulo}</span> <br/>
                <span>Autor: {post.autor}</span> <br/>
              </li>
            )
          })}
        </ul>

      </div>


    </div>

  )
}

export default App
