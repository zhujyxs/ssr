import React from 'react';
import { Route, Router } from 'react-router';
import Rule from './containers/Rule/';
import NotFound from './containers/NotFound';
import MovieDetail from './containers/MovieDetail/';

export default history => 
    (
        <Router history={history}>
            <Route path="/" component={Rule} />
            <Route path="/rule" component={Rule} />
            <Route path="*" component={NotFound} />
        </Router>
    );
