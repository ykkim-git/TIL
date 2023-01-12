### midea query 에서 min-width와 max-width 

1. min-width
> 창 크기가 1024px "이상"일때 아래 css가 적용된다.
* 스마트폰 등 가장 작은 사이즈에서의 레이아웃을 기본 -> 점차 "확장" 되어가는 형태에서 사용
```css
@media (min-width: 1024px) {
  body {
    background-color: red;
  }
}
```

2. max-width
> 창 크기가 1024px "이하"일때 아래 css가 적용된다.
* 데스크탑용의 가장 큰 사이즈에서의 레이아웃을 기본 -> 점차 "축소" 되어가는 형태에서 사용
```css
@media (max-width: 1024px) {
  body {
    background-color: blue;
  }
}
```


참고: 1분코딩