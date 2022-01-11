const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const authorSchema = new Schema({
//     name: String,
//     age: Number
// });

const authorSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
})

const Author = mongoose.model('author', authorSchema)
module.exports = Author;
// module.exports = mongoose.model('Author', authorSchema);