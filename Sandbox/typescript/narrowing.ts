// Type issue: input can be a number or a string
// but it is not possible to multiple a string by 2
const multiply = (input: number | string) => {
  return input * 2;
};

// So let's do something if we have a number
// The "typeguard" below checks wether or not we're dealing with a number
// We narrowed the type to number only
const multiplyAgain = (input: number | string) => {
  if (typeof input === "number") {
    return input * 2;
  }
  return 0;
};
console.log(multiply(4));
console.log(multiplyAgain(2));

// It is important to understand that "typeof" is a javascript function. It returns
// a value only (like "number", "string" , "boolean"), not a type. So testing
// for a type like below does NOT work:
type Toto = {
  propA: number;
  propB: string;
};
const functionA = (input: Toto | number) => {
  if (typeof input === Toto) {
    return input * 2;
  }
};

// Little trap: typeof null returns "object"
// In the example below there is a typeguard that is useless, arg can still be null
// after narrowing.
const doIt = (arg: number[] | null) => {
  if (typeof arg === "object") {
    return arg[0];
  }
};
