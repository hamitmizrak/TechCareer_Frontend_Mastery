import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="text-center text-primary display-4">Merhabalar</p>
 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
