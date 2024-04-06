import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contato from './Contato';
import Membros from './Membros';
import Sobre from './Sobre';

function App() {
  const [pagina, setPagina] = useState('home'); 

  
  const alternarPagina = (pagina) => {
    setPagina(pagina);
  };
  const renderizarPagina = () => {
    switch (pagina) {
      case 'home':
        return <Home />;
      case 'contato':
        return <Contato />;
      case 'membros':
        return <Membros />;
      case 'sobre':
        return <Sobre />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Header />
      <nav>
        <button onClick={() => alternarPagina('home')}>Home</button>
        <button onClick={() => alternarPagina('contato')}>Contato</button>
        <button onClick={() => alternarPagina('membros')}>Membros</button>
        <button onClick={() => alternarPagina('sobre')}>Sobre</button>
      </nav>
      {renderizarPagina()} 
      <Footer />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
