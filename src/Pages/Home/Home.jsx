import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()

    if (email !== '' && password !== '') {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/admin', { replace: true })
        })
        .catch(() => {
          alert('Erro ao realizar login')
        })
    } else {
      alert('Erro ao realizar login')
    }
  }

  return (
    <div className="m-0 p-0 box-border flex flex-col items-center justify-center bg-[#15171a] text-white min-h-screen w-full font-sans">
      <h1 className="font-bold text-2xl">Lista de tarefas</h1>
      <span className="text-lg mb-4">Gerencie sua agenda de forma fácil</span>

      <form
        className="flex flex-col gap-2 w-full max-w-sm"
        onSubmit={handleLogin}
      >
        <input
          className="p-2 rounded bg-[#1e2124] border border-[#2c2f33] focus:outline-none focus:border-[#7289da]"
          type="text"
          placeholder="Digite seu e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 rounded bg-[#1e2124] border border-[#2c2f33] focus:outline-none focus:border-[#7289da]"
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-2 rounded bg-[#7289da] hover:bg-[#5b6eae] focus:outline-none focus:ring-2 focus:ring-[#7289da] focus:ring-opacity-50"
          type="submit"
        >
          Acessar
        </button>
      </form>

      <Link to="/register" className="mt-4 text-[#7289da] hover:underline">
        Não possui uma conta? Cadastre-se
      </Link>
    </div>
  )
}
export default Home;