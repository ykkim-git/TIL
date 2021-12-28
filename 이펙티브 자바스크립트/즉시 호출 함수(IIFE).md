IIFE(immediately-invoked Function Expression)이란 즉시 호출 함수의 줄임말이고

즉시 호출 함수의 기본적인 형태는 다음과 같다.

```jsx
(function () {
  console.log("something..");
})();

// ES6 Arrow function
(() => {
  console.log("something..");
})();
```

이 개념을 이해하기 위해서는 함수의 선언과 함수의 표현의 차이점에 대해 알아야하는데

간단한 예제를 통해서 빠르게 복습을 해보자면,

```jsx
foo(); // 호출 성공
function foo() {
  // 함수 선언식
  alert("foo");
}

foo(); // "foo" is no defined;
var foo = function () {
  // 함수 표현식
  alert("foo");
};
```

위와같이, 함수 선언식은 호이스팅(끌어올려짐)에 의하여 alert이 호출이 되고,

함수 표현식은 호이스팅이 되지 않는 특징이 있는데, 즉시 실행 함수 표현식도 마찬가지이다.

```jsx
alert(foo); // "foo" is not defined
(function foo() {})();
alert(foo); // "foo" is not defined
```

## 언제 IIFE를 사용할까?

IIFE는 주로 전역 스코프를 오염시키지 않기 위해서 사용한다.

즉 변수를 전역으로 선언하는 것을 피하기 위해서이다. (이것을 오염시키지 않는다고도 말한다.)

하나의 예제를 보면, 프로그램 초기화 시점에 아래 init함수를 실행한다고 가정한다.

```jsx
function init() {
  var operate = "operate 변수입니다.";
  console.log(operate);
}
init(); // 'operate 변수입니다.'
```

이 함수는 전역 Scope에 선언되어 name collision이 발생할 확률을 높이며

개발자의 의도와 달리 다른 code에 의해 재호출 될 수도 있다.

아래처럼 외부 코드로부터 사용되지 않는 단 한번 호출되는 코드들은 IIFE를 사용하는게 바람직하다.

```jsx
(function init() {
  var operate = "operate 변수에 접근하게 해줘";
})();
console.log(operate); // Uncaught ReferenceError: operate is not defined
```
