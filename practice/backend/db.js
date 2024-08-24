const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deepaksingh128367:4mqHacELEssoQDCv@cluster0.makubps.mongodb.net/practice-to-do');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean
});

const todo = mongoose.model('Todo', todoSchema);

module.exports = {
    todo
}

