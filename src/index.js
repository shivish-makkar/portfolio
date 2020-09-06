import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';


//STYLING
import './index.css';

//COMPONENTS
import App from './App';
import BadgerRecommendsLearnMore from "./content/badgerRecommendsLearnMore";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/badgerRecommendsLearnMore" component={BadgerRecommendsLearnMore}/>
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
