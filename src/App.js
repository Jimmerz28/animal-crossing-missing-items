// @flow

import React from 'react';
import { connect } from "react-redux";
import List from './components/List';
import { toggleFound } from './Actions';

function App({ fish, dispatch }) {

  function markAsFound(name, type) {
    dispatch(toggleFound(name, type));
  }

  return (
    <div>
      <List items={fish}
        type="fish"
        onFound={markAsFound}
        />
    </div>
  );
}

const mapStateToProps = state => ({
  fish: state.fish
});

export default connect(
  mapStateToProps
)(App);
