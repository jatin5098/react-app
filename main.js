import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, HashRouter  } from 'react-router-dom';
import RouterComponent from './router/RouterComponent.jsx';
import Home from './router/Home.jsx';
import About from './router/About.jsx';
import Contact from './router/Contact.jsx';
import App from './App.jsx';


// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
   <HashRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/app" component={App} />
            <Route exact path="/router" component={RouterComponent} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contact/:id" component={Contact} />
        </div>
   </HashRouter >	
), document.getElementById('app'));