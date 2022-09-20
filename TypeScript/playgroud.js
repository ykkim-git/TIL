var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 0] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 1] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 2] = "AUTHOR";
})(Role2 || (Role2 = {}));
//값을 할당하지 않으면 default: 0
var person_enum22 = {
    name: 'jay',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (person_enum22.role === Role2.ADMIN) {
    console.log('is admin');
}
