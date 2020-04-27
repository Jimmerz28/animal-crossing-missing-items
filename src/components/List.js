// @flow

import type { Item } from '../Types';
import * as React from 'react';
import styles from './List.module.css';

type Props = {
  items: Array<Item>,
  type: string
};

export default class List extends React.Component<Props> {

  // @TODO: Add actions for adding/removing fish
  // @TODO: Move grid into its own component
  // @TODO: Rehydrate store from localstorage
  foundIt = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.toggle(styles['-found']);
  }

  render() {

    const list = this.props.items.map(item =>
      <li key={item.name}
        title={item.name}>
        <button className={styles.item}
          onClick={this.foundIt}>
          <img src={item.imageLink} alt={item.name} />
        </button>
      </li>
    );

    return (
      <section>
        <ul className={styles.list}>
          {list}
        </ul>
      </section>
    )
  }
}
