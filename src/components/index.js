import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";
import createHistory from 'history/createBrowserHistory';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlogList from "./blogs";
import BlogPage from "./blogPage";
//https://reacttraining.com/react-router/web

const history = createHistory();



export default class App extends Component {
    render() {
        return ( 
            <MuiThemeProvider>
                <div>
                    <AppBar title="My awesome BLOG!!" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={BlogList}/>
                            <Route path="/blog/:blogId" component={BlogPage} />
                        </Switch>
                    </Router>
                </div>
                
            </MuiThemeProvider>
        );
    }
}