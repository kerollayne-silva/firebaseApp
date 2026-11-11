<div align="center">

# ✅ FireApp — Lista de Tarefas

### Gerencie sua agenda de forma simples e em tempo real

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-10-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

</div>

---

## 📖 Sobre o projeto

O **FireApp** é uma aplicação de lista de tarefas construída do zero com **React** e **Firebase**, onde o usuário pode se cadastrar, fazer login e gerenciar sua rotina de forma segura.

O projeto foi desenvolvido de maneira prática durante o curso da Udemy, colocando em prática conceitos de componentização, roteamento, autenticação e banco de dados em tempo real.

---

## 🚀 Funcionalidades

- 🔐 **Autenticação** — cadastro e login com e-mail e senha (Firebase Auth)
- 🛡️ **Rota protegida** — a área `/admin` só é acessível para usuários logados
- ➕ **Cadastro de tarefas** — salvas no Cloud Firestore vinculadas ao usuário
- 📡 **Sincronização em tempo real** — listeners com `onSnapshot` no Firestore
- 🚪 **Logout** — encerrar sessão com um clique
- 🎨 **Interface escura** — layout clean criado com Tailwind CSS

---

## 📸 Capturas de tela

<!-- 📌 Coloque seus prints na pasta assets/ e descomente o bloco abaixo -->

<!--
<p align="center">
  <img src="assets/login.png" alt="Tela de login" width="300" />
  <img src="assets/cadastro.png" alt="Tela de cadastro" width="300" />
  <img src="assets/admin.png" alt="Painel de tarefas" width="300" />
</p>
-->

---

## 🛠️ Stack tecnológica

| Tecnologia | Versão | Uso no projeto |
|---|---|---|
| React | 19 | Biblioteca de interface |
| Vite | 8 | Servidor de dev e build |
| React Router | 7 | Roteamento de páginas |
| Firebase | 12 | Autenticação + banco de dados |
| Tailwind CSS | 3 | Estilização |
| ESLint | 10 | Padrões e qualidade de código |

---

## 📁 Estrutura do projeto

```
src/
├── main.jsx                   # Ponto de entrada da aplicação
├── App.jsx                    # BrowserRouter + definição de rotas
├── firebaseConnection.jsx     # Conexão com Firebase (Auth + Firestore)
├── index.css                  # Estilos globais + Tailwind
├── Pages/
│   ├── Home/Home.jsx          # 🔑 Tela de login
│   ├── Register/Register.jsx  # ✍️ Tela de cadastro
│   └── Admin/Admin.jsx        # ✅ Painel de tarefas (protegido)
└── Routes/
    ├── index.jsx              # 🗺️ Mapa de rotas
    └── Private.jsx            # 🛡️ Guarda de rota (onAuthStateChanged)
```

---

## ▶️ Como rodar o projeto

**Pré-requisitos:** [Node.js](https://nodejs.org/) 18+ e npm

```bash
# 1. Clone o repositório
git clone https://github.com/kerollayne-silva/firebaseApp.git

# 2. Entre na pasta
cd firebaseApp

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no seu navegador 🎉

---

## 🔧 Configuração do Firebase

Para rodar o projeto com sua própria base de dados:

1. Acesse o [Firebase Console](https://console.firebase.google.com/) e crie um projeto
2. Em **Authentication → Sign-in method**, ative o provedor **E-mail/Senha**
3. Em **Firestore Database**, crie o banco em modo de teste
4. Em **Configurações do projeto → Seus apps → Web (</>)**, copie o objeto `firebaseConfig`
5. Cole a config em `src/firebaseConnection.jsx`, substituindo a atual

> ⚠️ **Importante:** a config presente no repositório pertence ao projeto do curso e serve apenas como exemplo. Para utilizar o app, configure o Firebase com o **seu próprio projeto**.

---

## 🗺️ Rotas

| Rota | Página | Acesso |
|---|---|---|
| `/` | Home (login) | Público |
| `/register` | Cadastro | Público |
| `/admin` | Painel de tarefas | 🔒 Privada |

---

## 📚 Conceitos praticados

- Componentização e JSX
- Estado com `useState` e efeitos com `useEffect`
- Formulários controlados (inputs ligados ao estado)
- Roteamento com React Router (`Routes`, `Route`, `Link`, `useNavigate`)
- Proteção de rotas com componente `Private` + `onAuthStateChanged`
- Firebase Auth: `createUserWithEmailAndPassword`, `signInWithEmailAndPassword`, `signOut`
- Firestore: `addDoc`, `collection`, `onSnapshot`, `query`, `orderBy`, `where`
- Persistência do usuário com `localStorage`
- Estilização com Tailwind CSS (tema escuro)

## 🎓 Créditos

Projeto de estudos realizado durante o curso:

**"Aprenda React JS na prática a criar aplicações completas do extremo ZERO ao avançado!"**
por **Matheus Fraga** na Udemy

🔗 [Link do curso](https://www.udemy.com/share/101rFO3@Aymh9z3VUZX-Q5GvHqE7dHCImmFSiFyNRc4JCC96Trbk2SI34_lCrKiJQf3RVl-uzA==/)

---

<div align="center">

Feito com ❤️ por [kerollayne-silva](https://github.com/kerollayne-silva)

</div>