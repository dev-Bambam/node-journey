// const myPromise = new Promise((resolve, reject) => {
//     // simulate async operation with setTimeout
//     setTimeout(() => {
//         const success = true;
//         success ? resolve('Operation successful') : reject('Operation failed')
//     }, 2000)
// });
// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error)
//     });

console.log('my Promise tutorial')

// building a mini project 

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts/1")
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        }, 2000)
    })
};

// consuming Promise 
const dataFetch = fetchData();
dataFetch
    .then(data => console.log(`resulting responses: ${JSON.stringify(data, null, 5)}`))
    .catch(error => console.log(`this error:[ ${error} ]occured`))
