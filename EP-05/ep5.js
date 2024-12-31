const fs = require('fs');
fs.readFile('./input.txt', 'utf-8', (error, data) => {
    data ? toJSON(data) : console.log(error)
    console.log(data)
})
console.log('reading file ...')
function toJSON(data) {
    const json = JSON.parse(data);
}