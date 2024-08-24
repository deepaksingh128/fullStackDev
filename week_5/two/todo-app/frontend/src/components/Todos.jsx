// To render the todos:-


export function Todos({todos}) {  // destructuring -> (better); we can use props if want

    return <div>
        {todos.map(function (todo) {
            return (
                <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Mark as completed" }</button>
                </div>
            )
        })}
    </div>
}