import React from "react";
import SingleTodo from "./componet/SingleTodo";
import { Todo } from "./model";

// grid grid-cols-4 gap-4 ---- for colums display
// grid grid-cols-3 gap-4 grid-rows-4 grid-flow-col ---- for row display 

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className="grid grid-cols-4 gap-3">
            {
                todos.map((todo) => (
                    <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                ))}
        </div>
    )
}

export default TodoList;