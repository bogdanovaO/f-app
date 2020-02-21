import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Top from './components/Top';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Posts from './components/Posts';
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={'/'}>
        <Top />
        <Switch>
        <Route path="/" exact component={Profile}> 
           <Profile/>
        </Route>
        <Route path="/profile" component={Profile}> 
           <Profile/>
        </Route>
        <Route path="/posts" component={Posts}> 
            <Posts/>
        </Route>
        </Switch>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;