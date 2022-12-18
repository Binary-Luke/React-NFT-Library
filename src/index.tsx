import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Contact, About, SignIn, Library } from './components';
import './index.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';


let myTitle = "Luke's NFT Library"


ReactDOM.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
  <Provider store = {store}>

    <Router>
      <Switch>

        <Route exact path="/">
          <Home title={myTitle} />
        </Route>
        <Route path='/library'>
          <Library></Library>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);