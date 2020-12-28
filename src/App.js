import logo from './logo.svg';
import './App.css';
import GermanyContainer from "./Components/Countries/GermanyContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GermanyContainer />
      </header>
    </div>
  );
}

export default App;
