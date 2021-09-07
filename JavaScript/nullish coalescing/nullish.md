## nullish coalescing

### null이나 undefined 체크 syntax

#### leftExpr ?? rightExpr (왼쪽이 null이거나 undefined일 때 오른쪽 코드가 실행된다)

~~~javascript
function printMessage(text) {
  // text가 null이나 undefined일 때 nothing to display
	const message = text ?? 'nothing to display';

	// 왼쪽 값이 falsy 일경우 오른쪽 실행.
	const message = text || 'nothing to display';

	console.log(message);
}
printMessage('hello'); // hello
printMessage(undefined); // nothing to display
printMessage(null); // nothing to display
~~~
