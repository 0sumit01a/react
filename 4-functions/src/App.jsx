// import React from 'react'

// const App = () => {
//   function greet(){
//     console.log("Hello, welcome to the React app!")
//   }
//   function mouseEnter(){
//     console.log("Mouse entered the button area");
//   }
//   function functionChanging(name){
//     console.log("You have entered: " + name);
//   }
//   return (
//     <div>
//       <div className="sec1">
//         <h1>Working with function</h1>
//       <button onClick={greet}>Click</button>
//       <button onMouseEnter={mouseEnter}>Hover Me</button>
//       <button>explore this</button>

//       <button onClick={()=>{
//         console.log("Hello guys");
//       }}>hey</button>

//       </div>
      
//       <div className="sec2">
//         <input onChange={(elem)=>console.log(elem.target)} type="text" placeholder='Enter name' />
//         <input 
//         onChange=
//         {
//           (elem)=>
//             functionChanging(elem.target.value)
//         }
//          type="text" placeholder='Enter name' />
//       </div>
    
    
//     </div>

    
//   )
// }

// export default App

import React, { useState } from "react";

const App = () => {
  // State to store the box's background color
  const [color, setColor] = useState("#ffffff");

  // Function to generate a random color based on mouse position
  const handleMouseMove = (e) => {
    const width = e.target.offsetWidth;
    const height = e.target.offsetHeight;
    const x = e.clientX / width * 255; // Normalize mouse X position to a value between 0 and 255
    const y = e.clientY / height * 255; // Normalize mouse Y position to a value between 0 and 255
    setColor(`rgb(${Math.floor(x)}, ${Math.floor(y)}, 150)`); // Set RGB color based on mouse position
  };

  return (
    <>
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: color,
        border: "2px solid #000",
        position: "relative",
        transition: "background-color 0.1s ease", // Smooth transition for color change
      }}
      onMouseMove={handleMouseMove}
    >
      <p style={{ textAlign: "center", lineHeight: "300px", color: "#fff" }}>
        Move your mouse!
      </p>
    </div>
    
    </>
  );
};

export default App;
