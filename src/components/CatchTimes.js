// @flow

import type { Item } from '../Types';

import * as React from 'react';

import { missingMapOf } from '../Constants';

type Props = {
  items: Array<Item>
};

export default class CatchTimes extends React.Component<Props> {

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
    const totalItems = this.props.items.length;

    const shadowSizes = Array.from(missingMapOf(notFound, 'shadowSize'));
    const missingTimes = Array.from(missingMapOf(notFound, 'time'));

    return (
      <div>
        {this.generateProgressBars(missingTimes, totalItems)}
        {this.generateProgressBars(shadowSizes, totalItems)}
      </div>
    )
  }
}
