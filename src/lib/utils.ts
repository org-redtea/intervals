export function deepCloneIntervals(intervals: [number, number][]): [number, number][] {
  const clone = intervals.map(i => i.slice(0));
  return clone as [number, number][];
}

export function shallowClone<T>(list: T[]): T[] {
  const clone = list.slice(0);
  return clone;
}

export function throwIfStartGreaterThenEnd(start: number, end: number): void {
  if (start > end) throw new RangeError(`${start} greater then ${end}`);
}

export function throwIfLessThenZero(value: number): void {
  if (value < 0) throw new RangeError(`${value} less then 0`);
}

