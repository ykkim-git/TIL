# Object.assign

> 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용한다. -> 대상 객체를 반환한다.

<i>예제</i>

```js
var obj1 = { a: 1 };
var obj2 = { b: 2 };
var obj3 = { c: 3 };

var newObj = Object.assign({}, obj1, obj2, obj3);

console.log(newObj); // { a:1, b:2, c: 3};
```
타겟(첫번째) 인자에 빈 객체를 주고, 소스 인자에 각 객체들을 넘겨주면, 빈 객체에 병합이 된다.

---

> 타겟 (첫번째) 인자에 기존에 존재하는 객체를 넘기면, 타겟에 넘긴 인자가 변경된다.

~~~js

var obj1 = { a: 1 };
var obj2 = { b: 2 };
var obj3 = { c: 3 };

var newObj = Object.assign(obj1, obj2, obj3);

console.log(newObj); // { a:1, b:2, c: 3};
console.log(obj1); // { a:1, b:2, c: 3};


~~~