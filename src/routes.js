import React from 'react';
import { Route, Router } from 'react-router';
import Total from './containers/Total/';
import SelfForm from './containers/SelfForm/';
import Rule from './containers/Rule/';
import NotFound from './containers/NotFound';
import MovieDetail from './containers/MovieDetail/';

export default history => 
    (
        <Router history={history}>
            <Route path="/" component={Total} />
            <Route path="/rule" component={Rule} />
            <Route path="/form" component={SelfForm} />
            <Route path="*" component={NotFound} />
        </Router>
    );
