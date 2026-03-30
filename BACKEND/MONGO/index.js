const mongoose = require('mongoose');

main()
.then((res) =>{ 
    console.log('Connected t{o MongoDB');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  };

const userSchema = new mongoose.Schema({
    name: String,
    Email: String,
    age: Number,
});
const User = mongoose.model('User', userSchema);
User.deleteOne({ name: "bruce"})
.then((res) => {
    console.log(res);
}
).catch((err) => {
    console.log(err);
});


// User.findByIdAndUpdate("69b0fbab715ac566ba614d4e",{age: 35},{new:true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });



// User.insertMany([
//     {name: "tony",email:"tony@gmail.com",age:50},
//     {name: "steve",email:"steve@gmail.com",age:30},
//     {name: "bruce",email:"bruce@gmail.com",age:40},

// ]).then((res) => {  
//      console.log(res);
//  });

// const user1 = new User({
//     name: 'adam',
//     Email: 'adam@yahoo.in',
//     age: 25,
// });    
// user1.save();
// const user2= new User({
//     name: 'eve',
//     Email: 'eve@yahoo.in',
//     age: 26,
// });    
// user2.save()
// .then((res) => {  
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });