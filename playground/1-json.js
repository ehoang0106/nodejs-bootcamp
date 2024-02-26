const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Moliday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);

// console.log(parsedData.title);

// fs.writeFileSync('1-json.txt', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer.toString());