// @flow

import React from 'react';
import { connect } from "react-redux";
import List from './components/List';
import { toggleFound, selectAllItems } from './Actions';

function App({ fish, dispatch }) {

  function markAsFound(name, type) {
    dispatch(toggleFound(name, type));
  }

  function selectAll(type) {
    dispatch(selectAllItems(type));
  }

  return (
    <div>
      <List items={fish}
        type="fish"
        onFound={markAsFound}
        selectAll={selectAll}
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
