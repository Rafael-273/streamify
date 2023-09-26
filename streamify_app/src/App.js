import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Menu />
      </header>
    </div>
  );
}

export default App;
