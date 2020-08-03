import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignUp, ConfirmData, UploadPicture } from '../pages';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/upload" component={UploadPicture} />
        <Route path="/confirm" component={ConfirmData} />
    </Switch>
);

export default Routes;
