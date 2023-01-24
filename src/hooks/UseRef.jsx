import {useRef} from "react"

export const UseRef = () => {
    const inputRef = useRef()
    const focusInput = () => inputRef.current.focus()
    return (
        <>
            <h1>useRef</h1>
            <input type={"text"} ref={inputRef}/>
            <button onClick={focusInput}>Focus on input</button>
        </>
    );
}