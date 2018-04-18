import { throwIfStartGreaterThenEnd } from "./utils";

export function select(
  intervalsList: Array<[number, number]>,
  start: number, end: number
): Array<[number, number]> {
  throwIfStartGreaterThenEnd(start, end);

  const result: [number, number][] = [];
  const iLn = intervalsList.length;

  for (let i = 0; i < iLn; i++) {
    const range = intervalsList[i];
    const min = range[0];
    const max = range[1];

    throwIfStartGreaterThenEnd(min, max);

    if (
      (min > start && end > min)
      ||
      (max > start && end > max)
      ||
      (min <= start && max >= end)
    ) {
      result.push(range.slice(0) as [number, number]);
    }
  }

  return result;
}
