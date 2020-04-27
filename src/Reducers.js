// @flow

import type { FishBased, Item } from './Types';

import { combineReducers } from 'redux';
import Fishies from './things/fish.json';
import { TOGGLE_FOUND_ITEM } from './Actions';

const fishies: Array<Item> = Fishies.map((fish: FishBased) => ({
  ...fish,
  found: false
}));

const initialFishState = [...fishies];

function fish(state = initialFishState, { type, payload }) {
  switch (type) {

    case TOGGLE_FOUND_ITEM:

    return state.map((item: Item) => {

        // Guardian statement if it's not the one we want
        if (payload.name !== item.name) {
          return item;
        }

        // Toggle if you have the item or not
        return {
          ...item,
          found: !item.found
        }
      });

    default:
      return state;
  }
}

const reducers = combineReducers({
  fish
});

export default reducers;
