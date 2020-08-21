import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Info from './pages/Info/Info';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Paintings from './pages/Paintings/Paintings';
import Card from './components/Card/Card';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/paintings'>
              <Paintings />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/info'>
              <Info />
            </Route>
            <Route path='/card'>
              <Card />
            </Route>
          </Switch>
          <Footer />
    </div>
    </Router>
  );
}

export default App;
