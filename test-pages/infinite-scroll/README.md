# infinite-scroll page

## intersection observer

스크롤이벤트를 적용하면 스크롤 되는 순간마다 이벤트를 확인하는데
인터섹션 옵저버는 내가 등록한 대상이 상위 요소 혹은 최상이 도큐먼트인 viewport와의
교차 영역에 대한 변화를 감지하는 방법이다.

1. 인터섹션 옵저버 생성

```js
const io = new IntersectionObserver(callback, options);
```

2. 지켜볼 요소를 매개변수에 넣어 호출

```js
io.observe("요소");
```

끝

---

## callback

관찰할 대상이 등록되거나 가시성에 변화가 생기면, 관찰자는 콜백을 실행한다.
매개변수 (entries, observer)를 가진다.

### entries

- boundingClientRect: 관찰 대상의 사각형 정보(DOMRectReadOnly)
- intersectionRect: 관찰 대상의 교차한 영역 정보(DOMRectReadOnly)
- intersectionRatio: 관찰 대상의 교차한 영역 백분율(intersectionRect 영역에서 boundingClientRect 영역까지 비율, Number)
- isIntersecting: 관찰 대상의 교차 상태(Boolean)
- rootBounds: 지정한 루트 요소의 사각형 정보(DOMRectReadOnly)
- target: 관찰 대상 요소(Element)
- time: 변경이 발생한 시간 정보(DOMHighResTimeStamp)

### observer

콜백이 실행되는 해당 인스턴스를 참조한다.

---

## Options

- root: 타겟의 가시성을 검사하기 위해 뷰포트 대신 사용할 요소객체 지정

```js
{
  root: document.getElementById("my-viewport");
}
```

- rootmargin: margin을 이용해 root범위를 확장하거나 축소하기.

```js
{
  rootMargin: "200px 0px";
}
```

- threshold
  옵저버가 실행되기 위해 타겟의 가시성이 얼마나 필요한지 백분율로 표시
  {threshold: 0} viewport와 타켓이 교차하는 순간
  {threshold: 0.3} viewport와 타켓이 30%일 교차했을 때
  {threshold: 1} viewport에 타켓이 모두 교차했을 때

---

## methods

- observe()
  대상 요소 관찰
- unobserve()
  대상 요소 관찰 중지
- disconnect()
  intersectionObserver 인스턴스가 관찰하는 모든 요소의 관찰을 중지
