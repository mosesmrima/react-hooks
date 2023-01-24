import {useEffect, useMemo, useState} from "react";

export const UseEffect = () => {
   const [todo, setTodo] = useState("")
    const [todoList, addTodo] = useState([])
    const [count, setCount] = useState(0)
    const val = useMemo(() => delay(count), [count])
    useEffect(() => {
        addTodo(JSON.parse(localStorage.getItem("todoList")))
    }, [])
    const handleAdd = () => {
       if(todo && !todoList.includes(todo)) {
           addTodo(prevTodo => [...prevTodo, todo])
       }
    }
    const handleDelete= (el) => {
      const i = todoList.indexOf(el)
       const newTodo = todoList.filter( (el, index) => i !== index )
        addTodo(newTodo)
    }
    const handleSave = () => {
       localStorage.removeItem("todoList")
       localStorage.setItem("todoList", JSON.stringify(todoList))
   }
    return (
        <>
            <h1>use Effect</h1>
           <input
               type={"text"}
               name={"todo"}
               value={todo}
               onChange={(e) => setTodo(e.target.value)}
           />
            <button
                onClick={handleAdd}
            >Add todo</button>
            <div>
                <h5>My todo list</h5>
                <ul>
                    {todoList.map( (el,index )=> <li
                        key={index}
                    >{el} <button onClick={() => handleDelete(el)}>Delete</button> </li>)}
                </ul>
                <button onClick={() => handleSave()}>Save Todo</button>
                <br/>
                <button onClick={() => setCount(count + 1)}>Calculate</button>
                <p>you have calculated {val}</p>
            </div>
        </>
    );
}


const delay = (num) => {
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};