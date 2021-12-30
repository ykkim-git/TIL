# eval에 대해서 : eval() is evil

> eval은 문자로 표현 된 Javascript 코드를 실행하는 함수(즉, 문자열을 코드로 인식하게 함)

```jsx
eval(string);
```

eval은 매개변수로 string값을 받고, 주어진 코드를 평가하여 얻은 값을 return하고

값이 없다면 undefined를 return 한다.

### 기본 사용 예제

```jsx
eval("2 + 2"); // 4
eval("2 + 2") === eval("4"); // true
```

### 응용 예제

```jsx
var evalExam = 'var date = "20"';
evalExam += 'alert("date 값은: " + date + " 타입은:"+typeof(date));';

eval(evalExam); // date값은: 20 타입은: string
```

## eval()을 가급적 사용하지 말자

- eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수이다.
- 악의적인 영향을 받았을 수 있는 문자열을 eval()로 실행한다면, 해당 웹페이지나 확장 프로그램의 권함으로 사용자의 기기에서 악의적인 코드를 수행하는 결과를 초래
- 제3자 코드가 eval()이 호출된 위치의 스코프를 볼 수 있으며, 이를 이용해 비슷한 함수인 Function으로는 실현할 수 없는 공격이 가능
