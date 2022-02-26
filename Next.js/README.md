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
