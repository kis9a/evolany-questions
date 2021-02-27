const obj1 = {
  foo: [1, 2],
  bar: [3],
  baz: [4],
};

const obj2 = {
  foo: [5],
  baz: [6, 7],
};

console.log(Object.assign({ obj1, obj2 }));
const apple = { ...obj1, ...obj2 };
// console.log(keyof obj1)

const Question5 = () => {
  return "adfa";
};

export default Question5;
