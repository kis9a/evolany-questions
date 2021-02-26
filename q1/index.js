/********************************************/
/* Question1: Remove all spaces in a string */
/********************************************/

const Question1 = () => {
  const text = " a bc  def  ";
  const result = text.replace(/\s/g, "");
  console.log(result);
};

Question1();
