interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string       // optional
};

function greet(firstName: string) {
    console.log("hello ", firstName);
}

function sum(a: number, b: number): number { // explicitly defining the return type(recommended)
    return a = b;
}

function isLegal(age: number): boolean {  // explicitly defining the return type(recommended)
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

function runAfterOneSecond(fn: Function): any {
    setTimeout(fn, 2000);
}
//     OR
function runAfter1S(fn: () => void): number {  // fn as argument , with no parameters, void as return type
    setTimeout(fn, 1000);
    return 1;
}

function isLegalToVote(user: User) {
    if (user.age > 18) {
        return true;
    } else {
         return false;
    }
}

greet("deepak");
const val = sum(2, 3);
console.log("Sum is ", val);
const legal = isLegal(20);
console.log("Legal :- ", legal);
// funciton as an argument
runAfterOneSecond(() => {
    console.log("I have called after two second");
});
runAfter1S(() => {
    console.log("I have called after 1 sec");
});

const ans = isLegalToVote({
    firstName: "deepak",
    lastName: "singh",
    age: 25
});
console.log("Legal to vote: ", ans);