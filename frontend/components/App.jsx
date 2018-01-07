
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import NavBar from './navbar/navbar_container';
import GroupIndexContainer from './groups/group_index_container';
import GroupFormContainer from './groups/group_form_container';
import GroupShowContainer from './groups/group_show_container';
import Video from './video/video';

const App = () => (
  <main>
    <header>
      <NavBar />
    </header>

    <Switch>
      <Route path="/login" component={SessionFormContainer}/>
      <Route path="/signup" component={SessionFormContainer}/>
      <Route path="/create" component={GroupFormContainer}/>
      <Route path="/groups/:groupId" component={GroupShowContainer}/>
    </Switch>

      <Route exact path="/" component={Video}/>
      <Route path="/login" component={Video}/>
      <Route path="/signup" component={Video}/>
      <Route exact path="/" component={GroupIndexContainer}/>

    <footer>
    </footer>
  </main>
);

export default App;
