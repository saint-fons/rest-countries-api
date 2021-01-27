import './App.css';
import CountriesContainer from "./Components/Countries/CountriesContainer";
import CountryContainer from "./Components/Countries/CountryPage/CountryContainer";
import {compose} from "redux";
import {withRouter} from "react-router";
import {Route} from "react-router-dom";
import BordersContainer from "./Components/Countries/CountryBorders/BordersContainer";
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './theme';
import {GlobalStyles} from './global';
import React, {useState} from 'react';
import Moon from "./img/moon-solid.svg"


function App(props) {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }


    /*let {country} = props.match.params*/
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <div className={"Header"}>
                    <span className={"HeaderWhereWord"}>Where in the world?</span>
                    <button className={"ThemeButton"}
                            onClick={toggleTheme}>
                        <img src={Moon}
                             alt={"DarkMode"}
                             className={"DarkThemeSVG"}
                        />
                        Dark mode
                    </button>
                </div>

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
            </>
        </ThemeProvider>

    );
}

export default compose(withRouter)(App);