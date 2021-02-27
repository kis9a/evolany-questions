import Question1 from "./q1/index";
import Question2 from "./q2/index";
import Question3 from "./q3/index";
import Question4 from "./q4/index";
import Question5 from "./q5/index";

const main = () => {
  const args = process.argv.slice(2);

  if (args && args.length > 0) {
    args.forEach((arg) => {
      switch (arg) {
        case "1":
          Question1();
          break;
        case "2":
          Question2();
          break;
        case "3":
          Question3();
          break;
        case "4":
          Question4();
          break;
        case "5":
          Question5();
          break;
        default:
          break;
      }
    });
  } else {
    allQuestions();
  }
};

const allQuestions = () => {
  Question1();
  Question2();
  Question3();
  Question4();
  Question5();
};

main();
