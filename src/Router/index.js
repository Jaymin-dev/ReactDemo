import React from 'react';
import { Route, Switch, } from 'react-router-dom';

import SignUp from '../Screen/Authentication/signUp';
import SignIn from '../Screen/Authentication/login';
import Home from '../Screen/home';


const Rotues = (props) => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/SignIn" component={SignIn} />
                <Route exact path="/SignUp" component={SignUp} />
            </Switch>
        </>
    );
}

export default Rotues;