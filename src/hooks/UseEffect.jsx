import {useEffect, useState} from "react";

export const UseEffect = () => {
   const [todo, setTodo] = useState("")
    const [todoList, addTodo] = useState([])
    useEffect(() => {
        addTodo(JSON.parse(localStorage.getItem("todoList")))
    }, [])
    const handleAdd = () => {
       if(todo && !todoList.includes(todo)) {
           addTodo(prevTodo => [...prevTodo, todo])
       }
    }
    const handleDone = (el) => {
      const i = todoList.indexOf(el)
       const newTodo = todoList.filter( (el, index) => i !== index )
        addTodo(newTodo)
    }
    return (
        <>
            <h1>use Effect</h1>
           <input
               type={"text"}
               name={"todo"}
               value={todo}
               onChange={() => setTodo(event.target.value)}
           />
            <button
                onClick={handleAdd}
            >Add todo</button>
            <div>
                <h5>My todo list</h5>
                <ul>
                    {todoList.map( el => <li key={Math.floor(Math.random() * 100)}>{el} <button onClick={() => handleDone(el)}>Done</button> </li>)}
                </ul>
                <button onClick={() => localStorage.setItem("todoList", JSON.stringify(todoList))}>Save Todo</button>
            </div>
        </>
    );
}