import React, {useState} from 'react';

const CounterApp = ({ value }) =>{
    
    
          
    
    
    const [counter, setCounter] = useState(value);
    
   
    
    //handleAdd
    const handleAdd=()=>{
        setCounter(counter + 1)
    }
    const handleSub =()=>{
        setCounter(counter - 1)
    }    
    
    const handleReset = () => {
        setCounter(value)
    }
    
        
    
    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSub}>-1</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )

}
export default CounterApp;