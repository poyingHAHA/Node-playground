const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
}

// Convert JS object into JSON string
const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)

// Convert JSON string into object
const parseData = JSON.parse(bookJSON)
console.log(parseData.author)

