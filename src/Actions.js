// @flow

export const TOGGLE_FOUND_ITEM = 'TOGGLE::FOUND_ITEM';
export function toggleFound(name: string, type: string) {
  return {
    type: TOGGLE_FOUND_ITEM,
    payload: {
      name,
      type
    }
  };
};

export const SELECT_ALL = 'SELECT::ALL';
export function selectAllItems(type: string) {
  return {
    type: SELECT_ALL,
    payload: {
      type
    }
  }
}
