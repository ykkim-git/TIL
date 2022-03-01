# Next.js

## 설치

```js
npm create-next-app@latest
```

## Routing

next.js에서는 <a> 태그 사용 금지 (새로고침 하기때문)
Link를 사용하자.

```js
import Link from "next/link";
<Link href="/">
  <a>Home</a>
</Link>;
```

- Router 사용하기

```js
import { useRouter } from "next/router";

<a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>;
```

## Styled JSX

```js
독립 스코프를 가진다.
* jsx 뒤에 global을 넣으면 global scope로 변경
<style jsx>
  {`
    nav {
      background-color: tomato;
    }
    .active {
      color: #fff;
      color:${props.color}  // props를 넣어줄 수도 있음.
    }
  `}
</style>

<nav class="jsx-1b1c8bd873349280"> 방식으로 parse
```

## Next.js에서 app컴포넌트를 이용하여 page 초기화하기

- \_app.js를 만들어서 사용한다.
  next.js는 \_app.js를 가장 처음 불러온다.

```js
_app.js;
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```
