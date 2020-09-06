import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import Wireframe2 from './pages/wireframe2';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch >
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/wireframe2">
            <Wireframe2/>
          </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
