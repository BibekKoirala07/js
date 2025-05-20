// transpilation vs compilation - turning one language to another and just changing versin or something like that
// annotation vs inference
// strict mode - be as strict as possible, enable as strict check

function typeCheck() {
  console.log("here");
}

typeCheck();

// Tuples - like array but fixed and not used that much, position matter garxa hai
let cordinates: [number, number] = [20, 20]; // since they are fixed they may be used for cordinates, RGB color
let color: [number, number, number] = [23, 34, 45]; // for RGB, Latitude
color.push(23); // however they can be pushed, to prevent this we can use as const to make it readonly type
// you can make one members optional also. Generally Good tips is make types readonly
type ApiResponse = [status: number, code: string]; // you can see it we can have named tuples also

// Arrays - there are two syntax. One is Generic like and another is normal one(used more)
