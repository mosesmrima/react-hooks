import './App.css'
import {UseReducer} from "./hooks/UseReducer.jsx";
import {UseState} from "./hooks/UseState.jsx";
import {UseEffect} from "./hooks/UseEffect.jsx";

function App() {

  return (
    <div className="App">
        <UseReducer/>
        <UseState/>
        <UseEffect/>
    </div>
  )
}

export default App
