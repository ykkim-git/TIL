# updated함수가 리렌더링을 감지못하는이유

서버에서 받아온 데이터를 이용하여 동적으로 부모 컴포넌트에서 자식 컴포넌트를 그려주는 경우에
updated 함수를 사용하여 리렌더링이 됐을 때 이벤트를 처리하고 싶었다.

> updated 함수는 모든 자식 컴포넌트가 re-randering 되고나서 실행되는 것을 보장하지 않는다고 한다. 아마 비동기로 실행되기 때문일건데 이 때 $nextTick을 사용한 후 실행해주면 모든 컴포넌트가 re-randering되고나서 실행될 로직을 적어줄 수 있다.

```js
updated: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
  })
}
```

