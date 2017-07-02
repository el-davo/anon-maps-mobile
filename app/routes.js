import React from 'react';
import { hashHistory, Route, Router } from 'react-router';
import { TestComponent } from './test/test.component';

export const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={TestComponent} />
    </Router>
);