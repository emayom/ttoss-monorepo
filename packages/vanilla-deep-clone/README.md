## Vanilla Deep Clone
객체의 깊은 복사를 수행하는 lodash의 `_.deepClone` 매서드를 Vanilla JavaScript로 구현하였습니다.

### NPM
```shell
npm i vanilla-deep-clone
```

### Usage
```js
import { deepClone } from "vanilla-deep-clone";

const nested = {
  func: () => {},
  set: new Set(["a", { foo: 2 }]),
  map: new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]),
  re: /[\u0400-\u04FF]+/g,
  date: new Date(),
  array: ["a", "r", "r", "a", "y"],
  object: { foo: { b: { c: { d: { e: "f" } } } } },
};

const cloned = deepClone(nested);

console.log(nested === cloned); //fasle
```