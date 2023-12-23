import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings'
import MyNav from './components/MyNav'
import MyCard from './components/MyCard'


function App() {
  return (
    <div className="App">
       <h1>HELLO</h1>
       <Greetings/>
       <MyNav/>
       <MyCard/>
     
    </div>
  );
}

export default App;
