// @flow

import React from 'react';
import { connect } from "react-redux";
import List from './components/List';

function App({ fish }) {

  return (
    <div>
      <List items={fish} type="fish" />
    </div>
  );
}

const mapStateToProps = state => ({
  fish: state.fish
});

export default connect(
  mapStateToProps
)(App);
