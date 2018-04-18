import { deepCloneIntervals, shallowClone, throwIfLessThenZero, throwIfStartGreaterThenEnd } from "./utils";

export function merge(intervalsList: [number, number][], maxDistance: number = 0): [number, number][] {
  throwIfLessThenZero(maxDistance);

  if (intervalsList.length <= 1) return deepCloneIntervals(intervalsList);

  intervalsList = shallowClone<[number, number]>(intervalsList);

  intervalsList.sort(function (a, b) {
    return a[0] - b[0];
  });

  const first = shallowClone<number>(intervalsList[0]) as [number, number];
  const result = [first];

  throwIfStartGreaterThenEnd(first[0], first[1]);

  const ln = intervalsList.length;

  for (let i = 1; i < ln; i++) {
    const top = result[result.length - 1];

    throwIfStartGreaterThenEnd(intervalsList[i][0], intervalsList[i][1]);

    if (top[1] < intervalsList[i][0] && (Math.abs(intervalsList[i][0] - top[1]) > maxDistance)) {
      const interval = shallowClone<number>(intervalsList[i]) as [number, number];

      result.push(interval);
      continue;
    }

    if (top[1] < intervalsList[i][1]) {
      result[result.length - 1][1] = intervalsList[i][1];
    }
  }

  return result;
}
