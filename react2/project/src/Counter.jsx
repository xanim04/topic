import { useState } from "react";

function Counter() {
const [counter,setCounter] = useState(0) 
function increment() {
    setCounter(counter+1)
}

function decrement() {
    setCounter(counter-1)
}
    return(
       <div>
        <button onClick={increment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement}>-</button>
       </div>
    )
}


export default Counter;