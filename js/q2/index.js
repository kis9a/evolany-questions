const Question2 = () => {
  const text = "local_host_time";
  const splitedCharList = text.split("_");
  const newSplitedCharList = [];
  splitedCharList.forEach((splitedChar) => {
    const char = toUpperFirstChar(splitedChar);
    newSplitedCharList.push(char);
  });
  const result = newSplitedCharList.join("");
  console.log(result);
  return result;
  // return 'local_host_time'.replace(/_([a-z])/g, (_, i) => i.toUpperCase())
};

const toUpperFirstChar = (str = "") => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};

export default Question2;
