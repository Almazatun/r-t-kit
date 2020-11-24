import React from 'react';
import './App.css';
import {Scoreboard} from "../features/Scoreboard";
import {Navbar} from "../components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";

const App: React.FC = () => {

    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path={"/scoreboard"} render={() => <Scoreboard/>}/>
            </Switch>
        </div>
    )
}

export default App;
