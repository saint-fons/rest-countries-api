import logo from './logo.svg';
import './App.css';
import CountriesContainer from "./Components/Countries/CountriesContainer";

function App() {
    let arr = [1, 2, 3]
    console.log(...arr)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountriesContainer />
      </header>
    </div>
  );
}

export default App;
