import { useState } from 'react';

function ATM() {
    let [amount, changeAmount] = useState(0);
    const addFive = () => {        
        changeAmount(amount+5)
    }
    const addOne = () => {        
        changeAmount(amount+1)
    }
    const substractOne = () => {        
        changeAmount(amount-1)
    }
    const substractFive = () => {        
        changeAmount(amount-5)
    }
    return (
        <div>
            <button onClick={substractFive}>-5</button>
            <button onClick={substractOne}>-1</button>
            <span> {amount} </span>
            
            <button onClick={addOne}>+1</button>
            <button onClick={addFive}>+5</button>
        </div>

    )
}

export default ATM;