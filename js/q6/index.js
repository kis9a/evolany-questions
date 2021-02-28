const Question6 = () => {
  console.log(add(1)()); // 1
  console.log(add(1)(2)()); // 3
  console.log(add(1, 2)()); // 3
  console.log(add(1)(2, 3)(4)()); // 10
};

const add = (...a) => {
  return (...b) => {
    if (b.length === 0) return arrSum(a);
    return (...c) => {
      if (c.length === 0) return arrSum(a) + arrSum(b);
      return () => {
        return arrSum(a) + arrSum(b) + arrSum(c);
      };
    };
  };
};

const arrSum = (arr = [0]) => arr.reduce((a, b) => a + b, 0);

export default Question6;
