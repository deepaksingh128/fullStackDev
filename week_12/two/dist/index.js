"use strict";
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const res = sumOfAges({
    name: "deepak",
    age: 24
}, {
    name: "deepesh",
    age: 18
});
console.log(res);
