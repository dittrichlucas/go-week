import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login'
import Timeline from './pages/timeline'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={ Login } />
                    <Route path='/timeline' exact component={ Timeline } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
