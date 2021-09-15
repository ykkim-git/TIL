# CSS box-sizing

## border-box
레이아웃 설정시 테두리, 패딩 등의 크기를 신경쓰지 않을 수 있습니다. 대신 컨텐츠 영역이 자동으로 초기 설정값보다 padding, border, margin 크기 만큼 줄어서 적게 설정이 됩니다.

```css
width: 100px; 
padding: 10px;

결과: (width 80px + padding-left 10px + padding-right 10px);
```
---

## content-box
정한 width 및 height 크기는 오직 content 영역의 크기에만 영향을 끼칩니다. 크기를 덧셈으로 표현하는 것은 엄밀히 말하면 맞지 않지만 직관적으로 이해하기에는 좋습니다.

```css
width: 100px;
padding: 10px;

결과: (width 100px + padding-left 10px + padding-right 10px);
```