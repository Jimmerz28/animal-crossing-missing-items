// @flow

import type { Item } from '../Types';

import * as React from 'react';

import { missingMapOf } from '../Constants';

type Props = {
  items: Array<Item>
};

export default class MissingStats extends React.Component<Props> {

  generateProgressBars = (array: Array<Array<string | number>>, total: number)
    : Array<React.Element<'div'>> => {
    return array.map(([key, value]) => (
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <progress id={key} max={total} value={value}>{value}</progress>
      </div>
    ));
  };

  render() {

    const notFound = this.props.items.filter(item => item.found === false)
    const totalItems = notFound.length;

    const missingTimes = Array.from(missingMapOf(notFound, 'time')).sort().reverse();
    const shadowSizes = Array.from(missingMapOf(notFound, 'shadowSize')).sort();


    return (
      <section>
        <h1>Remaining Stats</h1>
        <p>Below is an overview of the times and shadow sizes for fish you haven't caught.</p>
        <div>
          <h2>Active Hours</h2>
          {this.generateProgressBars(missingTimes, totalItems)}
        </div>
        <div>
          <h2>Shadow Size</h2>
          {this.generateProgressBars(shadowSizes, totalItems)}
        </div>
      </section>
    )
  }
}
