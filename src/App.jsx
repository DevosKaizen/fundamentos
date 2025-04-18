// componentes
import FirstComponents from './Components/FristComponents';
import ChallengeComponente from './Components/Challenge';

// styles /css
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h3>AGORA SIM CARALHO</h3>  
       <h2>VAMO TRAMAR COM ISSO</h2> 
       <h1>FAZER MUITA GRANA</h1> 
        <FirstComponents />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leia minha rola
        </a>
      </header>
      <ChallengeComponente />
    </div>
  );
}

export default App;
