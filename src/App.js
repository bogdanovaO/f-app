import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';
import Top from './components/Top.jsx';
import Profile from './components/Profile.jsx';
import Footer from './components/Footer.jsx';
import Contacts from './components/Contacts.jsx';
// import Project from './components/Project.jsx';
import { HashRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <div className="App">
        <HashRouter basename='/'>
        <div className="App">
        <Top />
        <Switch>
        <Route path="/" exact component={Profile}/>
        <Route path="/posts" component={Contacts}/>
        {/* <Route path="/project:id" component={Project}/> */}
        </Switch>
        {/* <Footer /> */}
        </div>
        </HashRouter>
      // {/* </div> */}
    );
  }
}
export default App;