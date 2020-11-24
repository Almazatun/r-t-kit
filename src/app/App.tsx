import React from 'react';
import './App.css';
import {Scoreboard} from "../features/Scoreboard";
import {Navbar} from "../components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {Todo} from "../features/Todo";

const App: React.FC = () => {

    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path={"/scoreboard"} render={() => <Scoreboard/>}/>
                <Route path={"/todo"} render={() => <Todo/>}/>
            </Switch>
        </div>
    )
}

export default App;
