## 직접적인 eval보다

간접적인 eval을 사용하자

eval은 자신이 호출된 시점의 전체 스코프에 접근할 수 있다.

함수 호출이 런타임시 eval로 호출되었다고 판명되면, 자신의 스코프를 사용 가능하도록 만들어줘야 한다.

아래의 예제는 식별자 eval을 포함하는 ‘직접적인’ eval 호출이다.

```jsx
var x = "global";
function test() {
  var x = "local";
  return eval("x"); // 직접적인 eval;
}
test(); // 'local';
```

아래는 간접적인 eval 호출이다.

```jsx
var x = "global";
function test() {
  var x = "local";
  var f = eval;
  return f("x"); // 간접적 eval 호출
}
test(); // 'global';
```

“global” 이 출력되는 이유는 ES5 부터는 eval을 직접 호출하지 않고 간접적으로 사용하면

지역 스코프가 아닌 전역 스코프로 동작하기 때문이다.
