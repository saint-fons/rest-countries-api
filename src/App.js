import './App.css';
import CountriesContainer from "./Components/Countries/CountriesContainer";
import CountryContainer from "./Components/Countries/CountryPage/CountryContainer";
import {compose} from "redux";
import {withRouter} from "react-router";
import {Route} from "react-router-dom";

function App(props) {
    /*let {country} = props.match.params*/
    return (
    <div className="App">
      <header className="App-header">
          <div>
              <Route exact path='/' render={() =>
                  <CountriesContainer/>}/>

              <Route exact path='/:country?' render={() =>
                  <CountryContainer
                  />}/>
          </div>
      </header>
    </div>
  );
}

export default compose(withRouter)(App);