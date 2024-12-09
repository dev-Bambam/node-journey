function makeCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}

var counter = makeCounter();
counter();
counter();
counter(); 
counter();