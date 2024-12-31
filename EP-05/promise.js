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

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fetch("https://jsonplaceholder.typicode.com/posts/1")
//                 .then((response) => response.json())
//                 .then((data) => resolve(data))
//                 .catch((error) => reject(error));
//         }, 2000)
//     })
// };

// // consuming Promise 
// const dataFetch = fetchData();
// dataFetch
//     .then(data => console.log(`resulting responses: ${JSON.stringify(data, null, 5)}`))
//     .catch(error => console.log(`this error:[ ${error} ]occured`))

// another mini tutorial for Promise.all()

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}
const fetchAllData = () => {
    return Promise.all([
        fetchData('https://jsonplaceholder.typicode.com/posts/1'),
        fetchData('https://jsonplaceholder.typicode.com/users/1')
    ])
}
const myData = fetchAllData()

myData
    .then(result => {
        const [posts, user] = result;
        console.log(`Posts: ${JSON.stringify(posts, null, 3)}`);
        console.log(`User: ${JSON.stringify(user, null, 3)}`);
    })
.catch(error => console.log(error))