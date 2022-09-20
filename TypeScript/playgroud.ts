enum Role2 { ADMIN, READ_ONLY, AUTHOR }
//값을 할당하지 않으면 default: 0

const person_enum22 = {
  name: 'jay',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
}

if (person_enum22.role === Role2.ADMIN) {
  console.log('is admin');
}