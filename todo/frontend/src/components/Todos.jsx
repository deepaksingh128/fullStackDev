import React from "react";

export function Todos({todos}) {
    return <div>
        {todos.map((todo) => {
            return <div>
                {todo.title} <br />
                {todo.description} <br />
                <button>Mark as done!</button> <br />
            </div>
        })}
    </div>
}