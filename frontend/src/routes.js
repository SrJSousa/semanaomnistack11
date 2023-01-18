import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import logon from "./pages/logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} /> 
                <Route path="/incidents/new" component={NewIncident} />                                    
            </Switch>
        </BrowserRouter>
    );
}