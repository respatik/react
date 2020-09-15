import React, {useState} from 'react'



    
export default function Counterfunction() {
        const[count, setCount] = useState (0);
    
    const increment = () => {
        setCount(count + 1)
    }
    
    const decrement = () => {
        if (count <=0){
            alert ("cannot be minus")
        } else {
        setCount(count - 1)
        }
    }
    
    return (
        <div className="counter-function">
            <h1 id="counter-function-h1">Counter Function</h1>
            <button className="decrement" onClick={decrement}>-</button>
            <h3 style={{display: "inline-block"}}>{count}</h3>
            <button className="increment" onClick={increment}>+</button>
            </div>
    );
}




