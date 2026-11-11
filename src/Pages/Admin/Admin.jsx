import { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConnection";
import { signOut } from "firebase/auth";

import { addDoc, collection, onSnapshot, query, orderBy, where, doc, deleteDoc, updateDoc } from 'firebase/firestore';

function Admin() {
  const [task, setTask] = useState('');
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState({});

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsub;

    async function loadTasks() {
      const userDetail = localStorage.getItem("@detailUser");
      setUser(JSON.parse(userDetail));

      if(userDetail){
        const data = JSON.parse(userDetail);

        const taskRef = collection(db, "tasks")
        const q = query(taskRef, orderBy("created", "desc"), where("userUid", "==", data?.uid));
        unsub = onSnapshot(q, (snapshot) => {
          let lista = [];

          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              tarefa: doc.data().tarefa,
              created: doc.data().created,
              userUid: doc.data().userUid
            })
          })
          setTasks(lista);

        })
      }
    }

    loadTasks();

    return () => unsub?.();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    if (task === '') {
      alert('Digite sua tarefa');
      return;
    }

    if(edit?.id){
      handleUpdateTask();
      return;
    }

    try {
      await addDoc(collection(db, "tasks"), {
        tarefa: task,
        created: new Date(),
        userUid: user?.uid
      });
      console.log("Tarefa registrada com sucesso!");

      setTask('');
    } catch (error) {
      console.error("Erro ao registrar tarefa", error);
    }
  }

  async function handleLogout() {
    await signOut(auth);
  }

  async function deleteTask(id) {
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);
  }

  function editTask(item) {
    setTask(item.tarefa)
    setEdit(item)
  }

  async function handleUpdateTask() {
    const docRef = doc(db, "tasks", edit?.id);
    await updateDoc(docRef, {
      tarefa: task
    })
    .then(() => {
      console.log("Tarefa atualizada com sucesso!");
      setTask('');
      setEdit({});
    })
    .catch((error) => {
      console.error("Erro ao atualizar tarefa", error);
      setTask('');
      setEdit({});
    })
  }

  return (
    <div className="m-0 p-0 box-border bg-[#15171a] text-white font-sans min-h-screen w-full flex flex-col items-center pt-10 gap-4">
      <h1 className="text-2xl font-bold">Minhas tarefas</h1>

      <form
        className="flex flex-col gap-2 w-1/3"
        onSubmit={handleRegister}>
        <textarea
          className="p-2 rounded bg-[#1e2124] border border-[#2c2f33] focus:outline-none focus:border-[#7289da]"
          placeholder="Digite sua tarefa..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        {Object.keys(edit).length > 0 ? (
          <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          type="submit"
          >Atualizar tarefa
        </button>) : (
          <button 
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          type="submit" 
          >Registrar tarefa</button>
        )}

      </form>

      {tasks.map((item) => (
      <article
        key={item.id}
        className="bg-[#1e2124] p-4 rounded w-1/3 flex flex-col justify-center p-4 gap-2 border border-[#2c2f33]">
        <p className="mb-2">
          {item.tarefa}
        </p>
        <div className="flex gap-2">
          <button 
          onClick={() => editTask(item)}
          className="bg-transparent text-[#ffcc23] px-4 py-2 rounded">Editar</button>
          <button 
          onClick={() => deleteTask(item.id)}
          className="bg-white text-black px-4 py-2 rounded">Concluir</button>
        </div>
      </article>
      ))}

      <button
        onClick={handleLogout}
        className="absolute bottom-4 left-4 bg-[rgba(219,38,41,0.35)] hover:bg-[rgba(219,38,41,0.5)] transition duration-300 text-white font-bold w-12 h-12 rounded-full">Sair</button>

    </div>
  )
}

export default Admin;