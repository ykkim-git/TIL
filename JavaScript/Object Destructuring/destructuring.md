# Object Destructuring (구조 분해 할당)

## 디스트럭처링(Destructuring)은 구조화된 배열 또는 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는 것이다. 배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용하다.

~~~javascript
// BAD case
function displayPerson(person) {
	const name = person.age;
	const age = person.age;
  displayAvatar(name);
	displayName(name);
	displayProfile(name, age);
}

// GOOD case
function displayPerson(person) {
	const { name, age } = person;
	displayAvatar(name);
	displayName(name);
	displayProfile(name, age);
}
~~~