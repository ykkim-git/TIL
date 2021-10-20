# 리액트 라우터 사용해보기

> 설치: yarn add react-router-dom

### 1. App.jsx

> 루트에 <BrowserRouter> 설정해주기

```js
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>hello world! this is home.</h1>
    </BrowserRouter>
  );
}
```

---

### 2. pages/About.jsx

> 이동할 페이지 만들어주기

```js
import React from "react";

const About = () => {
  return <h3>hello! this is about page</h3>;
};

export default About;
```

---

### 3. pages/index.js

> 이 컴포넌트를 불러와서 한 파일로 내보낼 수 있도록 만들기.

```js
export { default as Home } from "./Home";
export { default as About } from "./About";
```

---

### 4. App.jsx

> 설정한 라우트 보여주기

```js
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home, About } from "pages";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}
```

---

### 5. 확인

> localhost:3000/about 에 접속하여 확인하자! 끝!