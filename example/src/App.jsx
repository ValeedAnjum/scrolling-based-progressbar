import React, {Component} from 'react'
// import {ProgressBar} from 'scrolling-based-progressbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home1} />
                    <Route path="/home2" exact component={Home2} />
                    <Route path="/home3" exact component={Home3} />
                </Switch>
            </BrowserRouter>
        )
    }
}
