# import & export

## named exports

<i>아래와 같은 함수를 다른 파일로 import 하려면</i>

```js
math.js;

export const plus = (a, b) => a + b;
export const minus = (a, b) => a - b;
export const divide = (a, b) => a / b;
```

```js
main.js;

import { plus, minus, divide } from "./math";
```

<i>만약 plus를 add라는 이름으로 변경하고 싶은경우 ?</i>

```js
import { plus as add } from "./math";
```

---

## default export

<i>모든 함수들을 통째로 export</i>

```js
math.js;

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const divide = (a, b) => a / b;

export default { plus, minus, divide };
```

```js
main.js;

import math from "./math';

math.plus(2, 2);
```

---

### export default & export 가 함께 있는 경우

```js
export.js

const abc = () => { // do something };
export const def = () => {}
export default abc;
```

```js
import.js

import { abc }, { def } from "export.js"
```

---

## \* \* 방식의 import

모든 exported 내용을 import 하고 싶을때~!
단 default export가 없어야함.

<i>Math.js에서 모든 함수를 한방에 import 하고 싶다면?</i>

```js
math.js;

export const plus = (a, b) => a + b;
export const minus = (a, b) => a - b;
export const divide = (a, b) => a / b;
```

```js
main.js;

import * as myMath from "./math.js";

myMath.plus(2, 2);
```

---

## 이를 이용한 최적화 방법은 무엇이 있을까 ?

### 1. 필요한 것만 import 하기. (like named export);

### 2. Dynamic import - 실제로 사용할 모듈만 import (like import in click event)

```js
async function doMath() {
  const math = await import("./math");
  math.plus(2, 2);
}

btn.addEventListener("clicl", doMath);
```
