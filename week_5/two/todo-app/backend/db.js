const mongoose = require("mongoose");
require('dotenv').config();

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD 
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.makubps.mongodb.net/todo-app`);


const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    Todo
}