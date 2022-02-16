Computed 속성

템플릿 문법에서 JavaScript 표현식을 사용하면, 쉽게 원하는 데이터를 DOM에 그릴 수 있습니다.

하지만 복잡한 연산을 템플릿 안에서 하게 되면, 코드를 이해하고, 유지보수하기 어려워집니다.

아래에서 예를 보여드리겠습니다.

<1. Javascript를 사용한 템플릿 문법>

<div id="example">

{{ message.split('').reverse().join('') }}

</div>

<2. computed 속성을 사용한 문법>

new Vue({

el:'#example',

data: { message:'안녕하세요' },

computed: {

    reversedMessage:function () {

      return this.message.split('').reverse().join('')

    }

} })

<div id="example">

  <p>원본 메시지: "{{ message }}"</p>

  <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>

</div>

computed의 캐싱 VS methods
템플릿 문법의 JavaScript 표현식에서 methods를 사용하여 위 예제의 computed를 사용 한 결과와 동일한 결과를 얻을 수 있습니다.

여기서 methods란?
자바스크립트 함수를 모듈화했던 js파일처럼 vue컴포넌트 내에서 함수를 정의하는 부분

ex) js/common.js

function test()

{

console.log(‘do something’)

}

function testFn()

{

alert('this is test function!')

}

<methods 사용 예제>

<div id="example">

  <p>원본 메시지: "{{ message }}"</p>

  <p>역순으로 표시한 메시지: "{{ reversedMessage() }}"</p>

</div>

<script>

export default {

  methods: {

    reversedMessage () {

      return this.message.split('').reverse().join('')

    } 

</script>

computed를 사용하는 방법과 methods를 사용하는 방법의 최종 결과는 동일합니다

computed와 methods의 차이점은 computed는 종속 대상(reversedMessage의 종속 대상은 message)을 캐싱한다는 것입니다. 그렇기 때문에 computed는 종속 대상이 변경 될 때만 함수를 호출합니다. message 값이 변하지 않는 한 reversedMessage를 여러번 호출하여도 다시 계산하지 않고 캐싱한 결과를 즉시 반환합니다.

시간이 많이 걸리는 계산을 할 때, computed을 사용하면 더 좋은 호율의 어플리케이션을 만들 수 있습니다. 캐싱을 하지 않고, 호출 할 때마다 새롭게 계산을 해야 하는 경우에는 methods를 사용해야 합니다.
