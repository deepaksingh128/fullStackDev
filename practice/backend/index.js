const express = require('express');
const app = express();
const { createTodo, updateTodo} = require('./types');
const { todo } = require('./db');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
    }

    // put in mongodb
    await todo.create({
        title: createPayload.title,
        desc: createPayload.desc,
        completed: false
    });

    res.json({
        msg: "Todo created successfully"
    })
});

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        });
    }
    await todo.updateOne(
        {
            _id: req.body.id
        },
        {
            completed: true
        }
    )

    res.json({
        msg: "Todo updated successfully"
    })
});

app.listen(3000, () => {
    console.log("Successfully started the server at port", 3000);
})