import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <br/>
          Use Ctrl-`  to open terminal in Visual-Studio-Code <br/>
          Issue commands -  cd CRN\myapp  ;  npm start <br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <h1 class="bg-warning mx2">  HELLO  </h1>
          <h1 class="bg-warning mx2" >  This is my first REACT App  </h1>
       
        </a>
      </header>
    </div>
  );
}

export default App;
