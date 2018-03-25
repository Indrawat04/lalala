import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './modules/EntryModule/EntryModuleComponent';
import Type from './modules/TypeModule/TypeModuleComponent';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './modules/store';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Entry} />
                <Route path="/connect" component={Type} />
            </div>
        </Router>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
