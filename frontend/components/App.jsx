
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import NavBar from './navbar/navbar_container';
import Groups from './groups/group_index_container';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <Route path="/login" component={SessionFormContainer}/>
    <Route path="/signup" component={SessionFormContainer}/>
    <Groups />
  </div>
);

export default App;
