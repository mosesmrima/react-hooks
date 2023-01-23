import {useState} from "react";

export const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>useEffect</h1>
            <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount(prevState => prevState - 1 )}>-</button>
        </>
    );
}