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
