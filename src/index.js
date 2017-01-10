import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import About from './components/About'
import Faq from './components/Faq'
import Home from './components/Home'
import Boxes from './components/Boxes/Boxes'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component ={App}>
      <IndexRoute component ={Home} />
      <Route path="about" component ={About}/>
      <Route path="faq" component ={Faq} />
      <Route path="boxes" component ={Boxes} />
    </Route>
  </Router>,
  document.getElementById('root')
);
