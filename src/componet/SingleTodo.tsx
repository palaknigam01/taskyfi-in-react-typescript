import React, { useState } from "react";
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from 'react-icons/ai';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
    };

    return (
        <div>
            <form className="flex w-100 rounded-sm p-5 mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 " onSubmit={(e) => handleEdit(e, todo.id)}>
                {edit ? (
                    <input className="ml-60 mt-2 space-x-1.5  text-lg cursor-pointer flex fill-white" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                ) : todo.isDone ? (
                    <s className="flex p-2 border-0 text-base">
                        {todo.todo}
                    </s>

                ) : (
                    <span className="flex p-2 border-0 text-base">
                        {todo.todo}
                    </span>
                )}

                <div className="ml-60 mt-2 space-x-1.5  text-lg cursor-pointer flex fill-white">
                    <span onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}>
                        <AiFillEdit />
                    </span>
                    <span>
                        <AiFillDelete onClick={() => handleDelete(todo.id)} />
                    </span>
                    <span>
                        <AiOutlineCheck onClick={() => handleDone(todo.id)} />
                    </span>
                </div>
            </form>
        </div >
    )
}

export default SingleTodo;