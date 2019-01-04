import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Leaders from "../leaders"
import AssistLeaders from "../assistLeaders"
import NbaStats from "../nbaStats";
import HeaderMenu from "../headerMenu"
import Home from "../home"

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <HeaderMenu/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/nba-stats" exact component={NbaStats}/>
                        <Route path="/leaders" exact component={Leaders}/>
                        <Route path="/assist-leaders" exact component={AssistLeaders}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
