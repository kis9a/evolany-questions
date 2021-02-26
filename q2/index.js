/**************************************************************/
/* Question2: Convert underscore naming convention into camel */
/**************************************************************/

const toUpperFirstChar = (str = "") => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};

const Question2 = () => {
  const text = "local_host_time";

  const splitedCharList = text.split("_");

  const newSplitedCharList = [];

  splitedCharList.map((splitedChar) => {
    const char = toUpperFirstChar(splitedChar);
    newSplitedCharList.push(char);
  });

  const result = newSplitedCharList.join("");

  console.log(result);
};

Question2();

//TODO: use regex
