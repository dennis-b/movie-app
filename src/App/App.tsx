import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react';

import { HomeContainer } from "../Containers/Home/HomeContainer";
import { GlobalStyle } from "../Components/GlobaStyle";
import { AppStore } from "./AppStore";
import { AppDialog, setDialog } from "../Components/Dialog";
import { AppNotify, setNotify } from "../Components/Notify";

import './App.css';

const stores = { appStore: new AppStore() };

export function App() {
    return (
        <Provider {...stores}>
            <div className="App">
                <GlobalStyle />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route
                            path="/home"
                            component={HomeContainer}
                        />
                    </Switch>
                </Router>
                <AppDialog ref={setDialog} />
                <AppNotify ref={setNotify} />
            </div>
        </Provider>
    );
}

