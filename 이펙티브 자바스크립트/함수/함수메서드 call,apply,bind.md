## 함수의 메서드 call, apply, bind

자바스크립트에서 함수를 호출하는 방법 중 가장 일반적인 방법은 함수 뒤에 ()를 붙여서

호출하는 방법이 있고, 자주 쓰이지는 않지만 call, apply, bind를 사용하여 호출하는 방법이 있다.

아래 예제를 보면 각기 함수 호출 방식은 다르지만, 같은 결과를 보여준다.

```tsx
function foo(a, b, c) {
  console.log(a + b + c);
}

foo(1, 2, 3); // 6
foo.call(null, 1, 2, 3); // 6
foo.apply(null, [1, 2, 3]); // 6
```

### call()

> function.call(thisArg[, arg1[, arg2[, ...]]])

- thisArg: function 호출에 제공되는 this의 값
- arg1, ar2, ... : function이 호출되어야 하는 인수

첫번째 매개변수 thisArg는 각 함수의 실행문맥의 this를 특정하게 지정하는 매개변수이다.

그리고 두번째부터는 호출할 함수의 인수들이 들어간다.

아래 예제를 보면 call을 이용하여 person2의 함수를 호출하지만

call메소드 첫번째 매개변수에 person1을 넣어줬기 때문에

**this는 person2가 아닌 person1을 가리키게 된다.**

```tsx
let person1 = {
  name: "Jay",
};

let person2 = {
  name: "Kate",
  hi: function () {
    console.log("hello " + this.name);
  },
};

person2.hi.call(person1); // 'hello Jay';
```

---

### apply()

> function.apply(thisArg, [argsArray])

- thisArg: func 호출에 제공되는 this의 값
- argsArray: func이 호출되어야 하는 인수를 지정하는 유사 배열 객체

첫 번째 매개변수 thisArg는 call()과 같이 this를 지정한다. 하지만 call()과는 다르게

apply()는 두번째 매개변수를 배열 형태로 넣게된다.

예제는 위에있는 예제와 같아서 생략하였습니다. 두번째 매개변수를 배열형태로만 넣어주면 같기 때문입니다.

---

### bind()

> function.bind(thisArg[, arg1[, arg2[, ...]]])

- thisArg: 바인딩 함수가 타겟 함수의 this에 전달하는 값
- arg1, arg2, ...: function이 호출되어야 하는 인수

bind()는 새롭게 바인딩한 함수를 만든다. 바인딩한 함수는 원본 함수 객체를 감싸는 함수이다.

bind()는 call(), apply()와 같이 가리키고 있는 this를 바꾸지만 호출되지는 않는다.

따라서 변수를 할당하여 호출하는 형태로 사용된다.

```tsx
let person1 = {
	name: 'Jay';
}

let person2 = {
	name: 'Kate',
	hi: function() {
		console.log('hello' + this.name);
	}
};

person2.hi(); // 'hello kate';

let test = person2.hi.bind(person1);
test(); // "hello Jay";
```

### 왜 사용하는가?

메서드 호출 문법은 this를 찾기 위한 객체를 바인딩한다.

간혹 this의 프로퍼티는 아니지만 this를 특정 객체로 지정해 함수를 호출할 필요가 있을수도

있기 때문이다.

**this 란?**

this는 일반적으로 메소드를 호출한 객체가 저장되어 있는 속성이다. 기본적으로는 window이다.
