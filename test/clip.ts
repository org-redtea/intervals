import { clip } from "../src/index";

test("clip", () => {
  // clip all
  expect(clip([[1,5]], 2, 3)).toEqual([]);
  // clip all
  expect(clip([[-2,-1],[1,5]], 2, 3)).toEqual([]);
  // nearest intervals
  expect(clip([[1,2],[3,4]], 2, 3)).toEqual([[2,3]]);
  // clip between
  expect(clip([[2,3]], 1, 4)).toEqual([[1,2],[3,4]]);
  // clip endpoints
  expect(clip([[1,3],[5,7]], 2, 6)).toEqual([[3,5]]);
  expect(clip([[2,3],[5,6]], 2, 6)).toEqual([[3,5]]);
  // clip endpoints and clip between
  expect(clip([[1,3],[5,7],[9,11]], 1, 11)).toEqual([[3,5], [7,9]]);
  // no clips
  expect(clip([[1,3],[5,7],[9,11]], 11, 13)).toEqual([[11,13]]);
  // no intervals to clip
  expect(clip([], 2, 8)).toEqual([[2,8]]);
  // clip N-times between
  expect(clip([[2,3],[5,6]], 1, 7)).toEqual([[1,2],[3,5],[6,7]]);
  // error
  expect(() => clip([[1,2]], 2, 1)).toThrow("2 greater then 1");
  expect(() => clip([[2,1]], 1, 2)).toThrow("2 greater then 1");
});
