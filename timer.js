var time = 0;

let timer = setInterval(() => {
    time += 1
    // console.log(`${time} sec has passed`);

    // if (time > 9) {
    //     clearInterval(timer)
    // }

    time > 9 ? clearInterval(timer) : console.log(`${time} sec has passed`);
}, 1000)