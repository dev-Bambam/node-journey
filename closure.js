function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction("Hello"); // Returns innerFunction
newFunction("World");
// Output:
// Outer Variable: Hello
// Inner Variable: World
