import { merge } from "./merge";
import { select } from "./select";
import { throwIfStartGreaterThenEnd } from "./utils";

export function clip(
  intervalsList: Array<[number, number]>,
  start: number, end: number
): Array<[number, number]> {
  throwIfStartGreaterThenEnd(start, end);

  const result: [number, number][] = [];
  let selected = select(intervalsList, start, end);

  if (selected.length === 0) {
    result.push([start, end]);
    return result;
  }

  selected = merge(selected, 0);

  if (selected.length === 1) {
    const min = selected[0][0];
    const max = selected[0][1];

    if (min <= start && max >= end) return result;
  }

  const ln = selected.length;
  let lastStartPos = start;

  for(let i = 0; i < ln; i++) {
    const range = selected[i];
    const min = range[0];
    const max = range[1];

    if (max > end) {
      end = min;
    } else if (min <= lastStartPos) {
      lastStartPos = max;
    } else if (Math.abs(min - lastStartPos) > 0) {
      result.push([lastStartPos, min]);
      lastStartPos = max;
    }
  }

  if (Math.abs(lastStartPos - end) > 0) {
    result.push([ lastStartPos, end ]);
  }

  return result;
}
