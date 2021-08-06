// Let's consider a function that accepts a string or a number
// If a string is given, it returns a string
// If a number is given it returns a number

// I can type this function as follows:
type MyFun<T> = (input: T) => T;

const myFun: MyFun = (input: number | string) => {
  if (typeof input === "number") {
    return input + 2;
  }
  if (typeof input === "string") {
    return "input was a string";
  }
};
