import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'recat-router-dom';





ReactDOM.render((

  <Router >
    <div>

      <Route path="/" component={Home} />
      <Route exact path="/about" component={about} />
      <Route exact path="/login" component={login} />
    </div>

  </Router>
),

  document.getElementById('root')
);
