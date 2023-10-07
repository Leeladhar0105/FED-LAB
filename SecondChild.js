import React from 'react'
import ThirdChild from './ThirdChild'

function SecondChild(props) {
    const {color,backColor}=props;
    console.log("Second child");
    console.log('color',color);
    console.log('Background color',backColor);
  
  return (
    <div><ThirdChild color={color} backColor={backColor}/></div>
  )
}

export default SecondChild