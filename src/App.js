// @flow

import React from 'react';
import { connect } from "react-redux";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { selectAllItems, toggleFound } from './Actions';
import List from './components/List';

function App({ fish, dispatch }) {

  function markAsFound(name, type) {
    dispatch(toggleFound(name, type));
  }

  function selectAll(type) {
    dispatch(selectAllItems(type));
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>

      <nav>
        <ul>
          <li><Link to="/fish">Fish</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/fish">
          <List items={fish}
            type="fish"
            onFound={markAsFound}
            selectAll={selectAll}
            />
        </Route>
        <Route exact path="/">
          <Redirect to="/fish" />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  fish: state.fish
});

export default connect(
  mapStateToProps
)(App);
