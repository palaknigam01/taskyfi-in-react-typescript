import React from "react";


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <div>
            <form className="flex w-90 relative items-center " onSubmit={handleAdd}>
                <input className="w-full rounded-full px-40 py-6 text-xl border-2 shadow-md " type={"text"} placeholder="Enter a Task" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className="absolute w-10 h-10 m-12px rounded-full right-5 border-0 text-xl bg-sky-500 hover:bg-sky-700 text-white shadow-xl" type={"submit"} >Go</button>
            </form>
        </div>
    )
}

export default InputFeild;