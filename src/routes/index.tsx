import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignUp, ConfirmData } from '../pages';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/confirm" component={ConfirmData} />
    </Switch>
);

export default Routes;
