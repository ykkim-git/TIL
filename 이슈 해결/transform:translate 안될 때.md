## transform: translate 속성이 안될 때

특정 element의 가운데 배치를위해 아래와같은 css를 사용하는데

```css
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
.element에 translate 속성이 포함된 animation이 들어간다면
```css
@keyframes elementAnimation {
  100% {
    transform: translateY(-10px);
  }
}


.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: elementAnimation;  <--
}
```

translate 속성이 중첩되어

```css
 .element {
   transform: translate(-50%, -50%); 
 }
```

속성이 작동되지않는 경우가 있다.

이 문제를 해결하기위해 animation을 컴포넌트로 빼주었고
감싸고있는 element의 bottom 위치를 수정해주었다.
```css
@keyframes elementAnimation {
  100% {
    bottom: 10px;
  }
}
```