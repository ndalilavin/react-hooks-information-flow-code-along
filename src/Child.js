import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor,color }) {
  // return <div className="child" style={{ backgroundColor: "#FFF" }} />;
  //console.log(onChangeColor)


function handleClick() {
  const newColor = getRandomColor();
  onChangeColor(newColor);
}

return( <div
  onClick={handleClick}
  className="child"
  style={{background: color}}
  />
  );

}

export default Child;
