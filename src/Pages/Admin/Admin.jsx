import { useState } from "react";
import { auth } from "../../firebaseConnection";
import { signOut } from "firebase/auth";

function Admin() {
  const [task, setTask] = useState('');

  function handleRegister(e) {
    e.preventDefault();

    alert(`Tarefa registrada: ${task}`);
  }

  async function handleLogout() {
    await signOut(auth);
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

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          type="submit">Registrar tarefa
        </button>
      </form>

      <article
        className="bg-[#1e2124] p-4 rounded w-1/3 flex flex-col justify-center p-4 gap-2 border border-[#2c2f33]">
        <p className="mb-2">
          Estudar js e react
        </p>
        <div className="flex gap-2">
          <button className="bg-transparent text-[#ffcc23] px-4 py-2 rounded">Editar</button>
          <button className="bg-white text-black px-4 py-2 rounded">Concluir</button>
        </div>
      </article>

      <button
        onClick={handleLogout}
        className="absolute bottom-4 left-4 bg-[rgba(219,38,41,0.35)] hover:bg-[rgba(219,38,41,0.5)] transition duration-300 text-white font-bold w-12 h-12 rounded-full">Sair</button>

    </div>
  )
}

export default Admin;