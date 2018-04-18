import { throwIfStartGreaterThenEnd } from "./utils";

export function includes(num: number, start: number, end: number): boolean {
  throwIfStartGreaterThenEnd(start, end);

  return num >= start && num <= end;
}
