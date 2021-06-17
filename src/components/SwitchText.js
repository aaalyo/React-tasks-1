import { useState } from 'react';

function SwitchText() {

    let [text, setText] = useState('Foo');
    let color = 'red';
    if (text === 'Foo') {
        color = 'red';
        
    } else {
        color = 'blue';       
    }

    const changeText = () => {
        
        if (text === 'Baz') {
            setText(text = 'Foo');
            
        } else {  
            setText(text = 'Baz');            
        }       
    }   
    return (
        <div>
            <h2 style={{color: color}}>
                {text}
            </h2>
            <button onClick={changeText}>
                Click me
            </button>
        </div>
    )
}

export default SwitchText;