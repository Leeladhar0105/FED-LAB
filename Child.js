import React from 'react'
import SecondChild from './SecondChild'

function Child(props) {
    const {color,backColor}=props;
    console.log("First child");
    console.log('color',color);
    console.log('Background color',backColor);
  return (
    <div>
        <SecondChild color={color} backColor={backColor}/>
    </div>
  );
}

export default Child