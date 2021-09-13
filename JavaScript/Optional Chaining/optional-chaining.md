```javascript
// bad case
function job(person) {
	if (person.job && person.job.title) {
		console.log(person.job.title);
}

// good code
function job(person) {
	if (person.job?.title) {
		console.log(person.job.title);
	}
}

// good code
function job(person) {
	const title = person.job?.title ?? 'No Job Yet';
	console.log(title);
}
```
