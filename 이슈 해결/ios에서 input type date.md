ios환경에서 input type="date" 속성의 placeholder 속성을 지원하지 않는다.

그래서 처음 type을 "text"로 지정해주고,
focus가 되었을 때 type을 "date"로 설정해주면 된다.

https://stackoverflow.com/questions/30961704/show-placeholder-text-for-input-type-date

---

- 23년 1월 6일 업데이트
  이 방법은 캘린더를 띄우려면 input을 두번 선택해야하는 번거로움이 있어서 아래와같이 변경함

```html

<label for="age" class="overlabel" v-if="showDateLabel"
  >생년월일을 입력해주세요
  <img src="/images/ico-under-arrow.svg" />
</label>

<input
  id="age"
  ref="age"
  type="date"
  maxlength="10"
  :max="maxDate"
  min="1931-01-01"
  value="yyyy-MM-dd"
  v-model="fields.age"
  @focus="setInitialDate($event)"
  :class="`form-text__info-border-${dateFlag}`"
/>
```

```css
.overlabel {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ababab;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
```
