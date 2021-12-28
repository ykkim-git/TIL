# RESUME

## 소개

> "항상 더 나은 UI/UX를 고민하는 프론트엔드 개발자가 되자"

- 이름: 김영권 (KIM YOUNG KWON)
- Email: rladudrnjs12@gmail.com
- 생년월일: 1991-06-05
- 병역 : 육군 병장 만기전역
- 취미 : 캠핑

---

## 경력

- 케어마인드(에포터) 프론트엔드 개발자 (2021-02 ~ )
- 티비허브 모바일 개발팀 (2018-06 ~ 2020-11)

---

## 학력

- 한국 승강기대학교 안전관리과 졸업 (2016-02)
- 서울 경기상업고등학교 졸업 (2010-02)

---

## 기술

- HTML

- CSS

  - Scss

- JavaScript

  - ES6
  - Axios

- TypeScript (studying 12/13 ~ )

- Vue (Main)

  - Nuxt.js
  - Vuex
  - Cli 3
  - VueRouter

- React

  - React Hooks
  - ant design
  - React Native
  - React hooks

- Firebase

  - Google Firebase Authentication

- DevOps

  - AWS
  - Yarn
  - Npm
  - Webpack
  - JIRA
  - Sourcetree
  - Github, Git, gh-pages
  - Bitbucket
  - Subversion(SVN)

- etc
  - Postman
  - Notion
  - Slack
  - Restful API
  - Zeplin
  - Figma

[자세한 사항들은 stackshare.io](https://stackshare.io/rladudrnjs12/ykkstackshare)에 있습니다.

---

## 프로젝트

### [에포터 어드민] 사내 어드민 관리시스템 (프론트엔드: React.js, ant design)

- 사내 어드민 구축 (2021/11 ~ ): 프론트엔드 담당 (100%)

### [에포터] 성형 후 회복관리 앱 (프론트엔드: Vue.js. Vuex, Nuxt.js)

- 주치의 원격상담 (채팅봇 ui) : 프론트엔드 담당 (100%)
<table>
     <tr>
        <td>
           <img id="1" src="./images/주치의상담01.png" width="200" height="350" />
        </td>
        <td>
           <img src="./images/주치의상담02.png" width="200" height="350" />
        </td>
     </tr>
     <tr>
        <td>
           <img src="./images/주치의상담03.png" width="200" height="350"/>
        </td>
        <td>
           <img src="./images/주치의상담04.png" width="200" height="350" />
        </td>
     </tr>
       <tr>
        <td>
           <img src="./images/주치의상담05.png" width="200" height="350"/>
        </td>
        <td>
           <img src="./images/주치의상담06.png" width="200" height="350" />
        </td>
     </tr>
 </table>

생산성을 높이도록 재사용 가능한 컴포넌트로 개발

```html
// 기본구조
<template>
  <article name="container">
    <헤더컴포넌트 /> <말풍선 loop 컴포넌트 /> <알림 전용 컴포넌트 />
  </article>
</template>

// 공통 컴포넌트 (in 말풍선 컴포넌트)
<template>
  <article name="baloon">
    <프로필 컴포넌트 /> <이미지 컴포넌트 /> <타이머 컴포넌트 />
  </article>
</template>
```

컴포넌트를 분리하여 렌더링 될 때 컴포넌트 상태가 동적으로 변화될 때 (ex: 서버에서 data pooling으로 변경된 값을 받았을 때)
props data로만 변경하게 되면 정상적으로 rendering 되지않아 computed속성안에 mapgetters를 이용하여 조건부 렌더링을 사용.

---

- 주치의, 병원의 상세 페이지 (정보 및 리뷰) : 프론트엔드 담당 (100%)

<table>
     <tr>
        <td>
           <img id="1" src="./images/병원상세페이지01.png" width="200" height="350" />
        </td>
        <td>
           <img src="./images/병원상세페이지02.png" width="200" height="350" />
        </td>
     </tr>
     <tr>
        <td>
           <img src="./images/병원상세페이지03.png" width="200" height="350"/>
        </td>
        <td>
           <img src="./images/병원상세페이지04.png" width="200" height="350" />
        </td>
     </tr>
       <tr>
        <td>
           <img src="./images/원장상세페이지03.png" width="200" height="350"/>
        </td>
        <td>
           <img src="./images/원장상세페이지04.png" width="200" height="350" />
        </td>
     </tr>
     </table>

### 사용된 라이브러리

- chart.js 도넛그래프 커스텀
- owl-carousel 이미지 스와이퍼
- kakao-map api 병원위치 지도에 표시

재사용성을 높여 생산성을 높이는 컴포넌트 구조

```html
<컨테이너> <병원 사진+안내 컴포넌트 /> <병원소개 /> <병원 리뷰 /> <컨테이너 />
그 외 사진, 뱃지, 유저 프로필 등 컴포넌트 세분화 작업 진행
```

---

- 회복실 프론트엔드 파트

     <table>
     <tr>
        <td>
           <img id="1" src="./images/note1.png" width="200" height="300" />
        </td>
        <td>
           <img src="./images/note2.png" width="200" height="300" />
        </td>
     </tr>
     <tr>
        <td>
           <img src="./images/note3.png" width="200" height="300"/>
        </td>
        <td>
           <img src="./images/note4.png" width="200" height="300" />
        </td>
     </tr>
     </table>

* 내 시술등록 페이지:
  window 스크롤 이벤트를 이용하여 하나의 컴포넌트 안에서
  스크롤 이동하는 기능 구현

```html
<button type="button" @click="moveToNext('date')">click here</button>
```

```javascript
import smoothscroll from "smoothscroll-polyfill";

mounted() {
  smoothscroll.polyfill(); // ios safari환경에서 smooth 스크롤이 되지 않는 이슈를 막기위한 라이브러리
    document.documentElement.style.overflow = "hidden"; // 사용자가 입력하는 터치이벤트로 스크롤이 되지 않도록
},

moveToNext(target) {
  this.current = target; // 현재 scroll position 저장
  this.$nextTick(() => {
    window.scroll({
      top: this.$refs[target].offsetTop - this.$refs.header.offsetTop,
      behavior: "smooth",
    });
  });
}
```

- 발생했던 이슈: iPhone Webview에서 Javascript 이벤트 발생 위치가 불일치 하는 현상
  - iphone X 시리즈에서 input type 'tel'로 설정된 키보드가 사라질 때 ui가 위로 밀리는 현상이 발생하면서, 숨겨졌던 다음 페이지가 보여지게 됨.
  - 해결방법: input type 'tel'이 들어가는 엘레먼트의 ui를 키보드 계산기형 ui로 변경하고, input에 blur 이벤트가 발생하면 스크롤을 초기화.

---

- 휴대폰번호 및 SNS계정으로 회원가입
  <table>
   <tr>
      <td>
      <img src="./images/login.png" width="200" height="300"  />
      </td>
      <td>
      <img src="./images/registphone.png" width="200" height="300"  />
      </td>
   </tr>
  </table>

---

### [홈빠] 홈쇼핑 상품 모음 앱 (Vue.js, Vuex)

- 최근 본 상품 페이지
- 찜한 상품 페이지
- 내 TV포인트 페이지
- 각종 팝업
- 고객 센터 및 공지사항

- OTT 서비스 내 TV포인트 전환 및 결제 서비스
  - 대상 제휴사: 카카오페이지, 네이버 웹툰, KT 시즌, U+ 모바일tv, (구)옥수수 등
  - 모바일 웹 및 앱(웹뷰 방식) 프론트엔드 개발 및 관리: jsp, jquery, vue.js

---
