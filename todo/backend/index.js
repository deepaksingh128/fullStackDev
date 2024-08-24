const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Todo } = require("./db");
const { createSchema, updateSchema } = require("./types");

const app = express();
app.use(express.json());
app.use(cors());


app.post('/todo', async (req, res) => {
    const payload = req.body;
    const parsedPayload = createSchema.safeParse(payload);

    if (!parsedPayload.success) {
        res.json({
            msg: "You sent wrong inputs"
        });
    } else {
        const todo = await Todo.create( {title: payload.title, description: payload.description} );

        res.json({
            msg: "Todo created successfully",
            todo: todo
        });
    }
});

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({});

    res.json({
        todos: todos
    });
});

app.put('/completed', async (req, res) => {
    const payload = req.body;
    const parsedPayload = updateSchema.safeParse(payload);

    if (!parsedPayload.success) {
        res.json({
            msg: "You sent wrong inputs"
        });
    } else {
        await Todo.updateOne(
            {
                _id: payload.id
            },
            {
                completed: true
            }
        )

        res.json({
            msg: "Updated successfully"
        });
    }
});


app.listen(3000, () => {
    console.log("Server started successfully at port 3000.");
});