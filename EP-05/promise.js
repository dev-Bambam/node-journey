const myPromise = new Promise((resolve, reject) => {
    // simulate async operation with setTimeout
    setTimeout(() => {
        const success = true;
        success ? resolve('Operation successful') : reject('Operation failed')
    }, 2000)
});
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error)
    });

console.log('my Promise tutorial')
