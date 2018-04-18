import { merge } from "../src/index";

test("merge", () => {
  const t1 = [[1, 2]] as [number, number][];
  const t1r = merge(t1, 0);

  expect(t1r).toEqual(t1);
  expect(t1r).not.toBe(t1);

  t1r.forEach((item, index) => {
    expect(item).not.toBe(t1[index]);
  });

  const t2 = [[1, 2], [3, 4]] as [number, number][];
  const t2r = merge(t2, 0);

  expect(t2r).toEqual(t2);
  expect(t2r).not.toBe(t2);

  t2r.forEach((item, index) => {
    expect(item).not.toBe(t2[index]);
  });

  expect(merge([])).toEqual([]);
  expect(merge([[1,2], [4,5]], 1)).toEqual([[1, 2], [4, 5]]);
  expect(merge([[4,5], [1, 2]], 1)).toEqual([[1, 2], [4, 5]]);
  expect(merge([[1, 2], [4, 5], [7,8]], 1)).toEqual([[1, 2], [4, 5], [7, 8]]);
  expect(merge([[1, 2], [4, 5], [7,8]], 2)).toEqual([[1, 8]]);
  expect(merge([[1, 2], [4, 5], [7,8]], 9)).toEqual([[1, 8]]);
  expect(merge([[1, 2], [3, 5], [7,9]], 1)).toEqual([[1, 5], [7, 9]]);
  expect(merge([[1, 2], [3, 5]], 0)).toEqual([[1, 2], [3, 5]]);
  expect(merge([[1, 3], [2, 5]], 0)).toEqual([[1, 5]]);
  expect(merge([[1, 3], [-1, 2]], 0)).toEqual([[-1, 3]]);
  expect(merge([[1, 3], [-1, 4]], 0)).toEqual([[-1, 4]]);

  // error
  expect(() => merge([[2, 1], [1, 2]])).toThrow("2 greater then 1");
  expect(() => merge([[1, 2]], -1)).toThrow("-1 less then 0");
});
