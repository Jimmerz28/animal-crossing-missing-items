import { combineReducers } from 'redux';
import Fishies from './things/fish.json';

const fishies = Fishies.map(fish => ({
  ...fish,
  caught: false
}));

const initialFishState = [...fishies];

function fish(state = initialFishState) {
  return state;
}

const reducers = combineReducers({
  fish
});

export default reducers;
