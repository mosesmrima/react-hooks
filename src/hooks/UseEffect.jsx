import {useEffect, useState} from "react";

export const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() =>{
        let timer = setTimeout(() => {
            setCount(count + 1)
        }, 1000)
        return () =>  clearTimeout(timer)
    }, [])
    return (
        <>
            <h1>useEffect</h1>
            <p>I have re-rendered {count} times</p>
        </>
    );
}