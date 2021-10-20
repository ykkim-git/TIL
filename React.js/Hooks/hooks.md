# React Hooks 간단정리

## useState

> hook에서 state 사용

```js
const [count, setCount] = useState(0);
```

---

## useEffect

> 컴포넌트가 마운트 또는 업데이트가 될 때 호출되는 Hook 배열로 지정한 useState값이 변경되면 실행된다.

```js
useEffect(() => {
  console.log(`useEffect! : ${count} `);
}, count);
```

> 만약 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고, 업데이트 할 경우에는 실행 할 필요가 없다면? 두번째 파라미터로 빈 배열을 넣어준다.

```js
useEffect(() => {
  // do something...
}, []);
```

---

## useRef

> 호출될때마다 새로운 레퍼런스를 만드는것이 '아니라' 한번만 만들고 메모리에 저장해놓고 다시 재사용한다.

```js
const spanRef = useRef();

<span ref="${spanRef}" className="span"></span>;
```
