import './App.css';
import CountriesContainer from "./Components/Countries/CountriesContainer";
import CountryContainer from "./Components/Countries/CountryPage/CountryContainer";
import {compose} from "redux";
import {withRouter} from "react-router";
import {Route} from "react-router-dom";
import BordersContainer from "./Components/Countries/CountryBorders/BordersContainer";

function App(props) {
    /*let {country} = props.match.params*/
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Route exact path='/' render={() =>
                        <CountriesContainer/>}/>

                    <Route path='/name/:country?' render={() =>
                        <CountryContainer
                        />}/>
                    <Route path='/border/:country?' render={() =>
                        <BordersContainer
                        />}/>

                </div>
            </header>
        </div>
    );
}

export default compose(withRouter)(App);