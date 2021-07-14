import logo from './logo.svg';
import './App.css';

function suma(a,b){
  return a + b;
}

function App() {
  var resultado = suma(3,3);
  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>¿ Cuánto es 3 + 3 ? 🤔</h1>
        <p>Respuesta: {resultado}</p>
      </header>
    </div>
  );
}

export default App;
