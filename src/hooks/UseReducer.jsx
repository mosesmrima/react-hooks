import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.operation) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            return {count: state.count}
    }
}

export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <>
            <h1>useReducer</h1>
            <button onClick={()=>dispatch({operation: "increment"})}>+</button>
            <span>{state.count}</span>
            <button onClick={()=> dispatch({operation: "decrement"})}>-</button>
        </>
    );
}