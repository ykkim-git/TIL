/** arrow functions */
```ts
const add = (a: Number, b: Number) => a + b;
```

/** ts에서는 타입 배정을 아래와 같이 생략하면 안된다. */
```ts
const printOutput = ouput => console.log(output);
```

/** 아래와같이 수정할 수 있다. */
```ts
const printOutput: (a: number | string) => void = (output) => console.log(output);
printOutput(add(5, 2)); // printOutput의 인수 하나를 add에서 더한 값으로 전달
```

