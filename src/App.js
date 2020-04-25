// @flow

import React from 'react';
import styles from './App.module.css';
import { connect } from "react-redux";

function App({ fish }) {

  // @TODO: Add actions for adding/removing fish
  // @TODO: Move grid into its own component
  // @TODO: Rehydrate store from localstorage
  function foundIt({ target }) {
    target.classList.toggle(styles['-found']);
  }

  const fishList = fish.map(fish =>
    <li key={fish.name}
      title={fish.name}>
      <button onClick={foundIt}>
        <img className={styles.item} src={fish.imageLink} alt={fish.name} />
      </button>
    </li>
  );

  return (
    <section>
      <ul className={styles.list}>
        {fishList}
      </ul>
    </section>
  );
}

const mapStateToProps = state => ({
  fish: state.fish
});

export default connect(
  mapStateToProps
)(App);
