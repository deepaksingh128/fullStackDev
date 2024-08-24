// enums:- named constants , 
// generics

enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function pressedKey(key: Direction) {
    switch(key) {

        case Direction.Up: 
            console.log(Direction.Up + " is pressed");
            break;

        case Direction.Down: 
        console.log(Direction.Down + " is pressed");
        break;

        case Direction.Left: 
            console.log(Direction.Left + " is pressed");
            break;

        case Direction.Right: 
            console.log(Direction.Right + " is pressed");
        break;

        default: 
            console.log("Invalid input");
    }
}

// pressedKey(Direction.Up);
// pressedKey(Direction.Down);
// pressedKey(Direction.Left);
// pressedKey(Direction.Right);



function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const val = getFirstElement(["deepak", 2]);
// console.log(val.toUpperCase()); // error
if( typeof val === 'number') {
    console.log("val is ", val);
}
if( typeof val === 'string') {
    console.log("val in uppercase is ", val.toUpperCase());
}


