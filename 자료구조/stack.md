# 스택

> 먼저 들어간 자료가 나중에 나오는 자료구조 (LastIn FirstOut) 자료를 넣는 push() 함수와 자료를 빼는 pop함수를 가지고 있는게 정석이다. (cmd + z 처럼 이전작업 취소하는 것과 비슷함)

<i>예제코드</i>

```js
class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[this.index++] = item;
  }
  pop() {
    if (this.index <= 0) return null;
    const result = this.arr[--this.index];
    return result;
  }
}

let stack = new Stack();
stack.push(1); // arr: [1], index: 1
stack.push(2); // arr: [1, 2], index: 2
stack.push(3); // arr: [1, 2, 3], index: 3
console.log(stack.pop()); // 3 , index: 2
console.log(stack.pop()); // 2 , index: 1
console.log(stack.pop()); // 1 , index: 0
console.log(stack.pop()); // null
```
