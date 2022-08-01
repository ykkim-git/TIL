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

---

## Layout Pattern

- children: 하나의 component를 다른 component안에 넣을 때 사용한다.

  ```jsx
  Layout.js;
  export default function Layout({ children }) {
    return (
      <>
        <Nav />
        <div>{children}</div>
      </>
    );
  }
  ```

  ```js
  app.js에서 전체 Layout으로 감싸준다.
  <Layout>
    <Component {...pageProps} />
  </Layout>
  ```

## Next.config.js 파일

```js
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // redirect: a로 들어왔을 때 b로 다시 보내준다.
    return [
      {
        // source: "/contact",
        // destination: "/form",
        source: "/old-page/:path*",
        destination: "/new-page/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // rewrites: a로 들어왔을 때 b로 다시 보내주지만 url은 바뀌지 않는다.
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      },
    ];
  },
};
```

## Serverside Rendering

- 아래 함수는 오직 서버에서만 작동하는 함수다.

```js
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      // 여기서 results를 리턴해주면, home에서 props로 넘겨줄 수 있다.
      // will be passed to the page component as props
      results,
    },
  };
}
```

## Dynamic Routes

- pages 아래에 원하는route/{id값} 처럼 변수를 포함하는 Dynamic URL인것을 알려주려면

```js
[id].js 로 파일을 만들면 된다.
```

- query string 보내기

```js
router.push(
  {
    pathname: `/movies/${id}`,
    query: {
      title,
    },
  },
  (as = `/movies/${id}`) // 브라우져에서 마스킹 하기
);
```

- URL에 영화제목 넣기 (catch all url)
  파일명은 [...params]로 변경(array 타입으로)

## 404 page

* pages/404.js 만들기.
