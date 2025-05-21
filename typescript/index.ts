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

// Arrays - there are two syntax. One is Generic style like and another is normal one(used more)

// enum - is the special class that has group constants. comes in two flavors string and numeric()
enum directions {
  right,
  left,
  up,
  down,
}

let hamroDirections = directions.down;
console.log("hamroDicretion", hamroDirections);

console.log("directions", directions);

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log("StatusCode", StatusCode.Accepted);

//  So you can mix string and number but don't do it

// Type Aliases and Interfaces
// Interface can only apply to object amd they can extend
interface Line {
  width: number;
}

interface Reactangle extends Line {
  height: number;
}

// Union
// It is just union that is it

// Type Casting
// used with as keywords

// Things should be converted to unknown before typecasting
class Bibek {
  private name!: string;
}

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(10, 20);

console.log(myRect.getArea());

// Generics
