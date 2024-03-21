
import './App.css';
import MaisBuscados from './components/maisBuscados/MaisBuscados';
import MenuBar from './components/navbar/Menu';
import { Titulo } from './components/navbat/styles/textos';
import Pesquisa from './components/pesquisa/Pesquisa';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <Pesquisa/>
          </header>
          <MaisBuscados />
    </div>
  );
}

export default App;
