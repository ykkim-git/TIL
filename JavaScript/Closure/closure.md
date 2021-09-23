# Closure

## 알기 쉽게 정리한 클로져

> 아래와 같은 경우에, cnt라는 변수는 cntPlus라는 함수로만 변경시켜야 한다.

```javascript
let cnt = 0;
function cntPlus() {
  cnt = cnt + 1;
}

console.log(cnt); // 0;
cntPlus();
console.log(cnt); // 1;

// do something ....

// cntPlus 함수를 호출하는 것이 아닌 전역변수에 접근하여 값 변경.
cnt = 100;

// do something ...

cntPlus();
console.log(cnt); // 101
```

---

## 클로져로 수정

```javascript
function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }

  // cnt를 출력하는 함수
  function printCnt() {
    console.log(cnt);
  }

  // cnt값을 바꿔주는 함수
  function setCnt(value) {
    cnt = value;
  }

  return {
    // 함수를 리턴
    cntPlus,
    printCnt,
    setCnt,
  };
}

const cntClosure = closure(); // cntPlus라는 함수를 갖고있다.

console.log(cntClosure); // function: cntPlus

cntClosure.printCnt(); // 0
cntClosure.cntPlus(); // cnt값 증가
cntClosure.printCnt(); // 1
--------------------------------
cntClosure.setCnt(100); // 100으로 cnt값 수정
cntClosure.printCnt(); // 100
```
