const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://deepaksingh128367:4mqHacELEssoQDCv@cluster0.makubps.mongodb.net/practiceTodo");

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