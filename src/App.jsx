import './App.css'
import {UseReducer} from "./hooks/UseReducer.jsx";
import {UseState} from "./hooks/UseState.jsx";
import {UseEffect} from "./hooks/UseEffect.jsx";
import {UseRef} from "./hooks/UseRef.jsx";
import {Component1} from "./hooks/UseContext.jsx";

function App() {

  return (
    <div className="App">
        <UseReducer/>
        <UseState/>
        <UseEffect/>
        <UseRef/>
        <Component1/>
    </div>
  )
}

export default App
