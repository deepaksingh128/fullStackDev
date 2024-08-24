const express = require("express");
const { Todo } = require("./db");
const { createTodo, updateTodo } = require('./types');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"  // not necessary to mention
}))

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You have entered wrong inputs"
        });
    } else {
        await Todo.create({
            title: createPayload.title,
            description: createPayload.description
        });
        res.json({
            msg: "Todo created successfully"
        });
    }
});

app.get("/todos", async (req, res) => {
    const todos = await Todo.find({});

    res.json({
        todos
    });
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You have sent wrong inputs"
        });
    } else {
        await Todo.updateOne(
            {
                _id: updatePayload.id
                // OR :- _id: req.body.id
            },
            {
                completed: true
            }
        );
        res.json({
            msg: "Todo mark as completed"
        });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

