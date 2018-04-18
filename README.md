# Intervals

[![npm](https://img.shields.io/npm/v/@redtea/intervals.svg)](https://www.npmjs.com/package/@redtea/intervals)
[![Travis](https://img.shields.io/travis/org-redtea/intervals.svg)](https://travis-ci.org/org-redtea/intervals)

Utilities for operate over intervals

## Install
```bash
$ npm install --save @redtea/intervals
```

## Usage
```JS
import { includes, merge, clip, select } from "@redtea/intervals"
// or
// const intervals = require("@redtea/intervals");
// or
// in html <script src="https://unpkg.com/@redtea/intervals"></script>


// 1 in [2, 3]
includes(2, 1, 3); // true
// 4 not in [1, 3]
includes(4, 1, 3); // false

merge([[1,3],[1,2],[4,5]]); // [[1,3],[4,5]]
merge([[1,3],[1,2],[4,5]], 1); // [[1,5]

clip([[1,3],[5,7],[9,11]], 1, 11) // [[3,5], [7,9]]
clip([[2,3],[5,6]], 1, 7) // [[1,2],[3,5],[6,7]]

select([[1,2]], 1, 2) // [[1, 2]]
select([[0,2],[1,3]], 1, 2) // [[0, 2], [1, 3]]
```

## Utils

#### includes(*number*: `number`, *start*: `number`, *end*: `number`): `boolean`**

Test if *number* in interval [*start*, *end*] and return result.

#### merge(*intervals*: `[number, number][]`, *maxDistance*: `number` = 0): `[number, number][]`**

Merge *intervals* that intersect or where distance between intervals less then *maxDistance*. Always return new list.


#### clip(*intervals*: `[number, number][]`, *start*: `number`, *end*: `number`): `[number, number][]`**

Exclude intervals *intervals* from interval [*start*, *end*]. Always return new list.


#### select(*intervals*: `[number, number][]`, *start*: `number`, *end*: `number`): `[number, number][]`**

Select all intervals that intersect or inside of interval [*start*, *end*]. Always return new list.
