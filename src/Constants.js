export const LANG = navigator.language;
export const PERCENT = new Intl.NumberFormat(LANG, {style: 'percent', minimumFractionDigits:0})

export function missingMapOf(items, prop): Map<string, number> {
  return items.reduce((accum, item) => {
    if (accum.has(item[prop])) {
      return accum.set(item[prop], accum.get(item[prop]) + 1);
    } else {
      return accum.set(item[prop], 1);
    }
  }, new Map());
}
