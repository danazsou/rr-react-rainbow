import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
;

function App(){
    let  [colors, setColors] = useState(['violet', 'blue',
                   'lightblue', 'green',  
                   'greenyellow', 'yellow', 
                   'orange', 'red'])

    let colorMap = colors.map((color, i) => {
      return <ColorBlock key={i} colorVal={color}/>
      //above syntax is passing in the properties -- therefore, its the key value pair!!! 
})

const addColor = (newColor) => {
  setColors ([...colors, newColor])
}

    return (
        <div className="App">
          {colorMap}
          <ColorForm addColor={addColor}/>
        </div>
    )
}

export default App;
