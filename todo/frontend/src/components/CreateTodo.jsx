import React, { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <>
            <input style={{
                paadding: 6, margin: 4
            }} 
            onChange={function (e) {
                const value = e.target.value;
                setTitle(e.target.value);
            }} type="text" placeholder="title"/> <br />

            <input style={{
                paadding: 6, margin: 4
            }} onChange={function (e) {
                const value = e.target.value;
                setDescription(e.target.value);
            }} type="text" placeholder="description"/> <br />

            <button style={{
                paadding: 6, margin: 4
            }} onClick={
                fetch("http://localhost:3000/todo", {
                    method: 'POST',
                    body: JSON.stringify({
                        title: {title},
                        description: {description}
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(async function (res) {
                        const json = res.json();
                        alert("Todo added");
                    })
            }>Add todo</button>
        </>
    )
}