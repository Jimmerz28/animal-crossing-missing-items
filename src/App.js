// @flow

import React from 'react';
import styles from './App.module.css';
import Fishies from './things/fish.json';

function App() {

  function foundIt({ target }) {
    target.classList.toggle(styles['-found']);
  }

  const fishList = Fishies.map(fish =>
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

export default App;
