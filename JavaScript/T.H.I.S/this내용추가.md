## 질문 - 객체 지향 프로그래밍에서의 this

> this는 가지고 있는 메서드가 속해있는 객체를 가리키도록 만든 예약어이다.
> this는 객체 명의 변경에 관계없이 항상 메서드가 속해있는 객체를 바라본다.

사람에게는 자기 자신을 일컫는 말로 (나), 영어로는 (me)가 존재하듯이

프로그래밍에서도 자기 자신을 가리키는 표현을 this라고 부르며 사용한다.

```tsx
const jay = {
  name: "jay",
  hello: "hello",
  world: "world",
  sum: (h, w) => {
    return jay.hello + jay.world;
  },
};
jay.sum(); // "hello world"
```

만약에 위와 같은 예제에서 jay라는 객체명이 변경되었을 경우

return의 jay라는 객체명도 변경해야 하는 불편함이 생기는데 이런 불편함을 개선하자면

```tsx
const jay = {
  name: "jay",
  hello: "hello",
  world: "world",
  sum: (h, w) => {
    return this.hello + this.world;
  },
};

jay.sum(); // 'hello world'
```

처음 예제와 같이 불편함을 개선하고자 자바스크립트 내부에서는 객체 내부 메서드에서

자기 자신을 가리키는 this를 사용할 수 있게했다.

---

## 함수의 toString 메서드에 의존하지 마라

자바스크립트 함수에서 놀라운 기능 중 하나인 toString 메서드는

소스코드를 문자열로 재생산할 수 있다.

```tsx
(function (x) {
  return x + 1;
}.toString()); // "function (x) { return x + 1 }
```

하지만 toString메서드의 제약이 있다.

EMCAScript 표준은 함수의 toString 메서드의 결과로 나오는 문자열에 대한

어떤 요구사항도 강요하지 않는다. 자바스크립트 엔진에 따라 (v8, 웹킷 등) 결과 문자열이 달라질 수 있고 함수의 내용을 담은 문자열을 만들어내지 않을 수 있기 때문이다.

그리고 toString으로 생성된 소스코드는 그 내부 클로저의 값을 표현하지 못한다.

```tsx
(function (x) {
  return function (y) {
    return x + y;
  };
})(42).toString(); // "function (y) { return x + y; };
```

위에서 함수는 실제로 클로저이고 x를 42로 바인딩하고 있지만

결과 문자열이 x로의 변수 참조를 여전히 가지고 있다.

그렇기 때문에 일반적으로 toString을 사용하면 안된다고 한다.

---

## 비표준 스택 검사 프로퍼티를 사용하지 마라

많은 자바스크립트 실행 환경은 활성 함수의 체인을 검사하기 위한 몇 가지 기능을 제공한다.

인자와 함께 호출한 함수를 참조하는 [arguments.call](http://arguments.call), 그를 호출한 함수를 참조하는

arguments.caller 가 있다.

arguments.call은 함수 자신을 재귀적으로 참조하기 위해서 사용하는데

보통 arguments.call을 사용하기 보다는

```tsx
function factorial(n) {
  return n < 1 ? 1 : n * factorial(n - 1);
}
```

과 같은 방식으로 사용하는것이 더 간단하기 때문에 유용한 방법은 아니라고 한다.

그리고 주어진 객체로 호출한 함수를 참조하는 arguments.caller는

아래와 같이 사용한다.

```tsx
function callerFunction() {
  return callerFunction.caller;
}

function start() {
  return callerFunction();
}

start() === start; // true
```

이런 호출 검사 기능들은 비표준이고 적용성이나 이식성에 한계가 있다.

게다가, es5 스트릭트 함수에서는 명시적으로 허용하지 않고 있다.

strict 함수에서 caller 함수로 접근을 시도하면 에러가 발생한다.

```tsx
function f() {
  "use strict";
  return f.caller;
}
f(); // Error: caller는 스트릭트 함수에서 접근할 수 없다.
```

따라서 전적으로 스택 검사를 사용하지 않는 것이 최선의 정책이다.

차라리 디버거를 사용하는게 더 신뢰할 수 있는 방법인 것이다.

---
