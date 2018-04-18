import { select } from "../src/lib/select";

test("select", () => {
  // match
  expect(select([[1,2]], 1, 2)).toEqual([[1, 2]]);
  // in
  expect(select([[1,4]], 2, 3)).toEqual([[1, 4]]);
  // excluding
  expect(select([[-1,0],[1,2],[3,4]], 1, 2)).toEqual([[1, 2]]);
  // intersect
  expect(select([[0,2],[1,3]], 1, 2)).toEqual([[0, 2], [1, 3]]);
  // error
  expect(() => select([[1,2]], 2, 1)).toThrow("2 greater then 1");
  expect(() => select([[2,1]], 1, 2)).toThrow("2 greater then 1");
});
