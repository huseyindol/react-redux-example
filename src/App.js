import React, { Component } from 'react';
import { Route } from "react-router-dom";

import './App.css';
import "semantic-ui-css/semantic.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./components/pages/HomePage";
import TodoPage from "./components/pages/TodoPage";
import TypicodePage from './components/pages/TypicodePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <Route exact path={'/'} component={HomePage}></Route>
          <Route exact path={'/todo'} component={TodoPage}></Route>
          <Route exact path={'/typicode/users'} component={TypicodePage}></Route>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
