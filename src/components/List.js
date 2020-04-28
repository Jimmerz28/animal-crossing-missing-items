// @flow

import type { Item } from '../Types';
import * as React from 'react';
import styles from './List.module.css';
import classNames from 'classnames';
import { PERCENT } from '../Constants';
import CatchTimes from "./CatchTimes";

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

    const completed = this.props.items.reduce((accum, curr) => {
      return accum  + Number(curr.found);
    }, 0);

    const percentComplete = (completed / this.props.items.length);

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
        <h1 className={styles.header}>{this.props.type}</h1>
        <ul className={styles.list}>
          {list}
        </ul>
        <p>Completed: {PERCENT.format(percentComplete)}</p>
        <CatchTimes items={this.props.items} />
      </section>
    )
  }
}
