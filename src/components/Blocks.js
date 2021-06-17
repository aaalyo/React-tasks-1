
import { useState } from 'react';

function ChangeBlockColor() {
    let [selectedBlock, setSelectedBlock] = useState(1);

    const blocks = [1, 2, 3, 4, 5];

    const toTheRight = () => {
        if (selectedBlock < 5) {
            setSelectedBlock(selectedBlock+1)
        }
        
    }
    const toTheLeft = () => {
        if (selectedBlock > 1) {
            setSelectedBlock(selectedBlock-1)
        }
    }

    return (
        <div>
            <div>
                <ul style={{ display: "inline-flex" }}>
                    {blocks.map((index) => {
                        let color = 'blue';
                        if (index === selectedBlock) {
                            color = 'red';
                        }
                        return (
                            <div key={index} style={{ backgroundColor: color, width: "100px", height: "100px", margin: "3px" }}>

                            </div>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button onClick={toTheLeft} style={{ margin: "3px" }}>LEFT</button>
                <button onClick={toTheRight} style={{ margin: "3px" }}>RIGHT</button>
            </div>
        </div>
    )
}

export default ChangeBlockColor;