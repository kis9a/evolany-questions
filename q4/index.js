/***************************************/
/* Question4: Output 1-10 every second */
/***************************************/

const Question4 = (num = 20) => {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      for (let n = 1; n <= 10; n++) {
        console.log(n);
      }
    }, i * 1000);
  }
};

Question4();
