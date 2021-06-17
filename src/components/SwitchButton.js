import { useState } from 'react';

function SwitchButton() {
    let [text, setText] = useState('Foo');
    const changeText = () => {        
        
        if (text === 'Baz') {
            setText(text = 'Bar');
        } else if (text === 'Bar') {  
            setText(text = 'Foo');            
        } else if (text === 'Foo') {
            setText(text = 'Baz');           
        }       
    }   
return (
    
    <div>
        <button onClick={changeText}>{text}</button>
    </div>
)
};

export default SwitchButton;