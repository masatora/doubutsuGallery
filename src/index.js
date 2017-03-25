import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import css from '../static/css/main.scss';
//components
import PhotoList from './components/PhotoList';
import PhotoDetail from './components/PhotoDetail';
import ViewPhoto from './components/ViewPhoto';
//store, connect actions and state
import {store, app} from './storeApp';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={app}>
                <IndexRoute component={PhotoList} />
                <Route path="/detail/:id" component={PhotoDetail} />
                <Route path="/image/:id" component={ViewPhoto} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
