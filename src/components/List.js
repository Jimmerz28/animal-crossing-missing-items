// @flow

import type { Item } from '../Types';
import * as React from 'react';
import styles from './List.module.css';
import classNames from 'classnames';

type Props = {
  items: Array<Item>,
  type: string,
  onFound: Function
};

const cx = classNames.bind(styles);

export default class List extends React.Component<Props> {

  // @TODO: Move grid into its own component
  // @TODO: Rehydrate store from localstorage
  foundIt = (event: SyntheticEvent<HTMLButtonElement>) => {
    // event.currentTarget.classList.toggle(styles['-found']);
    this.props.onFound(event.currentTarget.dataset.itemName, this.props.type);
  }

  render() {

    const list = this.props.items.map(item => {
      const buttonStyles = cx(styles.item, {
        [styles['-found']]: item.found
      });

      return (
        <li key={item.name}
        title={item.name}>
        <button className={buttonStyles}
          data-item-name={item.name}
          onClick={this.foundIt}>
          <img src={item.imageLink} alt={item.name} />
        </button>
      </li>
      )
    });

    return (
      <section>
        <ul className={styles.list}>
          {list}
        </ul>
      </section>
    )
  }
}
