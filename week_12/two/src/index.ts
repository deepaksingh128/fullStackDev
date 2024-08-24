interface User {
    name: string,
    age: number
}

function sumOfAges(user1: User, user2: User) {
    return user1.age + user2.age
}

const res = sumOfAges({
        name: "deepak",
        age: 24
    },
    {
        name: "deepesh",
        age: 18
    }
);

console.log(res);