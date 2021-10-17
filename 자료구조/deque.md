# 데크

> 스택과 큐의 개념이 합쳐진 것. 양쪽 끝에서 데이터를 넣고 뺄 수 있다.

<i>내장 메서드 예제코드</i>

```js
function Deque() {
  this.datas = new Array();
}

Deque.prototype.push = function (data) {
  this.datas.push(data);
};
Deque.prototype.pop = function () {
  return this.datas.pop();
};
Deque.prototype.shift = function () {
  return this.datas.shift();
};
Deque.prototype.unshift = function (data) {
  this.datas.unshift(data);
};

const deque = new Deque();

deque.push(1);
deque.push(2);

console.log(deque.shit()); // 2
deque.unshift(3);
console.log(deque.pop()); // 1
```

<i>클래스 형태의 데크</i>

```js
class Deque {
  constructor() {
    this.datas = new Array();
  }

  push(data) {
    this.datas.push(data);
  }
  pop() {
    return this.datas.pop();
  }
  shift() {
    return this.datas.shift();
  }
  unshift(data) {
    this.datas.unshift(data);
  }
}

const deque = new Deque();

deque.push(1);
deque.push(2);
console.log(deque.shift()); // 2
deque.unshift(3);
console.log(deque.pop()); // 1
```
