// @flow

import type { Item } from '../Types';
import * as React from 'react';
import styles from './List.module.css';
import classNames from 'classnames';
import { PERCENT } from '../Constants';
import MissingStats from "./MissingStats";

type Props = {
  items: Array<Item>,
  type: string,
  onFound: Function,
  selectAll: Function
};

const cx = classNames.bind(styles);

export default class List extends React.Component<Props> {

  foundIt = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.props.onFound(event.currentTarget.dataset.itemName, this.props.type);
  }

  selectAll = () => {
    this.props.selectAll(this.props.type);
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

      // @TODO: Wrap in a form and the stats + completed text in an output
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
        <button type="button" onClick={this.selectAll}>Select All</button>
        <p>Completed: {PERCENT.format(percentComplete)}</p>
        <MissingStats items={this.props.items} />
      </section>
    )
  }
}
