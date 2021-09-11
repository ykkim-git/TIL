### map & filter

```javascript
/**
* 공통점 : 새로운 배열을 만든다.
* 차이점 : filter는 조건을 통해 배열안의 값을 삭제 (걸러내기)
* map은 원하는대로 배열안의 값을 변경 (변경하기)
*/

// 1보다 큰 값만 뽑아내서 새로운 배열 만들기
let arr = [1, 2, 3, 4, -1];
let filterResult = arr.filter(function(num) {
  return num > 1
})

let filterResult = arr.filter(num => num > 1);
console.log(filterResult); // [2, 3, 4]

// 배열에서 1씩 더해주고싶을 때
let mapResult = arr.map(num => num + 1);
console.log(mapResult); // [2, 3, 4, 5, 0]

/**
* 필터와 맵 함께 사용
* 짝수만 출력하고 key값을 주어서 객체로 만들기
*/

console.log(
arr.filter(num => num % 2 == 0)
.map(num => ({ '짝수' : num })
));   // 0: {짝수: 2}
      //1: {짝수: 4}

```

---

### reduce: 자료들을 축약하여 새로운 결과를 만드는 함수 배열을 순회하며 인덱스 데이터를 줄여가는 기능

```javascript
var slice = Array.prototype.slice;
function _rest(list, num) {
return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
  console.log(arguments.length);
  if (arguments.length === 2) {
  memo = list[0];
  list = _rest(list);
  }
  _each(list, function(val) {
  memo = iter(memo, val);
  })
  return memo;
}
console.log('--reduce')
console.log(
  _reduce([1, 2, 3, 4], add, 0)
); // 10

// 세번째 인자를 생략하는 방법
console.log(
  _reduce([1, 2, 3, 4], add)
); // 10
console.clear();


// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); // output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // expected output: 15

/**
* reduce 함수의 네가지 인자
* 1. 누산기 (acc)
* 2. 현재값 (cur)
* 3. 현재 인덱스 (idx)
* 4. 원본 배열 (src)
* 리듀서 함수의 반환값은 누산기에 할당되고
* 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의값이 된다.
* (리턴값이 하나의 값으로 리턴된다.)
*/

const arr = [10, 20, 30, 40, 50];
let result = arr.reduce(function(acc, cur, idx, src) {
  return acc + cur
}, 100); // 초기값 0
console.log(result);

// 초기값을 주지않으면 누적값 10, 현재값 10으로 시작된다.
// acc: 10, cur: 20, idx: 1

```
