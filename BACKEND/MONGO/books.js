const mongoose = require('mongoose');

main() 
.then(() =>{
    console.log('Connected to MongoDB');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/books');
    };

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
         required: true,
    },
    author: {
        type: String,
       
    },
    price: {
        type: Number,

    },
});  

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    title: "Mathematics 12", 
    author: "John Doe",
    price: 29.99
});