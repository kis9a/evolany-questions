const obj1 = {
  foo: [1, 2],
  bar: [3],
  baz: [4],
};

const obj2 = {
  foo: [5],
  baz: [6, 7],
};

// EXPECT
// {
//   foo: [1, 2, 5],
//   bar: [3],
//   baz: [4, 6, 7]
// }

const Question5 = () => {
  const objKeys = Object.keys({ ...obj1, ...obj2 });
  let result = {};

  objKeys.map((key) => {
    const newObjValue = [];
    obj1[key] && newObjValue.push(...obj1[key]);
    obj2[key] && newObjValue.push(...obj2[key]);
    result = { [key]: newObjValue, ...result };
  });
  console.log(result);
};

export default Question5;
