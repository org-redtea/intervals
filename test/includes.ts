import { includes } from "../src/index";

test("includes", () => {
  expect(includes(1, 2, 3)).toBe(false);
  expect(includes(4, 2, 3)).toBe(false);
  expect(includes(2, 2, 3)).toBe(true);
  expect(includes(3, 2, 3)).toBe(true);
  expect(includes(3, 2, 4)).toBe(true);
  expect(() => includes(0, 2, 1)).toThrow("2 greater then 1");
});
