var time = 0;

const timer = setInterval(() => {
  ms = 2000;
  time += 1;
  // console.log(`${time} sec has passed`);

  // if (time > 9) {
  //     clearInterval(timer)
  // }

  let stopper =
    time > 9 ? clearInterval(timer) : console.log(`${time} sec has passed`);
}, 1000);
