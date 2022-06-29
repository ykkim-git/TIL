스크롤 이벤트를 등록하여 페이지의 스크롤을 감지할 수 있지만 스크롤 이벤트는 단시간에 많이 호출될 수 있고 동기적으로 실행되기 때문에 메인 스레드에 영향을 주는반면, Intersection Observer라는 Web API 를 사용하면 target과 root의 교차되는 지점을 비동기적으로 관찰할 수 있습니다.
메인 스레드에 영향을 주지않고 콜백을 실행하고, 매번 layout을 새로 그리지않고 callback을 실행하므로 브라우저의 성능을 향상시킬 수 있습니다.

---

## 사용 방법

```js
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
```

- callback: 콜백이 실행되는 함수
- options: {
  root: 뷰포트 요소 (default: browser viewport)

      rootMargin: root가 가진 여백 (css margin 속성과 유사함)

      threshold: 1은 100%, 0.5는 50%를 의미하며 수치만큼 요소가 보여졌을 때 탐지하도록 설정합니다.

  }

---

## 예제

```js
<transition v-on:enter="enter">
	<article class="toktok" ref="wrapper">
		...
		...
		<observer-section v-on:triggerFadeIn="fadeIn" /> <- 옵저버 컴포넌트
		<section name="loading" v-if="loading">
			<loading  /> <- 로딩바 컴포넌트
		</section>
	</article>
</tranasion>

data() {
	return {
    loading: false,
	}
}

methods: {
	enter(el) {
      el.style.opacity = 0;
  },

  async fadeIn() {
    this.$refs.toktokWrapper.style = "transition: opacity 1s";

    this.loading = true;

    await this.getPageList();
		// 해당 함수 내에서 로직 종료 시 로딩바 컴포넌트를 안보이도록 설정해줘야 합니다.
  },
}

```

### 재사용을 위한 옵저버 컴포넌트 제작

```js
<template>
  <div ref="triggerDiv"></div>
</template>

<script>
export default {
  name: "observer",
  data() {
    return {
      observer: null,
      option: {
        root: null,
        threshold: 1,
      },
    };
  },
  methods: {
		// 컴포넌트가 감지되었을 때 부모컴포넌트로 emit하여 이벤트 전달
    handleIntersect(target) {
      if (target.isIntersecting) {
        this.$emit("triggerFadeIn");
      }
    },
  },
  mounted() {
		// 옵저버 생성
    this.observer = new IntersectionObserver(entries => {
      this.handleIntersect(entries[0]);
    }, this.option);
    this.observer.observe(this.$refs.triggerDiv);
  },
};
</script>

<style scoped>
div {
  opacity: 0;
}
</style>

```
