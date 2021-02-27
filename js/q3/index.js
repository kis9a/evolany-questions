const Question3 = () => {
  convert(0); // "$0.00"
  convert(100); // "$100.00"
  convert(3.268); // "$3.26"
  convert(-16); // "-$16.00"
};

const convert = (num = 0) => {
  const FixedNumberOfDigits = onFixNumberOfDigits(num);
  const FixedPointPosition = onFixPointPosition(`${FixedNumberOfDigits}`);
  const result = onFixDollarString(FixedPointPosition);
  console.log(result);
  return result;
};

const onFixNumberOfDigits = (num = 0) => {
  return Math.floor((num * 100) / 100);
};

const onFixPointPosition = (numStr = "") => {
  return Number.parseFloat(numStr).toFixed(2);
};

const onFixDollarString = (numStr = "") => {
  if (Math.sign(Number(numStr)) === -1) {
    const newsStr = numStr.slice(1);
    return `-$${newsStr}`;
  } else {
    return `$${numStr}`;
  }
};

export default Question3;
