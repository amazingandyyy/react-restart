'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// import components
import App from './components/app'
import About from './components/about'
import Welcome from './components/welcome'
import Layout from './components/layout'
import reducers from './reducers'

const store = applyMiddleware(reduxThunk)(createStore)(reducers)

const Root = () => (
    <Provider store={store}>
    <HashRouter hashType='noslash'>
        <Layout>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/welcome' component={Welcome} />
                <Route path='/about' component={About} />
            </Switch>
        </Layout>
    </HashRouter>
    </Provider>
)

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
)