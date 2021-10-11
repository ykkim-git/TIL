# THIS

> js에서 this는 '누가 나를 불렀느냐' 를 뜻한다. 즉, "선언"이 아닌 "호출"에 따라 달라진다는 것.

여러가지 예제를 통해 알아보자.

---

## 단독으로 쓴 this

> 그냥 this를 바로 찍어본다면 global object를 가리킨다.

```js
var x = this;
console.log(x); // window
```

---

## 함수 안에서의 this

> 함수 안에서의 this는 함수의 주인(window객체)에게 바인딩된다.

```js
function myFunction() {
  return this;
}

console.log(myFunction()); // window
```

```js
var num = 0;
function add() {
  this.num = 100;
  num++;

  console.log(num); // 101
  console.log(window.num); // 101
  console.log(num === window.num); // true
}
add();
```

위에서 this.num의 this는 window객체를 가리킨다. 따라서 num은 전역변수를 가리킨다.

하지만, strict mode에서는 함수 내의 this에 디폴트 바인딩이 없어서 undefined가 출력된다.

```js
"use strinct";
function myFunction() {
  return this;
}

console.log(myFunction()); // undefined
```

```js
"use strinct";
var num = 0;
function add() {
  this.num = 100; // ERROR! Cannot set property 'num' of undefined
  num++;
}
add();
```

---

## 메서드 안에서의 this

> 메서드 호출 시 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩된다.

```js
var person = {
  firstName = 'John',
  lastName = 'Doe',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
}

person.fullName(); // 'John Doe'

```

```js
var num = 0;

function showNum() {
  console.log(this.num);
}

showNum(); // 0;

var obj = {
  num: 200,
  func: showNum,
};

obj.func(); // 200;
```

## 이벤트 핸들러 안에서의 this

> 이벤트 핸들러에서의 this는 이벤트를 받는 HTML요소를 가리킨다.

```js
var btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  console.log(this); // #btn
});
```

---

## 생성자 안에서의 this

> 생성자 함수가 '생성하는 객체'로 this가 바인딩 된다.

```js
function Person(name) {
  this.name = name;
}

var kim = new Person("kim");
var lee = new Person("lee");

console.log(kim.name); // kim
console.log(lee.name); // lee
```

하지만 new 키워드가 빠진다면 일반 함수호출과 같아지기 때문에 this가 window에 바인딩된다.

```js
var name = "window";
function Person(name) {
  this.name = name;
}

var kim = Person("kim");

console.log(window.name); //kim
```

---

## 화살표 함수에서의 this

> 화살표 함수는 전역 컨텍스트에서 실행되더라도 this를 새로 정의하지 않고, 바로 바깥 함수나 클래스의 this를 사용한다.

```js
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this); // Person { name: "Nana", age: 28 }

    setTimeout(function () {
      console.log(this); // Window
      console.log(this.name + " is " + this.age + " years old");
    }, 100);
  };
};

var me = new Person("Nana", 28);

me.say(); // global is undefined years old
```

위 코드에서 내부 함수의 this가 전역객체를 가리켜서 잘못된 결과가 나온다.
화살표 함수로 바꿔준다면 정상적인 결과가 출력된다.

```js
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this); // Person {name: "Nana", age: 28}

    setTimeout(() => {
      console.log(this); // Person {name: "Nana", age: 28}
      console.log(this.name + " is " + this.age + " years old");
    }, 100);
  };
};
var me = new Person("Nana", 28); //Nana is 28 years old
me.say(); // Nana is 28 years old
```

---

### 정리

* 단독: window
* 함수 안: 함수의 주인(window객체)에게 바인딩된다.
* 메서드 안: 메서드를 호출한 객체로 바인딩된다.
* 이벤트핸들러 안: 이벤트를 받는 HTML요소를 가리킨다.
* 생성자 안: 생성자 함수가 '생성하는 객체'로 this가 바인딩 된다.
* 화살표함수 안: 바로 바깥 함수나 클래스의 this를 사용한다.
