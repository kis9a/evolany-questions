const Question4 = (num = 3) => {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      console.log(`${i}/${num}s`);
      for (let n = 1; n <= 10; n++) {
        console.log(n);
      }
    }, i * 1000);
  }
};

export default Question4;
