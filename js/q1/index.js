const Question1 = () => {
  return " a bc  def  ".replace(/\s/g, "");
  // Solution 2
  // return ' a bc  def  '.split(' ').join('');
  // Solution 3
  // return [..." a bc  def  "].filter((t) => t !== " ").join("");
};

export default Question1;
